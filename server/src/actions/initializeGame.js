import {fromJS, List, Map} from 'immutable';
import {shuffle} from '../helpers';

export default function (state, tileset, players, board) {
  const tiles = fromJS(tileset).setIn(['1', 'played'], true);
  const deck = List(shuffle(tiles.remove(1).keySeq().toArray()));
  const playerState = fromJS(players);
  const currentPlayer = 1;
  const grid = fromJS(board);
  return state.set('tiles', tiles)
              .set('deck', deck)
              .set('players', playerState)
              .set('board', grid.setIn(["0", "0", "contents"], '1'))
              .set('currentPlayer', currentPlayer);
};