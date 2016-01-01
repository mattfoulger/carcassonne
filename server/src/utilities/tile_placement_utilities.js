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