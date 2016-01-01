import {fromJS, List, Map} from 'immutable';
import {shuffle, grid} from '../helpers';
import commitTile from './commitTile';
import startTurn from './startTurn';

export default function (state, tileset, players) {
  const tiles = fromJS(tileset).setIn(['1', 'committed'], true);
  const deck = List(shuffle(tiles.remove('1').keySeq().toArray()));
  const playerState = fromJS(players);
  const currentPlayer = 1;
  const board = fromJS(grid());
  const gameState = state.set('tiles', tiles)
    .set('deck', deck)
    .set('players', playerState)
    .set('board', board)
    .set('currentPlayer', currentPlayer);
  return startTurn(commitTile(gameState, '1', {x: 8, y: 8}, 1, true));
};