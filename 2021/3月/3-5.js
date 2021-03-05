// var beautifulArray = function (N) {
//   let map = new Map();
//   const deep = (n) => {
//     if (map.has(n)) {
//       return map.get(n);
//     }
//     let res = new Array(n);
//     if (n == 1) {
//       res[0] = 1;
//     } else {
//       let t = 0;
//       const left = deep(Math.ceil(n / 2));
//       left.forEach((item) => {
//         res[t] = 2 * item - 1;
//         t++;
//       });
//       const right = deep(Math.floor(n / 2));
//       right.forEach((item) => {
//         res[t] = 2 * item;
//         t++;
//       });
//     }
//     map.set(n, res);
//     return res;
//   };
//   return deep(N);
// };
var shortestBridge = function (A) {
  const stack = [];
  const n = A.length;
  const dfs = (i, j) => {
    if (i < 0 || i >= n) return;
    if (j < 0 || j >= n) return;
    if (A[i][j] === 0) return;
    stack.push([i, j]);
    A[i][j] = 0;
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  };
  let flag = false;
  for (let i = 0; i < n; i++) {
    if (flag) break;
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 0) continue;
      flag = true;
      dfs(i, j);
      break;
    }
  }
  let step = 0;
  while (stack.length) {
    const temp = [];
    const add = (i, j) => {
      if (i < 0 || i >= n) return;
      if (j < 0 || j >= n) return;
      if (A[i][j] === 2) return;
      if (A[i][j] === 1) return true;
      A[i][j] = 2;
      temp.push([i, j + 1]);
      temp.push([i, j - 1]);
      temp.push([i + 1, j]);
      temp.push([i - 1, j]);
    };
    let flag = false;
    for (const [i, j] of stack) {
      if (flag) break;
      if (add(i, j)) {
        flag = true;
      }
    }
    if (flag) break;
    step++;
    stack.splice(0, stack.length, ...temp);
  }

  return step - 1;
};
const A = [
  [1, 0],
  [0, 1],
];
console.log(shortestBridge(A));
