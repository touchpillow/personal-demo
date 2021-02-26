// var totalFruit = function (tree) {
//   let max = 0;
//   const l = tree.length;
//   let left = 0,
//     right = 0;
//   let c = 0;
//   const set = new Set();

//   sum[0] = tree[0];
//   let last = 0;

//   while (right < l) {
//     if (set.size === 2 && !set.has(tree[right])) {
//       set.clear();
//       set.add(tree[right - 1]);
//       left = last;
//     }
//     set.add(tree[right]);
//     const curV = right - left + 1;
//     max = Math.max(curV, max);
//     if (tree[last] !== tree[right]) {
//       last = right;
//     }
//     right++;
//   }
//   return max;
// };
var sumSubarrayMins = function (arr) {
  const mod = Math.pow(10, 9) + 7;
  let stack = [];
  let tmp = 0,
    allCount = 0,
    sum = 0;
  for (let i = 0; i < A.length; i++) {
    allCount = 1;
    while (stack.length !== 0 && stack[stack.length - 1].val > A[i]) {
      let { count, val } = stack.pop();
      tmp -= count * val;
      allCount += count;
    }

    tmp += allCount * A[i];
    stack.push({
      val: A[i],
      count: allCount,
    });

    sum += tmp;

    sum %= mod;
  }
  return sum;
};
