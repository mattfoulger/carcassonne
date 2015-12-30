export default function (state, tileID, position) {
  const contents = state.getIn(['board', position.x, position.y, 'contents']);
  if (contents === "empty") {
    const deck = state.get('deck');
    if (deck.last() === tileID) {
      return state.setIn(['board', position.x, position.y, 'contents'], tileID)
                .setIn(['tiles', tileID, 'status'], 'placed')
                .set('deck', deck.pop());
    } else {
      const current = state.get('currentPlayer').toString();
      const hand = state.getIn(['players', current, 'hand']);
      const foundTile = hand.find(tile => {
        return tile === tileID;
      });
      if (foundTile) {
        const newHand = hand.filter(tile => {
          return tile != tileID;
        });
        return state.setIn(['board', position.x, position.y, 'contents'], tileID)
                .setIn(['tiles', tileID, 'placed'], 'true')
                .setIn(['players', current, 'hand'], newHand);
      } else {
        return state;
      }
    }
  } else {
    return state;
  }
}