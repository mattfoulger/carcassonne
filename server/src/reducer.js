import { combineReducers } from 'redux'
import {List, Map, fromJS} from 'immutable';

import initializeGame from './actions/initializeGame';
import drawTile from './actions/drawTile';
import placeTile from './actions/placeTile';
import endTurn from './actions/endTurn';

const INITIAL_STATE = Map();

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INITIALIZE_GAME':
    return initializeGame(state, action.tileset, action.players, action.board);
  case 'DRAW_TILE':
    return drawTile(state, action.player);
  case 'PLACE_TILE':
    return placeTile(state, action.tile, action.position);
  case 'END_TURN':
    return endTurn(state, action.player);
  }
  return state;
}