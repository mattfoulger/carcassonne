import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = Map();

export function initializeGame(state, tileset, players, board, startingTile) {
  
  const deck = fromJS(tileset);
  const playerList = List(players);
  const currentPlayer = playerList.last();
  const grid = fromJS(board);
  const hands = Map(players.map(function(player) {return [ player, List([]) ] } ))
  return state.set('deck', deck.pop())
              .set('initialDeck', deck)
              .set('topTile', deck.last())
              .set('players', playerList)
              .set('hands', hands)
              .set('board', grid.setIn(["0", "0", "contents"], startingTile))
              .set('currentPlayer', currentPlayer);
};

export function drawTile(state, player) {
  const deck = state.get('deck');
  const topTile = state.get('topTile');
  const hand = state.getIn(['hands', player]);
  if (topTile && hand.size < 3) {
    return state.set('deck', deck.pop())
                .set('topTile', deck.last())
                .setIn(['hands', player], hand.unshift(topTile));
  } else {
    return state;
  }
};

export function placeTile(boardState, position, tile) {
  const contents = boardState.getIn([position.x, position.y, 'contents']);
  if (contents === "empty") {
    return boardState.setIn([position.x, position.y, 'contents'], tile);
  }
}

export function commitTile(boardState, position, tile) {
  const contents = boardState.getIn([position.x, position.y, 'contents']);
  if (contents != "empty") {
    return boardState.setIn([position.x, position.y, 'contents'], tile)
                     .setIn([position.x, position.y, 'edges'], tile.edges);
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



