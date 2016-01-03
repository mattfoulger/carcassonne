import {checkPlacement, transformEdges} from '../utilities/tile_placement_utilities'

export default function (state, tileID, cellID, rotation) {
  const cell = state.getIn(['board', cellID]);
  const tile = state.getIn(['tiles', tileID]);
  if (checkPlacement(cell, tile, rotation)) {
    return state.setIn(['board', cellID, 'contents'], tileID)
                   .mergeIn(['tiles', tileID], {placed: true, rotation: rotation})
                   .set('placedTilePosition', cellID)
  } else {
    return state;
  }
}