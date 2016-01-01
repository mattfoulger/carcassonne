export function setClientId(clientId) {
  return {
    type: 'SET_CLIENT_ID',
    clientId
  };
}

export function setConnectionState(state, connected) {
  return {
    type: 'SET_CONNECTION_STATE',
    state,
    connected
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function selectTile(tile) {
  return {
    type: 'SELECT_TILE',
    tile: tile
  };
}

export function placeTile(tile, position, rotation) {
  return {
    type: 'PLACE_TILE',
    tile: tile,
    position: position,
    rotation: rotation
  };
}

export function rotateTile(tile, position) {
  return {
    type: 'ROTATE_TILE',
    tile: tile,
    position: position,
  };
}

// remote actions

export function drawTile(player) {
  return {
    meta: {remote: true},
    type: 'DRAW_TILE',
    player: player
  };
}

export function commitTile(tile, position, rotation) {
  return {
    meta: {remote: true},
    type: 'COMMIT_TILE',
    tile: tile,
    position: position,
    rotation: rotation
  };
}

export function endTurn() {
  return {
    meta: {remote: true},
    type: 'END_TURN',
  };
}