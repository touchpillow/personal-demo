// var canPartition = function (nums) {
//   const l = nums.length;
//   const sum = nums.reduce((a, b) => a + b);
//   if (sum % 2) return false;
//   const v = sum / 2;
//   const search = (sum1, sum2, i) => {
//     if (i >= l) return false;
//     if (sum1 > v || sum2 > v) return false;
//     if (sum1 + nums[i] === v || sum2 + nums[i] === v) return true;
//     return (
//       search(sum1 + nums[i], sum2, i + 1) || search(sum1, sum2 + nums[i], i + 1)
//     );
//   };
//   return search(0, 0, 0);
// };
// var canPartition = function (nums) {
//   const n = nums.length;
//   if (n < 2) {
//     return false;
//   }
//   let sum = 0,
//     maxNum = 0;
//   for (const num of nums) {
//     sum += num;
//     maxNum = maxNum > num ? maxNum : num;
//   }
//   if (sum % 2) {
//     return false;
//   }
//   const target = sum / 2;
//   if (maxNum > target) {
//     return false;
//   }
//   const dp = new Array(n).fill(0).map(() => new Array(target + 1, false));
//   for (let i = 0; i < n; i++) {
//     dp[i][0] = true;
//   }
//   dp[0][nums[0]] = true;
//   for (let i = 1; i < n; i++) {
//     const num = nums[i];
//     for (let j = 1; j <= target; j++) {
//       if (j >= num) {
//         dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }
//   console.log(dp);
//   return dp[n - 1][target];
// };
// const a = [1, 3, 4, 4];
// console.log(canPartition(a));
// var getIntersectionNode = function (headA, headB) {
//   if (headA === headB) return headA;
//   if (!headA || !headB) return null;
//   let head1 = headA;
//   let head2 = headB;
//   while (head1 !== head2) {
//     head1 = head1 ? head1.next : headB;
//     head2 = head2 ? head2.next : headA;
//   }
//   return head1;
// };
// var search = function (nums, target) {
//   const l = nums.length;
//   let index = mid(0, l - 1);
//   if (index === false) return 0;
//   let c = 1;
//   let left = index - 1;
//   let right = index + 1;
//   while (left >= 0 && nums[left] === target) {
//     c++;
//     left--;
//   }
//   while (right <= l - 1 && nums[right] === target) {
//     c++;
//     right++;
//   }
//   return c;
//   function mid(start, end) {
//     if (start === end) return false;
//     if (nums[start] === target) return start;
//     if (nums[end] === target) return end;
//     const middle = ~~((start + end) / 2);
//     if (nums[middle] > target) {
//       return mid(start, middle);
//     } else {
//       return mid(middle, end);
//     }
//   }
// };
// const a = [5, 7, 7, 8, 8, 10],
//   b = 8;
// console.log(search(a, b));
// var getLeastNumbers = function (arr, k, pre = []) {
//   console.log(arr, k, pre);
//   if (!k) return pre;
//   const l = arr.length;
//   const mid = ~~(l / 2);
//   let left = [];
//   let right = [];
//   for (let i = 0; i < l; i++) {
//     if (i == mid) continue;
//     if (arr[i] <= arr[mid]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   if (k == left.length) return pre.concat(left);
//   if (k == left.length + 1) return pre.concat(left, arr[mid]);
//   if (k > left.length)
//     return getLeastNumbers(
//       right,
//       k - left.length - 1,
//       pre.concat(left, arr[mid])
//     );
//   return getLeastNumbers(left, k, pre);
// };
// const a = [0, 0, 1, 3, 4, 5, 0, 7, 6, 7];
// console.log(getLeastNumbers(a, 9));
// var missingNumber = function (nums) {
//   let sum = 0;
//   const l = nums.length;
//   for (const n of nums) {
//     sum += n;
//   }
//   return ((0 + l - 1) * l) / 2 - sum;
// };
// var kthLargest = function (root, k) {
//   let res;
//   const search = (root) => {
//     if (res !== undefined) return;
//     if (!root) return;
//     search(root.right);
//     k--;
//     if (!k && res === undefined) {
//       res = root.val;
//     }
//     search(root.left);
//   };
//   search(root);
//   return res;
// };
// const a = {
//   b: {
//     c: 1,
//   },
// };
// const copy = Object.assign({}, a);
// copy.b === a.b; //true
var pacificAtlantic = function (matrix) {
  const res = [];
  const h = matrix.length;
  if (!h) return res;
  const w = matrix[0].length;
  const dx = new Set();
  const tp = new Set();
  for (let i = 0; i < w; i++) {
    dfs(tp, 0, i);
  }
  for (let i = 0; i < h; i++) {
    dfs(tp, i, 0);
  }
  for (let i = 0; i < w; i++) {
    dfs(dx, h - 1, w - 1 - i);
  }
  for (let i = 0; i < h; i++) {
    dfs(dx, h - 1 - i, w - 1);
  }
  const dfs = (set, i, j) => {
    if (i < 0 || j >= w) return;
    if (set.has(`${i}-${j}`)) return;
    set.add(`${i}-${j}`);
    if (matrix[i]?.[j] <= matrix[i]?.[j - 1]) {
      dfs(set, i, j - 1);
    }
    if (matrix[i]?.[j] <= matrix[i]?.[j + 1]) {
      dfs(set, i, j + 1);
    }
    if (matrix[i]?.[j] <= matrix[i + 1]?.[j]) {
      dfs(set, i + 1, j);
    }
    if (matrix[i]?.[j] <= matrix[i - 1]?.[j]) {
      dfs(set, i - 1, j);
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dx.has(`${i}-${j}`) && tp.has(`${i}-${j}`)) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
const matrix = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(pacificAtlantic(matrix));
