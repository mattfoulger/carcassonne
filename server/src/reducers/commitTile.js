import {checkPlacement, transformEdges, getNeighbors, getCellIdByPosition} from '../utilities/tile_placement_utilities'

export default function (state, tileID, cellID, rotation, isStartTile) {
  const cell = state.getIn(['board', cellID]);
  const tile = state.getIn(['tiles', tileID]);

  if (checkPlacement(cell, tile, rotation, isStartTile)) {
    const deck = state.get('deck');
    const edgeState = setEdges(state, tile, cellID, rotation);

    // pop the tile from deck or hand, unless starting tile
    if (isStartTile) {
      return edgeState.setIn(['board', cellID, 'contents'], tileID)
                .setIn(['tiles', tileID, 'committed'], true)
    } else if (deck.last() === tileID) {
      return edgeState.setIn(['board', cellID, 'contents'], tileID)
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
        return edgeState.setIn(['board', cellID, 'contents'], tileID)
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

function setEdges(state, tile, cellID, rotation) {
  const edges = transformEdges(tile.get('edges'), rotation);
  const left = edges.get('left');
  const right = edges.get('right');
  const top = edges.get('top');
  const bottom = edges.get('bottom');
  const n = getNeighbors(state, cellID);
  
  function setSelf(state) {
    return state.setIn(['board', cellID, 'edges'], edges)
  }

  function setLeft(state) {
    if (n.left) {
      return state.setIn(['board', n.left, 'edges', 'right'], left);
    } else {
      return state;
    }
  }

  function setRight(state) {
    if (n.right) {
      return state.setIn(['board', n.right, 'edges', 'left'], right);
    } else {
      return state;
    }
  }

  function setAbove(state) {
    if (n.above) {
      return state.setIn(['board', n.above, 'edges', 'bottom'], top);
    } else {
      return state;
    }
  }

  function setBelow(state) {
    if (n.below) {
      return state.setIn(['board', n.below, 'edges', 'top'], bottom);
    } else {
      return state;
    }
  }

  return setSelf(setLeft(setRight(setAbove(setBelow(state)))))
}


