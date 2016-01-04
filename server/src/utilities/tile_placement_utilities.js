export function getCellIdByPosition (boardState, position) {
  return boardState.findEntry(cell => {
    var cellPos = cell.get('position').toJS();
    return (cellPos.x == position.x && cellPos.y == position.y)
  })[0]
}

export function getNeighbors(state, cellID) {
  const board = state.get('board');
  const position = board.getIn([cellID, 'position']).toJS();
  var neighbors = {
    self: cellID
  };
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

export function checkPlacement (cell, tile, isStartTile) {
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
    
    if (checkEdges(cellEdges, tileEdges)) {
      return true;
    } else {
      return false;
    }

  } else {
    return false
  } 
}

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

export function transformTile (tile, rotation) {
  const tileEdges = transformEdges(tile.get('edges'), rotation);
  const tileFields = transformFields(tile.get('fields'), rotation);
  const tileCities = transformCities(tile.get('cities'), rotation);
  const tileRoads = transformRoads(tile.get('roads'), rotation);

  return tile.merge({edges: tileEdges, fields: tileFields, cities: tileCities, roads: tileRoads})

}

// can use the transformEdges function for cities and roads since they have same structure
function transformCities(tileCities, rotation) {
  return transformEdges(tileCities, rotation);
}

function transformRoads(tileRoads, rotation) {
  return transformEdges(tileRoads, rotation);
}

function transformEdges(tileEdges, rotation) {
  switch(rotation) {
    case 2:
      return tileEdges.merge({
        top: tileEdges.get('left'), 
        right: tileEdges.get('top'), 
        bottom: tileEdges.get('right'), 
        left: tileEdges.get('bottom')})
      break;
    case 3:
      return tileEdges.merge({
        top: tileEdges.get('bottom'), 
        right: tileEdges.get('left'), 
        bottom: tileEdges.get('top'), 
        left: tileEdges.get('right')})
      break;
    case 4:
      return tileEdges.merge({
        top: tileEdges.get('right'), 
        right: tileEdges.get('bottom'), 
        bottom: tileEdges.get('left'), 
        left: tileEdges.get('top')})
      break;
    default:
      return tileEdges
  } 
};

function transformFields(tileFields, rotation) {
  switch(rotation) {
    case 2:
      return tileFields.merge({
        top_left: tileFields.get('left_bottom'),
        top_right: tileFields.get('left_top'),
        right_top: tileFields.get('top_left'),
        right_bottom: tileFields.get('top_right'),
        bottom_right: tileFields.get('right_top'),
        bottom_left: tileFields.get('right_bottom'),
        left_bottom: tileFields.get('bottom_right'),
        left_top: tileFields.get('bottom_left')
      })
      break;
    case 3:
      return tileFields.merge({
        top_left: tileFields.get('bottom_right'),
        top_right: tileFields.get('bottom_left'),
        right_top: tileFields.get('left_bottom'),
        right_bottom: tileFields.get('left_top'),
        bottom_right: tileFields.get('top_left'),
        bottom_left: tileFields.get('top_right'),
        left_bottom: tileFields.get('right_top'),
        left_top: tileFields.get('right_bottom')
      })
      break;
    case 4:
      return tileFields.merge({
        top_left: tileFields.get('left_bottom'),
        top_right: tileFields.get('left_top'),
        right_top: tileFields.get('top_left'),
        right_bottom: tileFields.get('top_right'),
        bottom_right: tileFields.get('right_top'),
        bottom_left: tileFields.get('right_bottom'),
        left_bottom: tileFields.get('bottom_right'),
        left_top: tileFields.get('bottom_left')
      })
      break;
    default:
      return tileFields
  } 
};
