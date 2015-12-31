export default function (state) {
  var nextPlayer;
  const currentPlayer = state.get('currentPlayer');
  const players = state.get('players');
  if (currentPlayer + 1 <= players.size) {
    nextPlayer = currentPlayer + 1;
  } else {
    nextPlayer = 1;
  }
  return state.set('currentPlayer', nextPlayer)
};