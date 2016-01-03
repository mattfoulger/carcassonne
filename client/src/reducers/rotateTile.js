import {checkPlacement} from '../utilities/tile_placement_utilities'

export default function (state, tileID, cellID) {
  const cell = state.getIn(['board', cellID]);
  if (!cell) {
    return state;
  }
  const legal = cell.get('legal');
  const tile = state.getIn(['tiles', tileID]);

  if (tile && legal && legal.length > 1) {
    var rotation = tile.get('rotation');
    var rotateIndex = legal.indexOf(rotation);
    var nextRotation = legal[rotateIndex + 1] || legal[0];

    return state.mergeIn(['tiles', tileID], {placed: true, rotation: nextRotation})
  } else {
    return state;
  }
}