import {List, Map} from 'immutable';

export function deckSelector (state) {
  const deck = state.get('deck');
  const tiles = state.get('tiles');
  if (deck) {
    return deck.map(function (tile) {
      return tiles.get(tile).set('id', tile);
    });
  }
}

export function boardSelector (state) {
  const board = state.get('board');
  const tiles = state.get('tiles');
  if (board) {
    return board.flatten(true).map(function (cell) {
      // return column.map(function (cell) {
        const id = cell.get('contents');
        if (id === "empty") {
          return cell
        } else {
          const tile = tiles.get(id).set('id', id);
          return cell.set('contents', tile)
        }
      // })
    });
  }
}

export function playersSelector (state) {
  const players = state.get('players');
  const tiles = state.get('tiles');
  if (players) {
    return Map(players.map(function (player) {
      const hand = player.get('hand');
      const newHand = List(hand.map(function (tile) {
        return tiles.get(tile).set('id', tile);
      }));
      return player.set('hand', newHand);
    }));
  }
}

export function selectedTileSelector (state) {
  const tiles = state.get('tiles');
  if (tiles) {
    const selectedTile = tiles.find(tile => {
      return tile.get('selected')
    })
    return selectedTile
  }
}
