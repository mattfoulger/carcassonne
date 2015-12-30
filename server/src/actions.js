



export function commitTile(boardState, position, tile) {
  const contents = boardState.getIn([position.x, position.y, 'contents']);
  if (contents != "empty") {
    return boardState.setIn([position.x, position.y, 'contents'], tile)
                     .setIn([position.x, position.y, 'edges'], tile.get('edges'));
  } else {
    return boardState;
  }
}







