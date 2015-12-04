import {List, Map, fromJS} from 'immutable';
import tiles from './tiles';

const allTiles = fromJS(tiles());

export function tileset (options) {
  var deck = [];
  var key = 2;

  function addTile (tilename, amount) {
    for (var i = 0; i < amount; i++) {
      key += 1;
      const tile = allTiles.get(tilename);
      const tileWithId = tile.set('id', key);
      deck.push(tileWithId);
    }
  }

  if (options.base) {
    addTile("tile001", 1);
    addTile("tile002", 3);
    addTile("tile003", 1);
    addTile("tile004", 2);
    addTile("tile005", 1);
    addTile("tile006", 3);
    addTile("tile007", 2);
    addTile("tile008", 2);
    addTile("tile009", 3);
    addTile("tile010", 2);
    addTile("tile011", 3);
    addTile("tile012", 2);
    addTile("tile013", 1);
    addTile("tile014", 5);
    addTile("tile015", 3);
    addTile("tile016", 3);
    addTile("tile017", 3);
    addTile("tile018", 3);
    addTile("tile019", 4);
    addTile("tile020", 2);
    addTile("tile021", 9);
    addTile("tile022", 8);
    addTile("tile023", 4);
    addTile("tile024", 1);
  }

  return deck;

};

export function startingTile () {
  const startTile = allTiles.get("tile016");
  const startTileWithId = startTile.set('id', 1).set('status', 'committed');
  return startTileWithId;
}