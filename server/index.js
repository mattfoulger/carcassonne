import makeStore from './src/store';
import {startServer} from './src/server';
import {tileset, startingTile} from './tileset';
import grid from './grid';

export const store = makeStore();
startServer(store);


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var shuffledTileset = shuffle(tileset({base: true}));
var startTile = startingTile();
var players = shuffle(["Matt", "Chris", "Dave"]);
var board = grid();


store.dispatch({
  type: 'INITIALIZE_GAME',
  tileset: shuffledTileset,
  players: players,
  board: board,
  startingTile: startTile
});
