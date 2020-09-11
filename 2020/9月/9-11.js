// var rangeSumBST = function (root, L, R) {
//   let sum = 0;
//   const search = (root) => {
//     if (!root) return 0;
//     if (root.val < L) {
//       search(root.left);
//     } else if (root.val > R) {
//       search(root.right);
//     } else {
//       sum += root.val;
//       search(root.left);
//       search(root.right);
//     }
//   };
//   search(root);
//   return sum;
// };
// var rangeSumBST = function (root, L, R) {
//   let sum = 0;
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.pop();
//     if (item.val < L) {
//       stack.push(item.right);
//     } else if (item.val > R) {
//       stack.push(item.left);
//     } else {
//       sum += item.val;
//       stack.push(item.left, item.right);
//     }
//   }
//   return sum;
// };
// var validMountainArray = function (A) {
//   const l = A.length;
//   if (l < 3) return false;
//   let flag = true;
//   if (A[0] >= A[1]) return false;
//   for (let i = 0; i < l - 1; i++) {
//     if (A[i] == A[i + 1]) return false;
//     if (flag && A[i] > A[i + 1]) {
//       flag = false;
//     } else if (!flag && A[i] < A[i + 1]) {
//       return false;
//     }
//   }
//   return !flag;
// };
// const a = [3, 5, 5];
// console.log(validMountainArray(a));
var findOrder = function (numCourses, prerequisites) {
  const course = new Array(numCourses).fill(0);
  const map = new Map();
  for (const [cur, pre] of prerequisites) {
    course[cur]++;
    if (map.get(pre)) {
      map.get(pre).push(cur);
    } else {
      map.set(pre, [cur]);
    }
  }
  const res = [];
  for (let i = 0; i < numCourses; i++) {
    if (!course[i]) {
      res.push(i);
    }
  }
  const list = [];
  while (res.length) {
    const item = res.shift();
    list.push(item);
    const curCourse = map.get(item);
    for (const n of curCourse) {
      course[n]--;
      if (!course[n]) {
        res.push(n);
      }
    }
  }
  return list.length == numCourses ? list : [];
};
