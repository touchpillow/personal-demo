// var flipEquiv = function (root1, root2) {
//   if (root1 === root2) return true;
//   if (root1 === null && root2 !== null) return false;
//   if (root2 === null && root1 !== null) return false;
//   if (root1.val !== root2.val) return false;
//   return (
//     (flipEquiv(root1.left, root2.left) &&
//       flipEquiv(root1.right, root2.right)) ||
//     (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
//   );
// };
var canReorderDoubled = function (arr) {
  let v1 = [];
  const v2 = [];
  for (const n of arr) {
    if (n > 0) {
      v1.push(n);
    } else if (n < 0) {
      v2.push(n);
    }
  }
  const l = arr.length;
  if (l % 2) return false;
  if (v1.length % 2 || v2.length % 2) return false;
  if ((l - v1.length - v2.length) % 2) return false;
  const map1 = new Map();
  v1.sort((a, b) => a - b);
  v2.sort((a, b) => b - a);
  v1 = [...v2, ...v1];
  console.log(v1);
  const l1 = v1.length;
  const dp = new Array(l1).fill(false);
  for (let i = 0; i < l1; i++) {
    if (!map1.has(v1[i])) {
      map1.set(v1[i], []);
    }
    map1.get(v1[i]).push(i);
  }
  for (let i = 0; i < l1; i++) {
    while (dp[i]) {
      i++;
    }
    if (i >= l1) break;
    dp[i] = true;
    let flag = false;
    if (!map1.has(2 * v1[i]) || !map1.get(2 * v1[i]).length) return false;
    while (map1.get(2 * v1[i]).length) {
      const target = map1.get(2 * v1[i]).shift();
      if (!dp[target]) {
        flag = true;
        dp[target] = true;
        break;
      }
    }
    if (!flag) return false;
  }
  return dp.every((i) => i);
};
const a = [1, 2, 4, 16, 8, 4];
console.log(canReorderDoubled(a));
