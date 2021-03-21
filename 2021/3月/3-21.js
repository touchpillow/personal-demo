// var orangesRotting = function (grid) {
//   const h = grid.length;
//   const w = grid[0].length;
//   let c = 0;
//   let node = [];
//   const inRange = (i, j) => {
//     return i >= 0 && i < h && j >= 0 && j < w;
//   };
//   let n = 0;
//   const xv = [1, -1, 0, 0];
//   const yv = [0, 0, 1, -1];
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (grid[i][j] === 2) {
//         node.push([i, j]);
//       } else if (grid[i][j] === 1) {
//         n++;
//       }
//     }
//   }
//   while (node.length) {
//     const temp = node.reduce((sum, item) => {
//       for (let x = 0; x < 4; x++) {
//         if (
//           inRange(item[0] + xv[x], item[1] + yv[x]) &&
//           grid[item[0] + xv[x]][item[1] + yv[x]] === 1
//         ) {
//           sum.push([item[0] + xv[x], item[1] + yv[x]]);
//           grid[item[0] + xv[x]][item[1] + yv[x]] = 2;
//           n--;
//         }
//       }
//       return sum;
//     }, []);
//     node = temp;
//     if (!node.length) break;
//     c++;
//   }
//   return n ? -1 : c;
// };
// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];
// console.log(orangesRotting(grid));
// var insertIntoMaxTree = function (root, val) {
//   if (!root) return new TreeNode(val);
//   if (root.val < val) {
//     const node = new TreeNode(val);
//     node.left = root;
//     return node;
//   }
//   root.right = insertIntoMaxTree(root.right, val);
//   return root;
// };
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
var letterCombinations = function (digits, res = []) {
  const l = digits.length;
  if (!l) return res;
  const s = map[digits[0]].split("");
  return s.reduce((sum, item) => {
    return sum.concat(
      letterCombinations(
        digits.slice(1),
        (res.length ? [""] : res).map((v) => `${v}${item}`)
      )
    );
  }, []);
};
console.log(letterCombinations("2"));
