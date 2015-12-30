export default function (state, tileID, position) {
  const contents = state.getIn(['board', position.x, position.y, 'contents']);

  if (contents === "empty") {
    const deck = state.get('deck');
    const edgeState = setEdges(state, tileID, position);

    if (deck.last() === tileID) {
      return edgeState.setIn(['board', position.x, position.y, 'contents'], tileID)
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
        return edgeState.setIn(['board', position.x, position.y, 'contents'], tileID)
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

function setEdges(state, tileID, position) {
  const edges = state.getIn(['tiles', tileID, 'edges']);
  const left = edges.get('left');
  const right = edges.get('right');
  const top = edges.get('top');
  const bottom = edges.get('bottom');
  const n = getNeighbors(position);

  function setSelf(state) {
    return state.setIn(['board', position.x, position.y, 'edges'], edges)
  }

  function setLeft(state) {
    if (n.left) {
      return state.setIn(['board', n.left.x, n.left.y, 'edges', 'right'], left);
    } else {
      return state;
    }
  }

  function setRight(state) {
    if (n.right) {
      return state.setIn(['board', n.right.x, n.right.y, 'edges', 'left'], right);
    } else {
      return state;
    }
  }

  function setAbove(state) {
    if (n.above) {
      return state.setIn(['board', n.above.x, n.above.y, 'edges', 'bottom'], top);
    } else {
      return state;
    }
  }

  function setBelow(state) {
    if (n.below) {
      return state.setIn(['board', n.below.x, n.below.y, 'edges', 'top'], bottom);
    } else {
      return state;
    }
  }

  return setSelf(setLeft(setRight(setAbove(setBelow(state)))))
}

function getNeighbors(position) {
  var neighbors = {};
  var left = position.x - 1;
  var right = position.x + 1;
  var above = position.y + 1;
  var below = position.y - 1;

  if (left >= 0) {
    neighbors.left = {
      x: left,
      y: position.y
    };
  }
  if (right <= 18) {
    neighbors.right = {
      x: right,
      y: position.y
    };
  }
  if (above <= 18) {
    neighbors.above = {
      x: position.x,
      y: above
    };
  }
  if (below >= 0) {
    neighbors.below = {
      x: position.x,
      y: below
    };
  }
  return neighbors;
}
