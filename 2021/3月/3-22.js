function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  // const fun = function () {};

  // fun.prototype = Parent.prototype;
  const a = {};
  Object.setPrototypeOf(a, Parent.prototype);
  const obj = Parent.apply(a, arguments);
  console.log(obj);
  return obj instanceof Object ? obj : a;
  // return Parent.apply(this, arguments);
  // Child.prototype = Parent.prototype;
  // return Parent.apply(this, arguments);
}
Child.prototype.conctructor = Child;
const a = new Child("a", 123);
console.log(a);
console.log(a.getName());

// 1 -> 2 -> 3 -> 4
// var isValid = function (s) {
//   const stack = [];
//   for (const n of s) {
//     const l = stack.length;
//     if (n === "c" && stack[l - 1] === "b" && stack[l - 2] === "a") {
//       stack.pop();
//       stack.pop();
//     } else {
//       stack.push(n);
//     }
//   }
//   return !stack.length;
// };
var longestOnes = function (A, K) {
  const l = A.length;

  let left = 0;
  let right = 0;
  let max = 0;
  const sumLeft = new Array(l).fill(0);
  sumLeft[0] = A[0] === 1 ? 0 : 1;
  for (let i = 1; i < l; i++) {
    sumLeft[i] = (sumLeft[i - 1] || 0) + (A[i] === 1 ? 0 : 1);
  }
  while (right < l) {
    while (sumLeft[right] - (sumLeft[left - 1] || 0) > K && left < right) {
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  if (!K && max === 1) return 0;
  return max;
};
const A = [0, 0, 0, 0],
  K = 0;
// console.log(longestOnes(A, K));

const moveNumbers = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (right > left) {
    while (nums[left] >= 0) {
      left++;
    }
    while (nums[right] <= 0) {
      right--;
    }
    if (right <= left) break;
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
};
const nums = [6, 4, -3, 5, -2, -1, 0, 1, -9];
// console.log(moveNumbers(nums));
const codeKey = (obj) => {
  const res = {};
  const keys = Object.keys(obj);
  keys.forEach((item) => {
    const deepKeys = item.split(".");
    const lastKey = deepKeys.pop();
    let curObj = res;
    deepKeys.forEach((key) => {
      if (!curObj[key]) {
        curObj[key] = {};
      }
      curObj = curObj[key];
    });
    curObj[lastKey] = obj[item];
  });
  return res;
};
const obj = { A: 1, "B.A": 2, "B.B": 3, "CC.D.E": 4, "CC.DD.F": 5 };
// console.log(codeKey(obj));
