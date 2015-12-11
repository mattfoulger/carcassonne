import makeStore from './src/store';
import {startServer} from './src/server';
import {tileset, startingTile} from './tileset';
import grid from './grid';

export const store = makeStore();
startServer(store);

var players = { 1: {name: "Matt",
                    hand: []}, 
                2: {name: "Chris",
                    hand: []}, 
                3: {name: "Dave",
                    hand: []}, 
              };
var board = grid();
var tiles = tileset({base: true});


store.dispatch({
  type: 'INITIALIZE_GAME',
  tileset: tiles,
  players: players,
  board: board
});
