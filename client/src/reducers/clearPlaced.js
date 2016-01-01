export default function (state) {
  const placedTileWithKey = state.get('tiles').findEntry(tile => {
    return tile.get('placed');
  })

  if (placedTileWithKey) {
    const boardState = state.get('board').map(column => {
      return column.map(cell => {
        if (cell.get('contents') == placedTileWithKey[0]) {
          return cell.set('contents', 'empty');
        } else {
          return cell;
        }
      });
    });
    return state.set('board', boardState)
                .setIn(['tiles', placedTileWithKey[0], 'placed'], false);
  } else {
    return state;
  }
}