// // var minDeletionSize = function (strs) {};
// // const minDeletionSize2 = (A) => {
// //   const h = A.length;
// //   const w = A[0].length;
// //   let ans = 0;

// //   let cur = new Array(h).fill("");
// //   for (let j = 0; j < w; ++j) {
// //     const cur2 = [...cur];
// //     for (let i = 0; i < h; ++i) {
// //       cur2[i] += A[i][j];
// //     }

// //     if (isSorted(cur2)) {
// //       cur = cur2;
// //     } else {
// //       ans++;
// //     }
// //   }

// //   return ans;
// // };

// // const isSorted = (A) => {
// //   for (let i = 0; i < A.length - 1; i++) {
// //     if (A[i] > A[i + 1]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // };
// var prisonAfterNDays = function (cells, n) {
//   const l = cells.length;
//   const dp = new Array(l).fill(0);

//   const getList = (cells) => {
//     dp[0] = 0;
//     dp[l - 1] = 0;
//     for (let i = 1; i < l - 1; i++) {
//       dp[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
//     }
//     for (let i = 0; i < l; i++) {
//       cells[i] = dp[i];
//     }
//   };
//   n--;
//   getList(cells);
//   const init = dp.slice();
//   getList(cells);
//   let length = 1;

//   while (init.join() !== dp.join()) {
//     getList(cells);
//     length++;
//   }
//   n = n % length;
//   while (n--) {
//     getList(init);
//   }
//   return dp;
// };
// const cells = [0, 1, 0, 1, 1, 0, 0, 1],
//   N = 7;
// console.log(prisonAfterNDays(cells, N));
// var reverseWords = function (s) {
//   return s
//     .split(" ")
//     .filter((item) => item)
//     .reverse()
//     .join(" ");
// };
var simplifyPath = function (path) {
  const stack = [];
  path = path.split("/").filter((item) => item);
  for (let i = 0, l = path.length; i < l; i++) {
    if (path[i] === "..") {
      stack.pop();
    } else if (path[i] !== ".") {
      stack.push(path[i]);
    }
  }
  return `/${stack.join("/")}`;
};
console.log(simplifyPath("/a/./b/../../c/"));
