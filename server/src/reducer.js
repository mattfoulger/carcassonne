import { combineReducers } from 'redux'
import {INITIAL_STATE, initializeGame, drawTile, placeTile, selectTile, endTurn} from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INITIALIZE_GAME':
    return initializeGame(state, action.tileset, action.players, action.board);
  case 'DRAW_TILE':
    return drawTile(state, action.tile, action.player);
  case 'PLACE_TILE':
    return placeTile(state, action.tile, action.position);
  case 'SELECT_TILE':
    return selectTile(state, action.tile)
  case 'END_TURN':
    return endTurn(state, action.player);
  }
  return state;
}


// const playTile = combineReducers({

// })