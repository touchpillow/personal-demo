// var countPairs = function (n, edges, queries) {
//   const map = new Map();

//   for (let i = 1; i <= n; i++) {
//     map.set(i, 0);
//   }
//   const countMap = new Map();
//   for (const [i, j] of edges) {
//     map.set(i, map.get(i) + 1);
//     map.set(j, map.get(j) + 1);
//     if (i > j) {
//       countMap.set(i * (n + 1) + j, (countMap.get(i * (n + 1) + j) || 0) + 1);
//     } else {
//       countMap.set(j * (n + 1) + i, (countMap.get(j * (n + 1) + i) || 0) + 1);
//     }
//   }
//   const pList = [...countMap.keys()];
//   const countList = [0];
//   for (let i = 1; i <= n; i++) {
//     countList.push(i);
//   }
//   countList.sort((a, b) => map.get(a) - map.get(b));
//   console.log(map);
//   console.log(countList);
//   const res = new Array(queries.length).fill(0);
//   queries.forEach((item, index) => {
//     const dp = new Array(n + 1).fill(0);
//     for (let i = 1; i < n; i++) {
//       if (countList[i] === countList[i - 1]) {
//         res[index] = dp[index - 1];
//       } else {
//         let j = n;
//         while (
//           map.get(countList[j - 1]) + map.get(countList[i]) > item &&
//           j - 1 > i
//         ) {
//           j--;
//         }
//         if ((map.get(countList[j]) || 0) + map.get(countList[i]) > item) {
//           if (index === 3) {
//             console.log(i, j, countList[i], countList[j]);
//           }
//           res[index] += n - j + 1;
//         }
//       }
//     }

//     dp[index] = res[index];
//     for (const p of pList) {
//       const i = p % (n + 1);
//       const j = ~~(p / (n + 1));
//       const v = countMap.get(p);

//       if (
//         map.get(i) + map.get(j) > item &&
//         map.get(i) + map.get(j) - v <= item
//       ) {
//         res[index]--;
//       }
//     }
//   });
//   return res;
// };
// const n = 5,
//   edges = [
//     [1, 5],
//     [1, 5],
//     [3, 4],
//     [2, 5],
//     [1, 3],
//     [5, 1],
//     [2, 3],
//     [2, 5],
//   ],
//   queries = [1, 2, 3, 4, 5];

// console.log(countPairs(n, edges, queries));
// var minIncrementForUnique = function (A) {
//   A.sort((a, b) => a - b);
//   let c = 0;
//   const l = A.length;
//   for (let i = 1; i < l; i++) {
//     if (A[i] <= A[i - 1]) {
//       c += A[i - 1] + 1 - A[i];
//       A[i] = A[i - 1] + 1;
//     }
//   }
//   return c;
// };
// var validateStackSequences = function (pushed, popped) {
//   const l = pushed.length;
//   const stack = [];
//   let j = 0;
//   for (const n of pushed) {
//     stack.push(n);
//     while (stack.length && j < l && stack[stack.length - 1] == popped[j]) {
//       stack.pop();
//       j++;
//     }
//   }

//   return j === l;
// };
// console.log(validateStackSequences([1, 2, 3], [1, 2, 3]));
// const a = {
//   index: 0,
//   v: [true, false, 1, "", null],

//   valueOf() {
//     // return this.v[this.index++];
//     return null;
//   },
// };
// // console.log(a == true && a == false && a == 1 && a == "" && a == null);
// console.log(a == null);
// function maxLength(arr = [10, 0, -1, -2, -3, -20, 10], targetSum = 10) {
//   let left = 0,
//     right = 1,
//     sum = arr[0],
//     maxLen = 0;
//   // 0 -1
//   if (sum < targetSum) maxLen = left + 1;

//   for (; right < arr.length; ) {
//     sum += arr[right];
//     if (sum < targetSum) {
//       maxLen = Math.max(maxLen, right - left + 1);
//       right++;
//     } else {
//       sum = sum - arr[left];
//       ++left;

//       ++right;
//     }
//   }
//   return maxLen;
// }
// console.log(maxLength());
//此时用双指针的方法，从边界向内收缩
const maxLength = (arr, target) => {
  const l = arr.length;
  if (l === 1) return arr[0] < target ? 1 : 1;
  let sum = arr.reduce((a, b) => a + b, 0);
  let left = 0;
  let right = l - 1;
  while (right > left) {
    if (sum < target) {
      break;
    }
    if (arr[left] < arr[right]) {
      sum -= arr[right];
      right--;
    } else {
      sum -= arr[left];
      left++;
    }
  }

  return sum < target ? right - left + 1 : 0;
};
console.log(maxLength([10, 1, 10, 2, -10, 10], 10));
