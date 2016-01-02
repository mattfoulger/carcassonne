import {checkPlacement, transformEdges} from '../utilities/tile_placement_utilities'

export default function (state, tileID, position, rotation) {
  const pos = position.toJS();
  const cell = state.getIn(['board', pos.x, pos.y]);
  const tile = state.getIn(['tiles', tileID]);
  if (checkPlacement(cell, tile, rotation)) {
    return state.setIn(['board', pos.x, pos.y, 'contents'], tileID)
                   .mergeIn(['tiles', tileID], {placed: true, rotation: rotation})
                   .set('placedTilePosition', position)
  } else {
    return state;
  }
}