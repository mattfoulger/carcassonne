import {List} from 'immutable';

export function deckSelector (state) {
  const deck = state.get('deck');
  const tiles = state.get('tiles');
  if (deck) {
    return List(deck.map(function (tile) {
      return tiles.get(tile).set('id', tile);
    }));
  }

}

export function boardSelector (state) {
  const board = state.get('board');
  const tiles = state.get('tiles');
  if (board) {
    return List(board.map(function (column) {
      return column.map(function (cell) {
        const id = cell.get('contents');
        if (id === "empty") {
          return cell
        } else {
          const tile = tiles.get(id).set('id', id);
          return cell.set('contents', tile)
        }
      })
    }));
  }

}
