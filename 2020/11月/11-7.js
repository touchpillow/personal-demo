// var breakfastNumber = function (staple, drinks, x) {
//   const mod = Math.pow(10, 9) + 7;
//   staple.sort((a, b) => a - b);
//   drinks.sort((a, b) => a - b);
//   const l1 = staple.length;
//   const l2 = drinks.length;
//   let c = 0;
//   const map = new Map();
//   for (let i = 0; i < l1; i++) {
//     if (!map.has(staple[i])) {
//       map.set(staple[i], middle(l2, x - staple[i]) + 1);
//     }
//     c += map.get(staple[i]);
//   }
//   return c % mod;
//   function middle(l2, v) {
//     let left = 0;
//     let right = l2 - 1;
//     if (drinks[left] > v) return -1;
//     if (drinks[right] <= v) return l2 - 1;
//     while (left < right) {
//       const mid = ~~((left + right) / 2);
//       if (mid == left) break;
//       if (drinks[mid] > v) {
//         right = mid;
//       } else {
//         left = mid;
//       }
//     }
//     return left;
//   }
// };
// const staple = [10, 20, 5],
//   drinks = [5, 5, 2],
//   x = 15;
// console.log(breakfastNumber(staple, drinks, x));

// var paintingPlan = function (n, k) {
//   let count = 0;
//   if (!k) return 1;
//   if (k < n) return count;
//   const list = new Array(n + 1);
//   list[0] = 1;
//   for (let i = 1; i <= n; i++) {
//     list[i] = list[i - 1] * i;
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if ((i + j) * n - i * j == k) {
//         count +=
//           (list[n] / (list[n - i] * list[i])) *
//           (list[n] / (list[n - j] * list[j]));
//       }
//     }
//   }

//   return count + (n * n == k ? 1 : 0);
// };
// console.log(paintingPlan(4, 13));
var longestSubstring = function (s, k) {
  const l = s.length;
  if (l < k) return 0;
  const map = new Map();
  for (const n of s) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const res = [];
  for (let i = 0; i < l; i++) {
    if (map.get(s[i]) < k) {
      res.push(i);
    }
  }
  if (!res.length) return s.length;
  const l1 = res.length;
  const v = [];
  v.push(longestSubstring(s.slice(0, res[0]), k));

  for (let i = 1; i < l1; i++) {
    v.push(longestSubstring(s.slice(res[i - 1] + 1, res[i]), k));
  }
  v.push(longestSubstring(s.slice(res[l1 - 1] + 1, l), k));
  return Math.max(...v);
};
const s = "ababbc",
  k = 2;

console.log(longestSubstring(s, k));
