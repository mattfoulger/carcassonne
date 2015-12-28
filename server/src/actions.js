import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = Map();

export function initializeGame(state, tileset, players, board) {
  const tiles = fromJS(tileset);
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

export function drawTile(state, playerID) {
  const topTile = state.get('deck').last();
  const hand = state.getIn(['players', playerID, 'hand']);
  if (topTile && hand.size < 3) {
    return state.set('deck', deck.pop())
                .setIn(['players', playerID, 'hand'], hand.unshift(topTile));
  } else {
    return state;
  }
};

export function selectTile(state, tile) {
  const owner = tile.owner;
  const hand = state.getIn(['hands', owner]);
  const tileIndex = hand.indexOf(fromJS(tile));
  return state.setIn(['hands', owner, tileIndex, 'status'], 'selected');
}

export function placeTile(state, tileID, position) {
  const contents = state.getIn(['board', position.x, position.y, 'contents']);
  if (contents === "empty") {
    return state.setIn(['board', position.x, position.y, 'contents'], tileID)
                .setIn(['tiles', tileID, 'status'], 'placed');
  } else {
    return state;
  }
}

export function commitTile(boardState, position, tile) {
  const contents = boardState.getIn([position.x, position.y, 'contents']);
  if (contents != "empty") {
    return boardState.setIn([position.x, position.y, 'contents'], tile)
                     .setIn([position.x, position.y, 'edges'], tile.get('edges'));
  } else {
    return boardState;
  }
}

export function endTurn(state, player) {
  var nextPlayer, index;
  const currentPlayer = state.get('currentPlayer');
  const players = state.get('players');
  if (player == currentPlayer) {
    index = players.indexOf(player);
    if (index + 1 < players.size) {
      nextPlayer = players.get(index + 1);
    } else {
      nextPlayer = players.get(0);
    }
  }

  return state.set('currentPlayer', nextPlayer)
              .setIn(["topTile", "owner"], nextPlayer);
};


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


