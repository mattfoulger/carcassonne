import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setClientId, setState, setConnectionState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import getClientId from './client_id';
import App from './components/App';
import {GameContainer} from './components/Game';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

require('./style.css');

const socket = io(`${location.protocol}//${location.hostname}:3050`);

socket.on('state', state =>
  store.dispatch(setState(state))
);
[
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed'
].forEach(ev =>
  socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const createStoreWithMiddleware = compose(
  applyMiddleware(
    remoteActionMiddleware(socket)
  ),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = createStoreWithMiddleware(reducer);
store.dispatch(setClientId(getClientId()));

const routes = <Route component={App}>
  <Route path="/" component={GameContainer} />
</Route>;

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} shortcut='ctrl+d'/>
    </DebugPanel>
  </div>,
  document.getElementById('app')
);


