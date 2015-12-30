export default function drawTile(state, playerID) {
  const deck = state.get('deck');
  const topTile = deck.last();
  const hand = state.getIn(['players', playerID.toString(), 'hand']);
  
  if (topTile && hand.size < 3) {
    return state.set('deck', deck.pop())
                .setIn(['players', playerID.toString(), 'hand'], hand.unshift(topTile));
  } else {
    return state;
  }
};