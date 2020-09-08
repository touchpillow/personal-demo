// var canFinish = function (numCourses, prerequisites) {
//   const map = new Map();
//   const isCircle = (cur, pre) => {
//     const stack = [cur];
//     while (stack.length) {
//       const item = stack.pop();
//       if (map.get(item)) {
//         if (map.get(item).includes(pre)) return true;
//         stack.push(...map.get(item));
//       }
//     }
//     return false;
//   };
//   for (const [cur, pre] of prerequisites) {
//     if (isCircle(cur, pre)) return false;
//     if (map.get(pre)) {
//       map.get(pre).push(cur);
//     } else {
//       map.set(pre, [cur]);
//     }
//   }

//   return true;
// };
// const a = 4,
//   b = [
//     [0, 1],
//     [2, 3],
//     [1, 2],
//     [3, 0],
//   ];
// console.log(canFinish(a, b));
// var canFinish = function (numCourses, prerequisites) {
//   const inDegree = new Array(numCourses).fill(0); // 入度数组
//   const map = {}; // 邻接表
//   for (let i = 0; i < prerequisites.length; i++) {
//     const [cur, pre] = prerequisites[i];
//     inDegree[cur]++; // 求课的初始入度值
//     if (map[pre]) {
//       // 当前课已经存在于邻接表
//       map[pre].push(cur); // 添加依赖它的后续课
//     } else {
//       // 当前课不存在于邻接表
//       map[pre] = [cur];
//     }
//   }
//   const queue = [];
//   for (let i = 0; i < inDegree.length; i++) {
//     // 所有入度为0的课入列
//     if (inDegree[i] == 0) queue.push(i);
//   }
//   let count = 0;
//   while (queue.length) {
//     const selected = queue.shift(); // 当前选的课，出列
//     count++; // 选课数+1
//     const toEnQueue = map[selected]; // 获取这门课对应的后续课
//     for (const item of toEnQueue) {
//       inDegree[item]--;
//       if (!inDegree[item]) {
//         queue.push(item);
//       }
//     }
//   }
//   return count == numCourses; // 选了的课等于总课数，true，否则false
// };

// var reverseOnlyLetters = function (S) {
//   let left = 0,
//     right = S.length - 1;
//   let LS = "";
//   let RS = "";
//   const reg = /[a-zA-Z]/;
//   while (left < right) {
//     while (!reg.test(S[left]) && left < right) {
//       LS += S[left];
//       left++;
//     }
//     while (!reg.test(S[right]) && left < right) {
//       RS = `${S[right]}${RS}`;
//       right--;
//     }
//     if (left >= right) break;
//     LS += S[right];
//     RS = `${S[left]}${RS}`;
//     left++;
//     right--;
//   }
//   if (left === right) {
//     LS += S[left];
//   }
//   return `${LS}${RS}`;
// };
// const a = "ab--cd";
// console.log(reverseOnlyLetters(a));
// var reverseOnlyLetters = function (S) {
//   const l = S.length;
//   const res = new Array(l);
//   const list = "";
//   for (let i = 0; i < l; i++) {
//     if (/[a-zA-Z]/.test(S[i])) {
//       list = `${S[i]}${list}`;
//     } else {
//       res[i] = S[i];
//     }
//   }
//   let i = 0;
//   for (const s of list) {
//     while (res[i] !== undefined) {
//       i++;
//     }
//     res[i] = s;
//   }
//   return res.join("");
// };
// var sortArrayByParityII = function (A) {
//   const l = A.length;
//   const left = [];
//   const right = [];
//   for (const n of A) {
//     if (n % 2) {
//       left.push(n);
//     } else {
//       right.push(n);
//     }
//   }
//   for (let i = 0; i < l / 2; i++) {
//     left.splice(2 * i, 0, right[i]);
//   }
//   return left;
// };
var sortArrayByParityII = function (A) {
  let a = 0,
    b = 0;
  while (a < A.length / 2) {
    while (a < A.length / 2 && !(A[2 * a] % 2)) {
      a++;
    }
    while (b < A.length / 2 && A[2 * b + 1] % 2) {
      b++;
    }
    if (a >= A.length / 2) break;
    [A[2 * a], A[2 * b + 1]] = [A[2 * b + 1], A[2 * a]];
  }

  return A;
};
const a = [1, 3, 2, 4];
console.log(sortArrayByParityII(a));
