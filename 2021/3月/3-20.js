// var equationsPossible = function (equations) {
//   const status = new Array(26);
//   const notEqual = [];
//   for (let i = 0; i < 26; i++) {
//     status[i] = i;
//   }
//   const findV = (v) => {
//     while (status[v] !== v) {
//       v = status[v];
//     }
//     return v;
//   };
//   for (const item of equations) {
//     const start = item[0].charCodeAt() - 97;
//     let end = item[3].charCodeAt() - 97;
//     if (item[1] === "!") {
//       notEqual.push([start, end]);
//       continue;
//     }
//     const va = findV(start);
//     const vb = findV(end);
//     status[vb] = status[va];
//   }

//   for (const [start, end] of notEqual) {
//     if (findV(start) === findV(end)) return false;
//   }
//   return true;
// };
// const s = ["f==a", "a==b", "f!=e", "a==c", "b==e", "c==f"];
// console.log(equationsPossible(s));
// var brokenCalc = function (X, Y) {
//   if (X >= Y) return X - Y;
//   return 1 + brokenCalc(X, Y % 2 ? Y - 1 : Y / 2);
// };
// var smallestFromLeaf = function (root) {
//   let res;
//   function dfs(node, str = "") {
//     if (!node) return;
//     str = String.fromCharCode(node.val + 97) + str;
//     dfs(node.left, str);
//     dfs(node.right, str);
//     if (!node.left && !node.right) {
//       if (!res || str < res) {
//         res = str;
//       }
//     }
//   }
//   dfs(root);
//   return res;
// };
const d = [];
for (let i = 0; i < 10; i++) {
  d[i] = function () {
    console.log(i++);
  };
}
d[2]();
d[2]();
d[3]();
