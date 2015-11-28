import { combineReducers } from 'redux'
import {INITIAL_STATE, initializeGame, drawTile, placeTile, endTurn} from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INITIALIZE_GAME':
    return initializeGame(state, action.tileset, action.players, action.board, action.startingTile);
  case 'DRAW_TILE':
    return drawTile(state, action.player);
  case 'PLACE_TILE':
    return state.update('board', boardState => placeTile(boardState, action.position, state.get('topTile')))
  case 'END_TURN':
    return endTurn(state, action.player);
  }
  return state;
}


// const playTile = combineReducers({

// })