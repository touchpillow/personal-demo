// var OrderedStream = function (n) {
//   this.ptr = 1;
//   this.data = {};
// };

// /**
//  * @param {number} id
//  * @param {string} value
//  * @return {string[]}
//  */
// OrderedStream.prototype.insert = function (id, value) {
//   this.data[id] = value;
//   const res = [];
//   for (let i = this.ptr; true; i++) {
//     if (this.data[this.ptr] === undefined) {
//       return res;
//     } else {
//       res.push(this.data[this.ptr]);
//       this.ptr++;
//     }
//   }
// };
// const os = new OrderedStream(5);
// console.log(os.insert(3, "ccccc")); // 插入 (3, "ccccc")，返回 []
// console.log(os.insert(1, "aaaaa")); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
// console.log(os.insert(2, "bbbbb")); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
// console.log(os.insert(5, "eeeee")); // 插入 (5, "eeeee")，返回 []
// console.log(os.insert(4, "ddddd")); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
// var closeStrings = function (word1, word2) {
//   if (word1.length !== word2.length) return false;
//   const map1 = new Map();
//   const map2 = new Map();
//   for (const s of word1) {
//     map1.set(s, (map1.get(s) || 0) + 1);
//   }
//   for (const s of word2) {
//     map2.set(s, (map2.get(s) || 0) + 1);
//   }
//   let c1 = [...map1.values()];
//   let c2 = [...map2.values()];
//   if (c1.length !== c2.length) return false;
//   c1.sort((a, b) => a - b);
//   c2.sort((a, b) => a - b);
//   const l = c1.length;
//   for (let i = 0; i < l; i++) {
//     if (c1[i] !== c2[i]) return false;
//   }
//   for (const key of map1.keys()) {
//     if (!map2.has(key)) return false;
//   }
//   return true;
// };
// const word1 = "uau",
//   word2 = "ssx";
// console.log(closeStrings(word1, word2));
// var minOperations = function (nums, x) {
//   const l = nums.length;
//   let res = Infinity;
//   const dp = new Array(l)
//     .fill("")
//     .map(() => new Array(l).fill("").map(() => ({})));
//   const search = (start, end, pre, c) => {
//     if (pre < 0) return Infinity;
//     if (c >= res) return Infinity;
//     if (pre === 0) {
//       res = c < res ? c : res;
//       return c;
//     }
//     if (start > end) return Infinity;
//     if (dp[start][end][pre]) {
//       return search(end + 1, end, 0, c + dp[start][end][pre]);
//     }
//     const v1 = search(start + 1, end, pre - nums[start], c + 1);
//     const v2 = search(start, end - 1, pre - nums[end], c + 1);
//     dp[start][end][pre] = Math.min(v1, v2);
//   };
//   search(0, l - 1, x, 0);
//   return res == Infinity ? -1 : res;
// };

// var minOperations = function (nums, x) {
//   const l = nums.length;
//   const left = new Array(l + 1);
//   left[0] = 0;
//   left[1] = nums[0];
//   const right = new Array(l + 1);
//   right[l] = 0;
//   for (let i = 2; i <= l; i++) {
//     left[i] = left[i - 1] + nums[i - 1];
//   }
//   for (let i = l - 1; i >= 0; i--) {
//     right[i] = right[i + 1] + nums[i];
//   }
//   const map1 = new Map();
//   const map2 = new Map();
//   for (let i = 0; i <= l; i++) {
//     map1.set(left[i], i);
//   }
//   for (let i = l; i >= 0; i--) {
//     map2.set(right[i], l - i);
//   }
//   let res = l + 1;
//   for (const item of left) {
//     if (map2.has(x - item)) {
//       res = Math.min(res, map1.get(item) + map2.get(x - item));
//     }
//   }
//   return res == l + 1 ? -1 : res;
// };
// const nums = [3, 2, 20, 1, 1, 3],
//   x = 10;
// console.log(minOperations(nums, x));
// var majorityElement = function (nums) {
//   let c = 0;
//   let v = NaN;
//   for (const n of nums) {
//     if (!c) {
//       v = n;
//       c++;
//     } else if (v == n) {
//       c++;
//     } else {
//       c--;
//     }
//   }
//   return v;
// };
