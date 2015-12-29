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

// remote actions

export function drawTile(player) {
  return {
    meta: {remote: true},
    type: 'DRAW_TILE',
    player: player
  };
}

export function placeTile(tile, position) {
  return {
    meta: {remote: true},
    type: 'PLACE_TILE',
    tile: tile,
    position: position
  };
}

export function endTurn(player) {
  return {
    meta: {remote: true},
    type: 'END_TURN',
    player: player
  };
}