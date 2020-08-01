// var reverseWords = function (s) {
//   const l = s.length;
//   if (!l) return s;
//   let res = "";
//   let start = 0,
//     end = 0;
//   while (end < l) {
//     while (
//     !(s[start - 1] === " " && s[start] !== " ") &&
//       s[start - 1] !== undefined &&
//       start <= l
//     ) {
//       start++;
//       res += " ";
//     }
//     end = start;
//     while (!(s[end - 1] !== " " && (s[end] === " " || !s[end])) && end <= l) {
//       end++;
//     }
//     const word = s.slice(start, end);
//     let temp = "";
//     for (const i of word) {
//       temp = `${i}${temp}`;
//     }
//     res += temp;
//     start = end;
//   }
//   return res;
// };
// console.log(reverseWords("1233 567    890  "));
// var maxDepth = function (root) {
//   if (!root) return 0;
//   if (!root.children.length) return 1;
//   return Math.max(...root.children.map(maxDepth)) + 1;
// };
var exist = function (board, word) {
  const h = board.length;
  if (!h) return false;
  const set = new Set();
  const w = board[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const res = existAA(board, word, i, j, set);
      if (res) return true;
      set.clear();
    }
  }
  return false;
};
var existAA = function (board, word, i, j, set) {
  if (!board[i] || !board[i][j]) return false;
  if (set.has(`${i}-${j}`)) return false;
  if (board[i][j] !== word[0]) return false;
  const s = word.slice(1);
  set.add(`${i}-${j}`);
  if (!s.length) {
    return true;
  }
  return (
    existAA(board, s, i - 1, j, new Set([...set])) ||
    existAA(board, s, i + 1, j, new Set([...set])) ||
    existAA(board, s, i, j - 1, new Set([...set])) ||
    existAA(board, s, i, j + 1, new Set([...set]))
  );
};
var a = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

var s = "ABCB";
console.log(exist(a, s));
