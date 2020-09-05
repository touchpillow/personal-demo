// var fairCandySwap = function (A, B) {
//   const sumA = A.reduce((a, b) => a + b);
//   const sumB = B.reduce((a, b) => a + b);
//   const dis = (sumA + sumB) / 2 - sumA;
//   for (const n of A) {
//     if (B.includes(n + dis)) {
//       return [n, n + dis];
//     }
//   }
// };
// const a = [1, 2, 3, 4];
// const b = [1, 2, 3];
// console.log(fairCandySwap(a, b));
// var surfaceArea = function (grid) {
//   const h = grid.length;

//   if (!h) return 0;
//   const w = grid[0].length;
//   let num = 0;
//   let chongdie = 0;
//   let yList = new Array(w).fill(0);
//   for (let i = 0; i < h; i++) {
//     let pre = 0;
//     for (let j = 0; j < w; j++) {
//       const v = grid[i][j];
//       num += v;
//       chongdie += v > 1 ? v - 1 : 0;
//       chongdie += Math.min(pre, v);
//       chongdie += Math.min(yList[j], v);
//       yList[j] = pre = v;
//     }
//   }
//   return 6 * num - 2 * chongdie;
// };
// const a = [
//   [2, 2, 2],
//   [2, 1, 2],
//   [2, 2, 2],
// ];

// console.log(surfaceArea(a));
// var numSpecialEquivGroups = function (A) {

// };
// var BSTIterator = function (root) {
//   this.index = 0;
//   this.node = [];
//   const search = (root) => {
//     if (!root) return;
//     search(root.left);
//     this.node.push(root.val);
//     search(root.right);
//   };
// };

// /**
//  * @return the next smallest number
//  * @return {number}
//  */
// BSTIterator.prototype.next = function () {
//     return this.node[this.index++]
// };

// /**
//  * @return whether we have a next smallest number
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function () {
//     return this.index<this.node.length
// };
// var largestNumber = function (nums) {
//   nums.sort((a, b) => {
//     a = `${a}`;
//     b = `${b}`;
//     let i = 0;
//     const la = a.length;
//     const lb = b.length;
//     while (true) {
//       if (i >= la && i >= lb) return 0;
//       if (i >= la) return;
//       if (a[i] > b[i]) return -1;
//       if (a[i] < b[i]) return 1;
//       i++;
//     }
//   });
// };
// var findRepeatedDnaSequences = function (s) {
//   const l = s.length;
//   const res = [];
//   if (l.length <= 10) return res;
//   for (let i = 0; i < l - 10; i++) {
//     const word = s.slice(i, i + 10);
//     if (res.includes(word)) continue;
//     let j = i + 1;
//     while (j <= l - 10) {
//       if (s.slice(j, j + 10) == word) {
//         res.push(word);
//         break;
//       } else {
//         j++;
//         while (s[j] !== word[0] && j < l - 10) {
//           j++;
//         }
//       }
//     }
//   }
//   return res;
// };
// const a = "AAAAAAAAAAA";
// console.log(findRepeatedDnaSequences(a));
// var diagonalSum = function (mat) {
//   const h = mat.length;
//   let count = 0;
//   if (!h) return count;
//   if (h == 1) return mat[0][0];
//   for (let i = 0; i < h; i++) {
//     count += mat[i][i];
//     count += mat[i][h - 1 - i];
//   }
//   if (h % 2) {
//     count -= mat[(h - 1) / 2][(h - 1) / 2];
//   }
//   return count;
// };
// const a = [[5]];
// console.log(diagonalSum(a));
// var numWays = function (s) {
//   const l = s.length;
//   const maxV = 1000000007;
//   let sc = 0;
//   for (const n of s) {
//     if (n == "1") sc++;
//   }
//   if (!sc) {
//     return (((1 + l - 2) * (l - 2)) / 2) % maxV;
//   } else if (sc % 3) {
//     return 0;
//   }
//   let num = 0;
//   let leftNum = 0;
//   for (let i = 0; i < l; i++) {
//     if (num < sc / 3 && s[i] == "1") {
//       num++;
//     } else if (num == sc / 3 && s[i] == "1") {
//       break;
//     } else if (num == sc / 3 && s[i] == "0") {
//       leftNum++;
//     }
//   }
//   num = 0;
//   let rightNum = 0;
//   for (let i = l - 1; i >= 0; i--) {
//     if (num < sc / 3 && s[i] == "1") {
//       num++;
//     } else if (num == sc / 3 && s[i] == "1") {
//       break;
//     } else if (num == sc / 3 && s[i] == "0") {
//       rightNum++;
//     }
//   }
//   return ((leftNum + 1) * (rightNum + 1)) % maxV;
// };
// const a = "1000001";
// console.log(numWays(a));
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  const a = [];
  for (let i = 1; i <= n; i++) a[i] = arr[i - 1];
  let pre = 0;
  for (; pre < n; pre++) {
    if (arr[pre] > arr[pre + 1]) break;
  }
  pre++;
  let suf = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (a[i] <= a[i + 1]) suf++;
    else break;
  }
  if (pre == n) return 0;
  let ans = Math.min(n - pre, n - suf);
  let r = n - suf + 1;
  for (let l = 1; l <= pre; l++) {
    for (; r <= n; r++) if (a[r] >= a[l]) break;
    let len = r - l - 1;
    ans = Math.min(len, ans);
  }
  return ans;
};
const a = [1, 2, 3, 10, 4, 2, 3, 5];
console.log(findLengthOfShortestSubarray(a));
// var countRoutes = function (locations, start, finish, fuel) {
//   if (fuel < Math.abs(locations[start] - locations[finish])) return 0;
//   let pre = locations[start];
//   let last = locations[finish];
//   const l = locations.length;
//   let count = start == finish ? 1 : 0;
//   const map = new Map();
//   const dp = new Array(l).fill("").map(() => new Array(fuel + 1).fill(0));
//   const price = new Array(l).fill("").map(() => new Array(l));
//   for (let i = 0; i < l; i++) {
//     for (let j = 0; j < l; j++) {
//       price[i][j] = price[j][i] = Math.abs(locations[i] - locations[j]);
//     }
//   }
//   for (let k = 1; k <= fuel; k++) {
//     for (let i = 0; i < l; i++) {
//       if (i == finish) {
//         for (let z = 0; z < l; z++) {
//           if (z == i) continue;
//           if (k - price[i][z] >= price[z][finish])
//             dp[i][k] += dp[z][k - price[i][z]];
//           dp[i][k] %= 1000000007;
//         }
//       } else {
//         if (k >= price[i][finish]) dp[i][k] = 1;
//         for (let z = 0; z < l; z++) {
//           if (z == i) continue;
//           if (k - price[i][z] >= price[z][finish])
//             dp[i][k] += dp[z][k - price[i][z]];
//           dp[i][k] %= 1000000007;
//         }
//       }
//     }
//   }

//   return (count + dp[start][fuel]) % 1000000007;
// };
// const locations = [
//     9828,
//     9766,
//     9715,
//     9655,
//     9747,
//     9694,
//     9809,
//     9807,
//     9690,
//     9726,
//     9744,
//     9763,
//     9986,
//     9602,
//     9660,
//     9646,
//     9638,
//     9693,
//     9686,
//     9882,
//     9812,
//     9900,
//     9671,
//     9948,
//     9672,
//     9639,
//     9791,
//     9932,
//     9679,
//     9913,
//     9864,
//     9624,
//     9892,
//     9859,
//     9701,
//     9969,
//     9620,
//     9933,
//     9821,
//     9788,
//     9631,
//     9790,
//     9960,
//     9605,
//     9844,
//     9699,
//     9607,
//     9704,
//     9755,
//     9776,
//     9816,
//     9874,
//     9600,
//     9946,
//     9983,
//     9875,
//     9625,
//     9833,
//     9883,
//     9881,
//     9972,
//     9714,
//     9950,
//     9654,
//     9740,
//     9609,
//     9689,
//     9608,
//     9827,
//     9839,
//     9764,
//     9845,
//     9837,
//     9792,
//     9949,
//     9873,
//     9840,
//     9632,
//     9610,
//     9904,
//     9673,
//     9912,
//     9831,
//     9999,
//     9805,
//     9886,
//     9781,
//     9952,
//     9891,
//     9989,
//     9717,
//     9926,
//   ],
//   start = 8,
//   finish = 47,
//   fuel = 91;
// console.log(countRoutes(locations, start, finish, fuel));
