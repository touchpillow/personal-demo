// var countStudents = function (students, sandwiches) {
//   let v0 = 0,
//     v1 = 0;
//   for (const s of students) {
//     if (s === 0) {
//       v0++;
//     } else {
//       v1++;
//     }
//   }
//   const l = sandwiches.length;
//   for (let i = 0; i < l; i++) {
//     if (sandwiches[i] === 0) {
//       v0--;
//     } else {
//       v1--;
//     }
//     if (v0 < 0 || v1 < 0) {
//       return l - i;
//     }
//   }
//   return 0;
// };
// const students = [1, 1, 1, 0, 0, 1],
//   sandwiches = [1, 0, 0, 0, 1, 1];
// console.log(countStudents(students, sandwiches));
// var averageWaitingTime = function (customers) {
//   const l = customers.length;
//   let sum = 0;
//   let pre = 0;
//   for (const [arr, time] of customers) {
//     if (arr >= pre) {
//       sum += time;
//       pre = arr + time;
//     } else {
//       pre += time;
//       sum += pre - arr;
//     }
//   }
//   return sum / l;
// };
// const customers = [
//   [5, 2],
//   [5, 4],
//   [10, 3],
//   [20, 1],
// ];
// console.log(averageWaitingTime(customers));
// var maximumBinaryString = function (binary) {
//   let v0 = 0,
//     v1 = 0;
//   let start = -1;
//   for (const s of binary) {
//     if (s === "0") {
//       v0++;
//       start = start < 0 ? v1 : start;
//     } else {
//       v1++;
//     }
//   }
//   if (v0 < 2) return binary;
//   return `${"1".repeat(v0 - 1 + start)}0${"1".repeat(v1 - start)}`;
// };
// const binary = "101010111011001101000110010001100001111";
// console.log(maximumBinaryString(binary));
// console.log("111111111111111111101111111111111111111");
var minMoves = function (nums, k) {
  if (k < 2) return 0;
  const l = nums.length;
  let left = 0,
    right = 0;
  while (nums[left] !== 1) {
    left++;
  }
  let c = 1;
  let res = Infinity;
  const stack = [];
  while (right < l) {
    while (nums[left] !== 1) {
      stack.shift();
      left++;
    }
    right = Math.max(left, right);
    while (c < k && right < l) {
      right++;
      if (nums[right] === 1) {
        c++;
      } else {
        stack.push(right);
      }
    }
    if (c < k) break;
    let vl = left,
      vr = right;
    let temp = 0;
    const list = stack.slice();
    while (list.length) {
      if (list[0] - vl <= vr - list[list.length - 1]) {
        temp += list[0] - vl;
        vl++;
        list.shift();
      } else {
        temp += vr - list[list.length - 1];
        vr--;
        list.pop();
      }
      if (temp >= res) break;
    }
    res = Math.min(res, temp);
    left++;
    c--;
  }
  return res;
};
const nums = [1, 0, 0, 0, 0, 0, 1, 1],
  k = 3;
console.log(minMoves(nums, k));
