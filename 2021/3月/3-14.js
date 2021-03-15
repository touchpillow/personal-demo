// var numsSameConsecDiff = function (n, k) {
//   const res = [];
//   const dfs = (preN, s) => {
//     if (preN >= 10 || preN < 0) return;
//     if (s.length === n) {
//       res.push(Number(s));
//       return;
//     }
//     dfs(preN + k, `${s}${preN + k}`);
//     if (!k) return;
//     dfs(preN - k, `${s}${preN - k}`);
//   };
//   for (let i = 1; i <= 9; i++) {
//     dfs(i, `${i}`);
//   }
//   return res;
// };
// const n = 2,
//   k = 0;
// console.log(numsSameConsecDiff(n, k));
// var pancakeSort = function (arr) {
//   const res = [];
//   const dfs = (len) => {
//     if (len < 2) return;
//     let min = Infinity;
//     let index;
//     for (let i = 0; i < len; i++) {
//       if (arr[i] < min) {
//         index = i;
//         min = arr[i];
//       }
//     }
//     if (index === len - 1) {
//       dfs(len - 1);
//       return;
//     }

//     if (index === 0) {
//       res.push(len);
//       for (let i = 0; i < len / 2; i++) {
//         [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
//       }
//       dfs(len - 1);
//       return;
//     }
//     for (let i = 0; i <= index / 2; i++) {
//       [arr[i], arr[index - i]] = [arr[index - i], arr[i]];
//     }
//     for (let i = 0; i < len / 2; i++) {
//       [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
//     }
//     res.push(index + 1);
//     res.push(len);
//     dfs(len - 1);
//   };
//   dfs(arr.length);
//   res.push(arr.length);
//   return res;
// };
// const a = [2, 3, 1, 4];
// console.log(pancakeSort(a));
// function add(a) {
//   function sum(b) {
//     // 使用闭包
//     a = a + b; // 累加
//     return sum;
//   }
//   sum.toString = function () {
//     // 重写toString()方法
//     return a;
//   };
//   return sum; // 返回一个函数
// }

// console.log(add(1).toString()); // 1
// console.log(add(1)(2)); // 3
// console.log(add(1)(2)(3)); // 6
// console.log(add(1)(2)(3)(4)); // 10
// function add(...args) {
//   const fn = function (...fn_args) {
//     return add.apply(null, [...args, ...fn_args]);
//   };
//   fn.toString = function () {
//     return args.reduce((res, cur) => res + cur);
//   };
//   return fn;
// }

// console.log(add(1)); // 1
// +add(1, 2); // 3
// +add(1)(2)(3); // 6
function curry(fn) {
  let pre = 0;
  return function handle(...arg) {
    console.log(arg, pre);
    if (arg.length) {
      pre = fn(...[pre, ...arg]);
      return handle;
    } else {
      const res = pre;
      pre = 0;
      return res;
    }
  };
}

function add(...args) {
  return args.reduce((res, cur) => res + cur);
}

const addFn = curry(add);

console.log(addFn(1)()); // 1
console.log(addFn(1, 2)()); // 3
console.log(addFn(1)(2, 3)()); // 6
console.log(addFn(1)(2, 3)(4)()); // 10
var isSymmetric = function (root) {
  if (!root) return true;
  const compare = (left, right) => {
    if (!left && !right) return true;
    if (!left && right) return false;
    if (left && !right) return false;
    if (left.val !== right.val) return false;
    return compare(left.left, right.right) && compare(left.right, right.left);
  };
  return compare(root.left, root.right);
};
