export function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

export function grid(r = 18, c = 18) {
  var board, rows = r, columns = c;

  board = [];
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      board.push({
        position: {x: i, y: j},
        contents: "empty",
        edges: {
          top: "empty",
          right: "empty",
          bottom: "empty",
          left: "empty"
        }
      })
    }
  }
  return board;
}