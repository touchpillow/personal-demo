/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var canMakeArithmeticProgression = function (arr) {
//   const length = arr.length;
//   if (length < 3) return true;
//   arr.sort((a, b) => a - b);
//   let i = 1;
//   while (i < length - 1) {
//     if (2 * arr[i] !== arr[i - 1] + arr[i + 1]) return false;
//   }
//   return true;
// };
// var getLastMoment = function (n, left, right) {
//   let res = Math.max(...right) + 1;
//   left.forEach((i) => {
//     res = Math.max(res, n - i + 1);
//   });
//   return res;
// };
// var numSubmat = function (mat) {
//   let res = 0;
//   const column = mat.length;
//   const row = mat[0].length;
//   const map = {};
//   for (let i = 0; i < column; i++) {
//     for (let j = 0; i < row; i++) {
//       if (mat[i][j] == 0) continue;
//       for (let ver = 0; ver + i < column; ver++) {
//         if (mat[i + ver][j] == 0) break;
//         for (let hori = 0; hori + j < row; hori++) {
//           if (mat[i + ver][j + hori] == 0) break;
//         }
//       }
//     }
//   }
// };
// var threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   const l = nums.length;
//   let res = nums[0] + nums[1] + nums[l - 1];
//   for (let i = 0; i < l - 2; ) {
//     let start = i + 1;
//     let end = l - 1;
//     do {
//       if (start >= end || nums[i] >= target || nums[end] <= target) break;
//       let result = nums[i] + nums[start] + nums[end];
//       if (Math.abs(result - target) < Math.abs(res - target)) {
//         res = result;
//       }
//       if (result < target) {
//         while (start < end && nums[start] === nums[++start]) {}
//       } else {
//         while (start < end && nums[end] === nums[--end]) {}
//       }
//     } while (start < end);
//     while (nums[i] === nums[++i]) {}
//   }
//   console.log(res);
//   return res;
// };
// threeSumClosest([1, 1, 1, 0], 100);
// const map = {
//   2: "abc",
//   3: "def",
//   4: "ghi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz",
// };
// var letterCombinations = function (digits) {
//   const res = [""];
//   return letterCombinationsAA(digits, res);
// };
// var letterCombinationsAA = function (digits, res) {
//   if (!digits.length) return res;
//   const l = res.length;
//   for (let i = 0; i < l; i++) {
//     const item = res.shift();
//     for (const s of map[digits[0]]) {
//       res.push(`${item}${s}`);
//     }
//   }
//   return letterCombinationsAA(digits.substring(1), res);
// };
// const map = {
//   2: "abc",
//   3: "def",
//   4: "ghi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz",
// };
// var letterCombinations = function (digits) {
//   if (!digits.length) return [];
//   const res = [""];
//   return letterCombinations(digits, res);
// };
// var letterCombinationsAA = function (digits, res) {
//   if (!digits.length) return res;
//   const l = res.length;
//   for (let i = 0; i < l; i++) {
//     const item = res.shift();
//     for (const s of map[digits[0]]) {
//       res.push(`${item}${s}`);
//     }
//   }
//   return letterCombinationsAA(digits.substring(1), res);
// };
// var deleteNode = function (node) {
//   if (head.val == node.val) {
//     head = head.next;
//   } else {
//     let list = head;
//     while (list && list.next) {
//       if (list.val === node.val) {
//         list.next = lsit.next.next;
//       } else {
//         list = list.next;
//       }
//     }
//   }
// };
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   const map = {};
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]]) {
//       map[s[i]]++;
//     } else {
//       map[s[i]] = 1;
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (!map[t[i]]) return false;
//     map[t[i]]--;
//     if (map[t[i]] < 0) return false;
//   }
//   return true;
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
var letterCombinations = function (digits) {
  const l = digits.length;
  if (!l) return [];
  const res = [""];
  for (let i = 0; i < l; i++) {
    const jl = res.length;
    for (let j = 0; j < jl; j++) {
      const item = res.shift();
      for (const s of map[digits[i]]) {
        res.push(`${item}${s}`);
      }
    }
  }
  return res;
};
// Number.isSafeInteger;
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER
// let a = Number.MAX_SAFE_INTEGER;
// console.log(a + 1 === a + 2); //true
// let b = 9007199254740992n;
// let c = b + 1n;
// b === c; //false
// typeof b; //bigint

// let d = 1n;
// console.log(globalThis);

// async function fn() {
//   const a = await import("./7-1.js");
//   import("./7-1.js").then((module) => {
//     //
//   });
// }

// const a = 0;
// const b = false;
// const c = null;
// const d = undefined;
// console.log(a || b); //false
// console.log(a ?? c); //0
// console.log(c ?? d); //undefined
// a && a.b && a.b();
// a?.b?.()

// b?.[1]?.ccc//b数组的可能的第2个成员的可能的ccc属性

// const a = b?.c?.d ?? "";
const a1 = Promise.resolve(1);
const a2 = Promise.resolve(2);
const a3 = Promise.reject(3);
const a4 = Promise.reject();
Promise.allSettled([a1, a2, a3, a4]).then((a) => {
  console.log(a);
});
// [
//   { "status": "fulfilled", "value": 1 },
//   { "status": "fulfilled", "value": 2 },
//   { "status": "rejected", "reason": 3 },
//   { "status": "rejected", "reason": undefined}
// ]
import * as MyModule from "...";
export { MyModule };
