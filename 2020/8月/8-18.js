// var toLowerCase = function (str) {
//   let res = "";
//   for (const s of str) {
//     const code = s.chartCodeAt();
//     if (code > 96) {
//       res += s;
//     } else {
//       res += String.fromCharCode(code - 32);
//     }
//   }
//   return res;
// };
// var isOneBitCharacter = function (bits) {
//   const l = bits.length;
//   if (l == 1) return true;
//   if (l == 2) return bits[0] == 0;
//   while (bits.length > 1) {
//     if (bits[0] == 0) {
//       bits.shift();
//     } else {
//       bits.splice(0, 2);
//     }
//   }
//   return bits[0] == 0;
// };
// var a = [1, 1, 1, 0];
// console.log(isOneBitCharacter(a));

var solve = function (board) {
  const h = board.length;
  const w = board[0].length;
  const set = new Set();
  let res = [];
  const fail = [];
  for (let i = 1; i < h - 1; i++) {
    for (let j = 1; j < w - 1; j++) {
      if (board[i][j] == "O") {
        const curSet = new Set();
        const flag = { flag: true };
        deepSearch(i, j, curSet, flag);
        if (flag.flag) {
          res.push(curSet);
        } else {
          const index = [];
          res.forEach((item, i) => {
            for (const point of curSet) {
              if (item.has(point)) {
                index.push(item);
                break;
              }
            }
          });
          res = res.filter((item, i) => !index.includes(i));
        }
      } else {
        set.add(`${i}-${j}`);
      }
    }
  }
  res.forEach((item) => {
    const points = [...item];
    points.forEach((i) => {
      const { 0: x, 1: y } = i.split("-");
      board[x][y] = "X";
    });
  });
  function deepSearch(i, j, curSet, flag) {
    if (i < 0 || i >= h) return;
    if (i < 0 || j >= w) return;

    if (board[i][j] == "X") return;
    if (i == 0 || i == h - 1) flag.flag = false;
    if (j == 0 || j == w - 1) flag.flag = false;
    curSet.add(`${i}-${j}`);
    if (set.has(`${i}-${j}`)) return;
    set.add(`${i}-${j}`);
    deepSearch(i - 1, j, curSet, flag);
    deepSearch(i + 1, j, curSet, flag);
    deepSearch(i, j - 1, curSet, flag);
    deepSearch(i, j + 1, curSet, flag);
  }
};
var a = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
