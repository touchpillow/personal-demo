// var countMatches = function (items, ruleKey, ruleValue) {
//   const keys = {
//     type: 0,
//     color: 1,
//     name: 2,
//   };
//   return items.filter((item) => {
//     return item[keys[ruleKey]] === ruleValue;
//   }).length;
// };
// var closestCost = function (baseCosts, toppingCosts, target) {
//   let stack = [0];
//   for (const t of toppingCosts) {
//     stack = [...new Set(stack)];
//     const pre = stack.splice(0);
//     for (const p of pre) {
//       stack.push(p);

//       stack.push(p + t);

//       stack.push(p + 2 * t);
//     }
//   }
//   let cur = Infinity;
//   for (const v of baseCosts) {
//     if (v === target) return target;
//     if (stack.includes(target - v)) return target;
//     if (v > target) {
//       if (v - target >= Math.abs(cur - target)) continue;
//       cur = v;
//     } else {
//       for (let i = 1; i < Math.abs(target - cur); i++) {
//         if (stack.includes(target - i - v)) {
//           cur = target - i;
//           break;
//         } else if (stack.includes(target + i - v)) {
//           cur = target + i;
//           break;
//         }
//       }
//     }
//   }
//   return cur;
// };
// const baseCosts = [4],
//   toppingCosts = [9],
//   target = 9;
// console.log(closestCost(baseCosts, toppingCosts, target));
// var minOperations = function (nums1, nums2) {
//   const l1 = nums1.length;
//   const l2 = nums2.length;
//   let sum1 = nums1.reduce((a, b) => a + b, 0);
//   let sum2 = nums2.reduce((a, b) => a + b, 0);
//   if (l2 * 6 < l1 || l1 * 6 < l2) return -1;
//   if (sum1 === sum2) return 0;
//   let max, min;
//   if (sum1 > sum2) {
//     max = nums1.sort((a, b) => b - a);
//     min = nums2.sort((a, b) => a - b);
//   } else {
//     max = nums2.sort((a, b) => b - a);
//     min = nums1.sort((a, b) => a - b);
//     [sum1, sum2] = [sum2, sum1];
//   }
//   let c = 0;

//   while (sum2 !== sum1) {
//     const a = max.length ? max.shift() : 1;
//     const b = min.length ? min.shift() : 6;
//     const v1 = Math.abs(1 - a);
//     const v2 = Math.abs(6 - b);
//     if (v1 > v2) {
//       if (sum1 - sum2 > v1) {
//         sum1 -= v1;
//       } else {
//         sum1 = sum2;
//       }
//       min.unshift(b);
//     } else {
//       if (sum1 - sum2 > v2) {
//         sum2 += v2;
//       } else {
//         sum1 = sum2;
//       }
//       max.unshift(a);
//     }
//     c++;
//   }
//   return c;
// };
// const nums1 = [1, 2, 3, 4, 5, 6],
//   nums2 = [1, 1, 2, 2, 2, 2];
// console.log(minOperations(nums1, nums2));
var getCollisionTimes = function (cars) {
  const l = cars.length;
  if (!l) return [];
  const time = new Array(l).fill(0);
  time[l - 1] = -1;
  for (let i = 0; i < l; i++) {
    cars[2] = i;
  }
  cars.sort((a, b) => b[0] - a[0]);
  let cur = position.shift();
  let t = (target - cur[0]) / cur[1];
  time[cur[2]] = -1;
  while (position.length) {
    const v = position.shift();
    const t2 = (target - v[0]) / v[1];
    if (t >= t2) {
      time[v[2]] = (cur[0] - v[0]) / (v[1] - cur[1]);
      continue;
    } else {
      c++;
      cur = v;
      t = t2;
      time[cur[2]] = -1;
    }
  }
  return time;
};
