export default function (state) {
  var tile = state.get('tiles').find(tile => {
    return tile.get('selected');
  })

  const newBoard = state.get('board').map(cell => {
    var moves = getLegalMoves(cell, tile);
    if (moves) {
      return cell.set('legal', moves);
    } else {
      return cell.set('legal', false);
    }
  });

  return state.set('board', newBoard);

  function transformEdges(tileEdges, rotation) {
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

  function checkEdges(cellEdges, tileEdges) {
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

  function getLegalMoves(cell, tile) {
    if (tile && cell.get('contents') == "empty") {
      const cellEdges = cell.get('edges');
      const tileEdges = tile.get('edges');
      var legalMoves = [];
      if (
        (cellEdges.get('left') == "empty") &&
        (cellEdges.get('right') == "empty") &&
        (cellEdges.get('top') == "empty")  &&
        (cellEdges.get('bottom') == "empty")
      ) {
          return false
      } 

      for (var i=1; i<=4; i++) {
        if (checkEdges(cellEdges, transformEdges(tileEdges, i))) {
          legalMoves.push(i)
        }
      }

      if (legalMoves.length > 0) {
        return legalMoves;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
}