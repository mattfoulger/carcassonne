import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = Map();

export function initializeGame(state, tileset, players, board) {
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

export function drawTile(state, playerID) {
  const deck = state.get('deck');
  const topTile = deck.last();
  const hand = state.getIn(['players', playerID.toString(), 'hand']);
  
  if (topTile && hand.size < 3) {
    return state.set('deck', deck.pop())
                .setIn(['players', playerID.toString(), 'hand'], hand.unshift(topTile));
  } else {
    return state;
  }
};

export function selectTile(state, tile) {
  

  // const owner = tile.owner;
  // const hand = state.getIn(['hands', owner]);
  // const tileIndex = hand.indexOf(fromJS(tile));
  // return state.setIn(['hands', owner, tileIndex, 'status'], 'selected');
}

export function placeTile(state, tileID, position) {
  const contents = state.getIn(['board', position.x, position.y, 'contents']);
  if (contents === "empty") {
    const deck = state.get('deck');
    if (deck.last() === tileID) {
      return state.setIn(['board', position.x, position.y, 'contents'], tileID)
                .setIn(['tiles', tileID, 'status'], 'placed')
                .set('deck', deck.pop());
    } else {
      const current = state.get('currentPlayer').toString();
      const hand = state.getIn(['players', current, 'hand']);
      const foundTile = hand.find(tile => {
        return tile === tileID;
      });
      if (foundTile) {
        const newHand = hand.filter(tile => {
          return tile != tileID;
        });
        return state.setIn(['board', position.x, position.y, 'contents'], tileID)
                .setIn(['tiles', tileID, 'placed'], 'true')
                .setIn(['players', current, 'hand'], newHand);
      } else {
        return state;
      }
    }
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
  var nextPlayer;
  const currentPlayer = state.get('currentPlayer');
  const players = state.get('players');
  if (player == currentPlayer) {
    if (currentPlayer + 1 <= players.size) {
      nextPlayer = currentPlayer + 1;
    } else {
      nextPlayer = 1;
    }
  }
  return state.set('currentPlayer', nextPlayer)
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


