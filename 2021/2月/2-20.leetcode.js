// var longestNiceSubstring = function (s) {
//   let res = "";
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     for (let j = i; j < l; j++) {
//       if (j - i + 1 <= res.length) continue;
//       const item = s.slice(i, j + 1);
//       const dp1 = new Array(26).fill(true);
//       const dp2 = new Array(26).fill(true);
//       for (const c of item) {
//         const v = c.charCodeAt();
//         if (v > 90) {
//           dp2[v - 97] = false;
//         } else {
//           dp1[v - 65] = false;
//         }
//       }
//       if (item.length === 4) console.log(item);
//       if (
//         dp1.every((item, index) => {
//           return (item && dp2[index]) || (!item && !dp2[index]);
//         })
//       ) {
//         res = item;
//       }
//     }
//   }
//   return res;
// };
// console.log(longestNiceSubstring("qlERNCNVvWLOrrkAaDcXnlaDQxNEneRXQMKnrNN"));
// var canChoose = function (groups, nums) {
//   const l = nums.length;
//   const h = groups.length;
//   let j = 0;
//   let i = 0;

//   while (i < h && j < l) {
//     const w = groups[i].length;
//     while (groups[i].join("-") !== nums.slice(j, j + w).join("-") && j < l) {
//       j++;
//     }
//     if (j >= l) break;
//     j += w;
//     i++;
//   }
//   return i >= h;
// };
// const groups = [
//     [
//       6636698,
//       4693069,
//       -2178984,
//       -2253405,
//       -2732131,
//       8550889,
//       -2324014,
//       -2561263,
//     ],
//     [-8973571, -9146179, 7704305, -1063430, -6569826],
//     [2791091],
//     [
//       -9691134,
//       651171,
//       9835817,
//       4163881,
//       4944714,
//       8166788,
//       -9025553,
//       -9250995,
//       1599781,
//     ],
//   ],
//   nums = [
//     8550889,
//     -2178984,
//     6636698,
//     4693069,
//     -2178984,
//     -2253405,
//     -2732131,
//     8550889,
//     -2324014,
//     -2561263,
//     -2324014,
//     8550889,
//     -8973571,
//     -9146179,
//     7704305,
//     -1063430,
//     -6569826,
//     2791091,
//     -9691134,
//     651171,
//     9835817,
//     4163881,
//     4944714,
//     8166788,
//     -9025553,
//     -9250995,
//     1599781,
//   ];
// console.log(canChoose(groups, nums));
var highestPeak = function (isWater) {
  const h = isWater.length;
  const w = isWater[0].length;
  let water = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (isWater[i][j] === 1) {
        water.push([i, j]);
      }
      isWater[i][j] = -1;
    }
  }
  const set = new Set();
  let cur = [];
  let d = 0;
  while (set.size < h * w) {
    while (water.length) {
      const [i, j] = water.shift();
      if (i < 0 || i >= h) continue;
      if (j < 0 || j >= w) continue;
      if (set.has(`${i}-${j}`)) continue;
      isWater[i][j] = d;
      set.add(`${i}-${j}`);
      cur.push([i + 1, j]);
      cur.push([i - 1, j]);
      cur.push([i, j + 1]);
      cur.push([i, j - 1]);
    }
    water = cur;
    cur = [];
    d++;
  }
  return isWater;
};
const isWater = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 0, 0],
];
console.log(highestPeak(isWater));
// var getCoprimes = function (nums, edges) {
//   const gcdMap = new Set();
//   const gcd = (a, b) => {
//     if (gcdMap.has(`${a}-${b}`) || gcdMap.has(`${b}-${a}`)) return 1;
//     if (a < b) return gcd(b, a);
//     return b ? gcd(b, a % b) : a;
//   };
//   const set = new Set();
//   const map = new Map();
//   const l = nums.length;
//   for (let i = 0; i < l; i++) {
//     map.set(i, []);
//   }

//   for (const [a, b] of edges) {
//     map.get(a).push(b);
//     map.get(b).push(a);
//   }
//   const parentMap = new Map();
//   const stack = [
//     {
//       node: 0,
//       parent: [],
//     },
//   ];
//   while (stack.length) {
//     const item = stack.shift();
//     parentMap.set(item.node, item.parent);
//     set.add(item.node);
//     stack.push(
//       ...map
//         .get(item.node)
//         .filter((item) => !set.has(item))
//         .map((next) => {
//           return {
//             node: next,
//             parent: [item.node, ...item.parent],
//           };
//         })
//     );
//   }
//   return nums.map((item, index) => {
//     if (!parentMap.get(index).length) return -1;
//     return (
//       parentMap.get(index).find((parent) => {
//         const res = gcd(item, nums[parent]);
//         if (res === 1) {
//           gcdMap.add(`${item}-${nums[parent]}`);
//           gcdMap.add(`${nums[parent]}-${item}`);
//         }
//       }) ?? -1
//     );
//   });
// };
