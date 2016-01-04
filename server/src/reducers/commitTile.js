import {checkPlacement, transformTile, getNeighbors, getCellIdByPosition} from '../utilities/tile_placement_utilities'

export default function (state, tileID, cellID, rotation, isStartTile) {
  const cell = state.getIn(['board', cellID]);
  const tile = state.getIn(['tiles', tileID]);
  const newTile = transformTile(tile, rotation);

  if (checkPlacement(cell, newTile, isStartTile)) {
    const neighbors = getNeighbors(state, cellID);
    const newBoard = setBoard(state.get('board'), newTile, neighbors)
                      .setIn([cellID, 'contents'], tileID);

    const deck = state.get('deck');
    // pop the tile from deck or hand, unless starting tile
    if (isStartTile) {
      return state.set('board', newBoard)
                .setIn(['tiles', tileID, 'committed'], true)
    } else if (deck.last() === tileID) {
      return state.set('board', newBoard)
                .mergeIn(['tiles', tileID], {committed: true, placed: false, rotation: rotation})
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
        return state.set('board', newBoard)
                .mergeIn(['tiles', tileID], {committed: true, placed: false, rotation: rotation})
                .setIn(['players', current, 'hand'], newHand);
      } else {
        return state;
      }
    }
  } else {
    return state;
  }
}

function setBoard(board, tile, neighbors) {
  return setEdges(board, tile, neighbors)
}


function setEdges(board, tile, neighbors) {

  const edges = tile.get('edges');
  const left = edges.get('left');
  const right = edges.get('right');
  const top = edges.get('top');
  const bottom = edges.get('bottom');
  const n = neighbors;
  
  function setSelf(board) {
    return board.setIn([n.self, 'edges'], edges)
  }

  function setLeft(board) {
    if (n.left) {
      console.log(board.get(n.left))
      return board.setIn([n.left, 'edges', 'right'], left);
    } else {
      return board;
    }
  }

  function setRight(board) {
    if (n.right) {
      return board.setIn([n.right, 'edges', 'left'], right);
    } else {
      return board;
    }
  }

  function setAbove(board) {
    if (n.above) {
      return board.setIn([n.above, 'edges', 'bottom'], top);
    } else {
      return board;
    }
  }

  function setBelow(board) {
    if (n.below) {
      return board.setIn([n.below, 'edges', 'top'], bottom);
    } else {
      return board;
    }
  }

  return setSelf(setLeft(setRight(setAbove(setBelow(board)))))
}

// function setFields (state, tile, cellID, rotation) {
//   const edges = transformEdges(tile.get('edges'), rotation); 


