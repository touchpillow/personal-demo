// var corpFlightBookings = function (bookings, n) {
//   const seats = new Array(n + 1).fill(0);
//   for (const [from, to, number] of bookings) {
//     seats[from] += number;
//     if (to < n) {
//       seats[to + 1] -= number;
//     }
//   }
//   console.log(seats);
//   for (let i = 1; i <= n; i++) {
//     seats[i] = seats[i - 1] + seats[i];
//   }
//   return seats.slice(1);
// };
// const bookings = [
//     [1, 2, 10],
//     [2, 3, 20],
//     [2, 5, 25],
//   ],
//   n = 5;
// console.log(corpFlightBookings(bookings, n));
// var reverseVowels = function (s) {
//   s = [...s];
//   const l = s.length;
//   let left = 0,
//     right = l - 1;

//   const list = ["a", "e", "i", "o", "u"];
//   while (right > left) {
//     while (left < l && !list.includes(s[left].toLowerCase())) {
//       left++;
//     }
//     while (right > 0 && !list.includes(s[right].toLowerCase())) {
//       right--;
//     }
//     if (left >= right) break;
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
//   return s.join("");
// };
// var kLengthApart = function (nums, k) {
//   //   const l = nums.length;
//   //   const list = nums.join("").split("1");
//   //   list.shift();
//   //   list.pop();
//   //   return list.every((item) => item.length >= k);
//   let c = 0,
//     n = 0;
//   for (const v of nums) {
//     if (v === 1) {
//       if (c && n < k) return false;
//       c++;
//       n = 0;
//     } else {
//       n++;
//     }
//   }
//   return true;
// };
// const nums = [1, 0, 0, 0, 1, 0, 0, 1],
//   k = 2;
// console.log(kLengthApart(nums, k));
// var maximumPopulation = function (logs) {
//   const list = new Array(1001).fill(0);
//   for (const [b, d] of logs) {
//     list[b - 1950]++;
//     list[d - 1950]--;
//   }
//   let max = 0,
//     res;
//   let c = 0;
//   for (let i = 0; i <= 1000; i++) {
//     c += list[i];
//     if (c > max) {
//       max = c;
//       res = i;
//     }
//   }
//   return res + 1950;
// };
// var sortSentence = function (s) {
//   const stack = [];
//   s = s.split(" ");
//   for (const n of s) {
//     const l = n.length;
//     stack[Number(n[l - 1]) - 1] = n.slice(0, l);
//   }
//   return stack.join(" ");
// };
// var subsetXORSum = function (nums) {
//   const l = nums.length;
//   if (!l) return 0;
//   if (l === 1) return nums[0];
//   let sum = 0;
//   const deep = (index, pre = 0) => {
//     for (let i = index; i < l; i++) {
//       sum += pre ^ nums[i];
//       deep(i + 1, pre ^ nums[i]);
//     }
//   };
//   deep(0);
//   return sum;
// };
// var checkZeroOnes = function (s) {
//   const reg0 = /0+/g;
//   const reg1 = /1+/g;
//   let max0 = 0,
//     max1 = 0;
//   s.replace(reg0, (a, b) => {
//     max0 = Math.max(max0, a.length);
//   });
//   s.replace(reg1, (a, b) => {
//     max1 = Math.max(max1, a.length);
//   });

//   return max1 > max0;
// };
// console.log(checkZeroOnes("111001100000"));
// var checkZeroOnes = function (s) {
//   const length = [0, 0];
//   const l = s.length;
//   let c = 1;
//   length[s[0]] = 1;
//   for (let i = 1; i < l; i++) {
//     if (s[i] === s[i - 1]) {
//       c++;
//     } else {
//       c = 1;
//     }
//     length[s[i]] = Math.max(c, length[s[i]]);
//   }
//   return length[1] > length[0];
// };
// var countGoodSubstrings = function (s) {
//   const l = s.length;
//   let c = 0;
//   for (let i = 0; i < l - 2; i++) {
//     if (new Set(s.slice(i, i + 3).size === 3)) {
//       c++;
//     }
//   }
//   return c;
// };
// var isSumEqual = function (firstWord, secondWord, targetWord) {
//   const getNumber = (s) => {
//     const res = Array.prototype.reduce.call(
//       s,
//       (pre, item) => {
//         return `${pre}${item.charCodeAt() - 97}`;
//       },
//       ""
//     );
//     return Number(res);
//   };
//   return getNumber(firstWord) + getNumber(secondWord) === getNumber(targetWord);
// };
// var isCovered = function (ranges, left1, right1) {
//   const stack = [];
//   const l = ranges.length;
//   ranges.sort((a, b) => {
//     return a[0] - b[0];
//   });
//   let right = ranges[0][1];
//   let left = ranges[0][0];
//   for (let i = 1; i < l; i++) {
//     if (ranges[i][0] > right + 1) {
//       right = Math.max(right, ranges[i][1]);
//     } else {
//       stack.push([left, right]);
//       left = ranges[i][0];
//       right = ranges[i][1];
//     }
//   }
//   stack.push([left, right]);
//   return stack.some((item) => {
//     return item[0] <= left1 && item[1] >= right1;
//   });
// };
// var makeEqual = function (words) {
//   const map = new Map();
//   const l = words.length;
//   for (const s of words) {
//     for (const n of s) {
//       map.set(n, (map.get(n) || 0) + 1);
//     }
//   }
//   const value = [...map.values()];
//   return value.every((n) => !(n % l));
// };
// var largestOddNumber = function (num) {
//   const l = num.length;
//   for (let i = l - 1; i >= 0; i--) {
//     if (Number(num[i]) % 2) {
//       return num.slice(0, i + 1);
//     }
//   }
//   return "";
// };
// var canBeIncreasing = function (nums) {
//   let c = 0;
//   const stack = [];
//   while (nums.length) {
//     const cur = nums.shift();
//     if (!stack.length) {
//       stack.push(cur);
//     } else if (cur > stack[stack.length - 1]) {
//       stack.push(cur);
//     } else {
//       c++;
//       if (stack.length > 1 && stack[stack.length - 2] >= cur) {
//         continue;
//       } else {
//         stack.pop();
//         stack.push(cur);
//       }
//     }
//   }
//   return c < 2;
// };
// const nums = [1, 1, 1];
// console.log(canBeIncreasing(nums));
// var maxProductDifference = function (nums) {
//   nums.sort((a, b) => a - b);
//   const l = nums.length;
//   return nums[l - 1] * nums[l - 2] - nums[0] * nums[1];
// };
// var buildArray = function (nums) {
//   return nums.map((item) => nums[item]);
// };
// var countTriples = function (n) {
//   let c = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       const sum = Math.sqrt(i * i + j * j);
//       if (Number.isInteger(sum) && sum <= n) c += 2;
//     }
//   }
//   return c;
// };
// var purchasePlans = function (nums, target) {
//   const mod = Math.pow(10, 9) + 7;
//   const l = nums.length;
//   let c = 0;
//   nums.sort((a, b) => a - b);
//   function middleSearch(n, end) {
//     let left = 0,
//       right = end - 1;

//     if (n < nums[0]) return 0;
//     if (n >= nums[right]) return right + 1;
//     while (true) {
//       if (right - left === 1) break;
//       const middle = ~~((left + right) / 2);

//       if (nums[middle] > n) {
//         right = middle;
//       } else {
//         left = middle;
//       }
//     }
//     return left + 1;
//   }
//   console.log(nums);
//   for (let i = 1; i < l && nums[i] < target; i++) {
//     const n = middleSearch(target - nums[i], i);
//     console.log(i, nums[i], n);
//     c = (c + n) % mod;
//   }
//   return c;
// };
// const nums = [2, 2, 1, 9],
//   target = 10;
// console.log(purchasePlans(nums, target));
// var storeWater = function (bucket, vat) {
//   // 以倾倒次数为基准
//   let min = Infinity; // 倾倒次数+升级水桶次数
//   const len = bucket.length;
//   let pullCount = 1;
//   while (pullCount <= min) {
//     // 当倾倒次数小于最小次数时继续寻找，否则退出循环
//     let tmpCount = pullCount;
//     let tag = false;
//     for (let i = 0; i < len; i++) {
//       if (vat[i]) tag = true;
//       tmpCount += Math.max(0, Math.ceil(vat[i] / pullCount) - bucket[i]);
//     }
//     if (!tag) return 0;
//     min = Math.min(tmpCount, min);
//     pullCount++;
//   }
//   return min;
// };
// var leastMinutes = function (n) {
//   let c = 1;
//   let curN = 1;
//   while (curN < n) {
//     curN *= 2;
//     c++;
//   }
//   return c;
// };
// var halfQuestions = function (questions) {
//   const l = questions.length;
//   const map = new Map();
//   for (const n of questions) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   const values = [...map.values].sort((a, b) => b - a);
//   let c = 0;
//   for (let i = 0; i < l; i++) {
//     c += values[i];
//     if (c >= l / 2) return i + 1;
//   }
// };
// var lowestCommonAncestor = function (root, p, q) {
//   let res;
//   const deep = (root) => {
//     if (!root) return 0;
//     let v = 0;
//     if (root.val === p || root.val === q) v++;
//     v += deep(root.left);
//     v += deep(root.right);
//     if (v === 2 && res === undefined) {
//       res = root.val;
//     }
//     return left + right;
//   };
//   deep(root);
//   return res;
// };
var lowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) return deep(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return deep(root.right, p, q);

  return lowestCommonAncestor(root);
};
