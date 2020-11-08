// var findRepeatNumber = function (nums) {
//   nums.sort((a, b) => a - b);
//   let pre = NaN;
//   for (const n of nums) {
//     if (pre === n) {
//       return n;
//     } else {
//       pre = n;
//     }
//   }
// };
// var replaceSpace = function (s) {
//   let res = "";
//   for (const n of s) {
//     if (n == " ") {
//       res += "%20";
//     } else {
//       res += n;
//     }
//   }
//   return s;
// };
// var getMaximumGenerated = function (n) {
//   const res = new Array(n + 1);
//   res[0] = 0;
//   res[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     if (i % 2) {
//       res[i] = res[(i - 1) / 2] + res[(i - 1) / 2 + 1];
//     } else {
//       res[i] = res[i / 2];
//     }
//   }
//   return Math.max(...res);
// };
// console.log(getMaximumGenerated(11));
// var minDeletions = function (s) {
//   const map = new Map();
//   let max = 0;
//   for (const n of s) {
//     map.set(n, (map.get(n) || 0) + 1);
//     max = Math.max(max, map.get(n));
//   }
//   const count = [...map.values()];
//   const v = new Array(max + 1).fill(0);
//   for (const c of count) {
//     v[c]++;
//   }
//   let res = 0;
//   for (let i = max; i >= 0; i--) {
//     if (v[i] > 1) {
//       for (let j = i - 1, m = 0; j > 0 && m < v[i] - 1; j--, m++) {
//         res += i - j;
//         v[j]++;
//       }
//       if (v[i] > i) {
//         res += (v[i] - i) * i;
//       }
//     }
//   }
//   return res;
// };
// console.log(minDeletions("aab"));
var maxProfit = function (inventory, orders) {
  const mod = Math.pow(10, 9) + 7;
  let res = 0;
  inventory = inventory.sort((a, b) => b - a);
  const l = inventory.length;
  if (l == 1) {
    orders %= mod;
    inventory[0] = (inventory[0] % mod) + mod;
    return (((inventory[0] + inventory[0] - orders + 1) * orders) / 2) % mod;
  }
  while (orders--) {
    res += inventory[0];
    res %= mod;
    let v = inventory.shift() - 1;
    if (!v) continue;
    const index = inventory.findIndex((i) => i <= v);
    if (index < 0) {
      inventory.push(v);
    } else {
      inventory.splice(index, 0, v);
    }
  }
  return res % mod;
};
// const inventory = [773160767],
//   orders = 252264991;
// console.log(maxProfit(inventory, orders));
// var createSortedArray = function (instructions) {
//   const list = [];
//   for(const n of ){}
// };
