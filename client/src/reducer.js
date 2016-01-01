import {List, Map} from 'immutable';
import setLegalMoves from './reducers/setLegalMoves'
import placeTile from './reducers/placeTile'
import clearPlaced from './reducers/clearPlaced'
import rotateTile from './reducers/rotateTile'

function setConnectionState(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState,
    connected
  }));
}

function setState(state, newState) {
  return state.merge(newState);
}

function selectTile(state, tileID) {
  const tiles = state.get('tiles');
  const clearedTiles = tiles.map(tile => {
    return tile.set('selected', false);
  })
  const newTiles = clearedTiles.setIn([tileID, 'selected'], true);
  return state.set('tiles', newTiles);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_CLIENT_ID':
    return state.set('clientId', action.clientId);
  case 'SET_CONNECTION_STATE':
    return setConnectionState(state, action.state, action.connected);
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SELECT_TILE':
    return setLegalMoves(selectTile(clearPlaced(state), action.tile));
  case 'PLACE_TILE':
    return placeTile(clearPlaced(state), action.tile, action.position, action.rotation);
  case 'ROTATE_TILE':
    return rotateTile(state, action.tile, action.position);
  }
  return state;
}
