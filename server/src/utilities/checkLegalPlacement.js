export default function(cell, tile, rotation, isStartTile) {
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
    if (
      ((cellEdges.get('left') == tileEdges.get('left')) || (cellEdges.get('left') == "empty")) &&
      ((cellEdges.get('right') == tileEdges.get('right')) || (cellEdges.get('right') == "empty")) &&
      ((cellEdges.get('top') == tileEdges.get('top')) || (cellEdges.get('top') == "empty")) &&
      ((cellEdges.get('bottom') == tileEdges.get('bottom')) || (cellEdges.get('bottom') == "empty"))
    ) {
      return true
    } else {
      return false
    }
  } else {
    return false
  } 
}