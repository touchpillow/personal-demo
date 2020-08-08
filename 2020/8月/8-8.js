// var averageOfLevels = function (root) {
//   if (!root) return [];
//   const stack = [
//     {
//       node: root,
//       level: 1,
//     },
//   ];
//   let num = 0;
//   let sum = 0;
//   let curLevel = 1;
//   const res = [];
//   while (stack.length) {
//     console.log(stack.length);
//     const item = stack.shift();
//     if (!item.node) continue;
//     if (item.level === curLevel) {
//       sum += item.node.val;
//       num++;
//     } else {
//       res.push(sum / num);
//       curLevel = item.level;
//       num = 1;
//       sum = item.node.val;
//     }
//     stack.push({
//       node: item.left,
//       level: item.level + 1,
//     });
//     stack.push({
//       node: item.right,
//       level: item.level + 1,
//     });
//   }
//   res.push(sum / num);
//   return res;
// };
// var a = {
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
// };
// console.log(averageOfLevels(a));
// var findMaxAverage = function (nums, k) {
//   const l = nums.length;
//   let v = 0;
//   for (let i = 0; i < k; i++) {
//     v += nums[i];
//   }
//   let max = v;
//   console.log(max);
//   for (let i = 1; i <= l - k; i++) {
//     console.log(i);
//     v = v - nums[i - 1] + nums[i + k - 1];
//     max = max > v ? max : v;
//   }
//   return max / k;
// };
// var a = [0, 1, 1, 3, 3];
// console.log(findMaxAverage(a, 4));
// var numTrees = function (n) {
//   if (!n) return [];
//   const list = new Array(n + 1).fill(0);
//   list[0] = list[1] = 1;
//   const numTreesAA = (n) => {
//     if (list[n]) return list[n];
//     for (let i = 0; i < n; i++) {
//       list[n] += numTreesAA(i) + numTreesAA(n - 1 - i);
//     }
//     return list[n];
//   };

//   return numTreesAA(n);
// };
// console.log(numTrees(3));
var numDecodings = function (s) {
  const l = s.length;
  if (!l) return 0;
  if (s[0] === "0") return 0;

  const map = new Array(l).fill(0);
  map[0] = 1;
  for (let i = 1; i < l; i++) {
    if (s[i] == "0") {
      if (Number(s[i - 1]) > 2) return 0;
      if (s[i - 1] == "0") return 0;
      if (s[i - 2] != "0") {
        map[i] = map[i - 2] || 1;
      } else {
        map[i] = map[i - 1];
      }
    } else if (s[i - 1] == "0") {
      map[i] = map[i - 1];
    } else {
      if (Number(`${s[i - 1]}${s[i]}`) > 26) {
        map[i] = map[i - 1];
      } else {
        map[i] = (map[i - 1] || 0) + (map[i - 2] || 1);
      }
    }
  }
  return map[l - 1];
};
console.log(numDecodings("110"));
