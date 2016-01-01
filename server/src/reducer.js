import { combineReducers } from 'redux'
import {List, Map, fromJS} from 'immutable';

import initializeGame from './reducers/initializeGame';
import drawTile from './reducers/drawTile';
import placeTile from './reducers/placeTile';
import endTurn from './reducers/endTurn';
import startTurn from './reducers/startTurn';

const INITIAL_STATE = Map();

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INITIALIZE_GAME':
    return initializeGame(state, action.tileset, action.players);
  case 'DRAW_TILE':
    return startTurn(endTurn(drawTile(state, action.player)));
  case 'PLACE_TILE':
    return startTurn(endTurn(placeTile(state, action.tile, action.position, action.rotation)));
  case 'END_TURN':
    return startTurn(endTurn(state));
  }
  return state;
}