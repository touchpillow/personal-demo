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
// const shortestBridge = function (A) {
//   const stack = [];
//   const n = A.length;
//   const dfs = (i, j) => {
//     if (i < 0 || i >= n) return;
//     if (j < 0 || j >= n) return;
//     if (A[i][j] === 0) return;
//     stack.push([i, j]);
//     A[i][j] = 0;
//     dfs(i, j + 1);
//     dfs(i, j - 1);
//     dfs(i + 1, j);
//     dfs(i - 1, j);
//   };
//   let flag = false;
//   for (let i = 0; i < n; i++) {
//     if (flag) break;
//     for (let j = 0; j < n; j++) {
//       if (A[i][j] === 0) continue;
//       flag = true;
//       dfs(i, j);
//       break;
//     }
//   }
//   let step = 0;
//   while (stack.length) {
//     const temp = [];
//     const add = (i, j) => {
//       if (i < 0 || i >= n) return;
//       if (j < 0 || j >= n) return;
//       if (A[i][j] === 2) return;
//       if (A[i][j] === 1) return true;
//       A[i][j] = 2;
//       temp.push([i, j + 1]);
//       temp.push([i, j - 1]);
//       temp.push([i + 1, j]);
//       temp.push([i - 1, j]);
//     };
//     let flag = false;
//     for (const [i, j] of stack) {
//       if (flag) break;
//       if (add(i, j)) {
//         flag = true;
//       }
//     }
//     if (flag) break;
//     step++;
//     stack.splice(0, stack.length, ...temp);
//   }
//   return step - 1;
// };
// const A = [
//   [1, 0],
//   [0, 1],
// ];
// console.log(shortestBridge(A));

// const nums = [3, 1, 2];

// const arr = nums
//   .map((item, index) => [item, index])
//   .sort((a, b) => a[0] - b[0]);

// const indexMap = arr.reduce((map, item, index) => {
//   map.set(index, item[1]);
//   return map;
// }, new Map());

// console.log(indexMap);

// const getRes = (N) => {
//   if (N === 1) return 1;
//   if (N === 2) return 1;
//   return getRes(N - 1) + getRes(N - 2);
// };
// const getResByMap = (N) => {
//   const map = new Map([
//     [1, 1],
//     [2, 1],
//   ]);
//   const dfs = (N) => {
//     if (!map.has(N)) {
//       const sum = dfs(N - 1) + dfs(N - 2);
//       map.set(N, sum);
//       return sum;
//     }
//     return map.get(N);
//   };
//   return dfs(N);
// };

// console.log(getResByMap(5));
// console.log(getRes(4));
// const getResByLoop = (N) => {
//   // dp[i]表示第i个数字
//   const dp = new Array(N + 1);
//   dp[1] = 1;
//   dp[2] = 1;
//   let i = 3;
//   while (i <= N) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     i++;
//   }
//   return dp[N];
// };
// console.log(getResByLoop(N));
// const getResByLoop2 = (N) => {
//   let a1 = 1;
//   let a2 = 1;
//   let i = 3;
//   while (i <= N) {
//     // a2赋值a1， a1+a2赋值给a2，相当于上一个方法的列表右移
//     [a1, a2] = [a2, a1 + a2];
//     i++;
//   }
//   return a2;
// };
// console.log(getResByLoop2(N));

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log("promise1");
  });
});

setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function () {
    console.log("promise2");
  });
});
