export function getCellIdByPosition (boardState, position) {
  return boardState.findEntry(cell => {
    var cellPos = cell.get('position').toJS();
    return (cellPos.x == position.x && cellPos.y == position.y)
  })[0]
}

export function getNeighbors(state, cellID) {
  const board = state.get('board');
  const cell = board.get(cellID);
  var position = cell.get('position').toJS();
  var neighbors = {};
  var left = position.x - 1;
  var right = position.x + 1;
  var above = position.y + 1;
  var below = position.y - 1;

  if (left >= 0) {
    neighbors.left = getCellIdByPosition(board, {x: left, y: position.y});
  }
  if (right <= 17) {
    neighbors.right = getCellIdByPosition(board, {x: right, y: position.y});
  }
  if (above <= 17) {
    neighbors.above = getCellIdByPosition(board, {x: position.x, y: above});
  }
  if (below >= 0) {
    neighbors.below = getCellIdByPosition(board, {x: position.x, y: below});
  }
  return neighbors;
}

export function checkPlacement (cell, tile, rotation, isStartTile) {
  if (isStartTile) {
    return true
  }
  if (tile && cell.get('contents') == "empty") {
    const cellEdges = cell.get('edges');
    const tileEdges = tile.get('edges');
    if (
      (cellEdges.get('left') == "empty") &&
      (cellEdges.get('right') == "empty") &&
      (cellEdges.get('top') == "empty")  &&
      (cellEdges.get('bottom') == "empty")
    ) {
        return false
    }
    
    if (checkEdges(cellEdges, transformEdges(tileEdges, rotation))) {
      return true;
    } else {
      return false;
    }

  } else {
    return false
  } 
}


export function transformEdges(tileEdges, rotation) {
  switch(rotation) {
    case 2:
      return tileEdges.merge({top: tileEdges.get('left'), right: tileEdges.get('top'), bottom: tileEdges.get('right'), left: tileEdges.get('bottom')})
      break;
    case 3:
      return tileEdges.merge({top: tileEdges.get('bottom'), right: tileEdges.get('left'), bottom: tileEdges.get('top'), left: tileEdges.get('right')})
      break;
    case 4:
      return tileEdges.merge({top: tileEdges.get('right'), right: tileEdges.get('bottom'), bottom: tileEdges.get('left'), left: tileEdges.get('top')})
      break;
    default:
      return tileEdges
  } 
};

export function checkEdges(cellEdges, tileEdges) {
  if (
    ((cellEdges.get('left') == tileEdges.get('left')) || (cellEdges.get('left') == "empty")) &&
    ((cellEdges.get('right') == tileEdges.get('right')) || (cellEdges.get('right') == "empty")) &&
    ((cellEdges.get('top') == tileEdges.get('top')) || (cellEdges.get('top') == "empty")) &&
    ((cellEdges.get('bottom') == tileEdges.get('bottom')) || (cellEdges.get('bottom') == "empty"))
  ) {
    return true;
  } else {
    return false;
  }
}