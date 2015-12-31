export default function (state) {
  const currentPlayer = state.get('currentPlayer');
  const topTileID = state.get('deck').last();
  const topTile = state.getIn(['tiles', topTileID]).merge({owner: currentPlayer});
  return state.setIn(['tiles', topTileID], topTile);
}