import { createSelector } from 'reselect'

function getTiles(tiles, array) {
  return array.map(id => tiles[id])
}

const tilesSelector = state => state.tiles;
const deckSelector = state => state.deck;

export const deckTilesSelector = createSelector(
  state => state.tiles,
  state => state.deck,
  (tiles, deck) => {
    debugger;
    if (tiles && deck) {
      return {
        deck: getTiles(tiles, deck)
      }
    } else {
      return {};
    }
  }
);