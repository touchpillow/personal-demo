// var PeekingIterator = function (iterator) {
//   this.list = [];
//   while (iterator.hasNext()) {
//     this.list.push(iterator.next());
//   }
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.peek = function () {
//   return this.list[0];
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.next = function () {
//   return this.list.shift();
// };

// /**
//  * @return {boolean}
//  */
// PeekingIterator.prototype.hasNext = function () {
//   return this.list.length;
// };
var gameOfLife = function (board) {
  const h = board.length;
  const w = board[0].length;
  const x = [-1, 0, 1, -1, 1, -1, 0, 1];
  const y = [-1, -1, -1, 0, 0, 1, 1, 1];
  const getValue = (i, j) => {
    if (i < 0 || j < 0) return 0;
    if (i >= h || j >= w) return 0;
    if ([-1, 1].includes(board[i][j])) return 1;
    return 0;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let c = 0;
      for (let k = 0; k < 8; k++) {
        c += getValue(i + x[k], j + y[k]);
      }
      if (!board[i][j] && c === 3) {
        board[i][j] = 2;
      } else if (board[i][j] && (c < 2 || c > 3)) {
        board[i][j] = -1;
      }
      if (i === 2 && j === 1) {
        console.log(board[i][j], c);
      }
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0;
      } else if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
  return board;
};
const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
console.log(gameOfLife(board));
