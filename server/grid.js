export default function (r = 18, c = 18) {
  var board, rows = r, columns = c;

  board = [];
  for (var i = 0; i < columns; i++) {
    board.push([]);
    for (var j = 0; j < rows; j++) {
      board[i].push({
        position: {x: i, y: j},
        contents: "empty",
        edgeTop: "empty",
        edgeRight: "empty",
        edgeBottom: "empty",
        edgeLeft: "empty",
      })
    }
  }

  return board;
}