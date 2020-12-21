// var updateBoard = function (board, click) {
//   const h = board.length;
//   if (!h) return board;
//   const w = board[0].length;
//   const [m, n] = click;
//   if (board[m][n] === "M") {
//     board[m][n] = "X";
//     return board;
//   }
//   const check = (i, j) => {
//     if (i < 0 || i >= h) return 0;
//     if (j < 0 || j >= w) return 0;
//     if (board[i][j] === "M") return 1;
//     return 0;
//   };
//   const search = (i, j) => {
//     if (i < 0 || i >= h) return;
//     if (j < 0 || j >= w) return;
//     if (board[i][j] === "M") return;
//     if (board[i][j] === "E") {
//       const c =
//         check(i + 1, j) +
//         check(i + 1, j - 1) +
//         check(i + 1, j + 1) +
//         check(i - 1, j) +
//         check(i - 1, j - 1) +
//         check(i - 1, j + 1) +
//         check(i, j + 1) +
//         check(i, j - 1);
//       board[i][j] = c === 0 ? "B" : `${c}`;
//       if (!c) {
//         search(i + 1, j);
//         search(i + 1, j - 1);
//         search(i + 1, j + 1);
//         search(i - 1, j);
//         search(i - 1, j - 1);
//         search(i - 1, j + 1);
//         search(i, j + 1);
//         search(i, j - 1);
//       }
//     }
//   };
//   search(m, n);
//   return board;
// };
// const board = [
//   ["E", "E", "E", "E", "E"],
//   ["E", "E", "M", "E", "E"],
//   ["E", "E", "E", "E", "E"],
//   ["E", "E", "E", "E", "E"],
// ];
// const click = [3, 0];
// console.log(updateBoard(board, click));
var encode = function (longUrl) {
  const res = "";
  const l = longUrl.length;
  for (let i = 0; i < l; i++) {
    const t = longUrl[i].charCodeAt();
    res = `${String.fromCharCode(t + 2)}${res}`;
  }
  return res;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const l = shortUrl.length;
  const res = "";
  for (let i = 0; i < l; i++) {
    const t = longUrl[i].charCodeAt();
    res = `${String.fromCharCode(t - 2)}${res}`;
  }
  return res;
};
