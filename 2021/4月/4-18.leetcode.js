// var checkIfPangram = function (sentence) {
//   return new Set(sentence).size === 26;
// };
// var maxIceCream = function (costs, coins) {
//   costs.sort((a, b) => a - b);
//   let c = 0;
//   while (costs.length) {
//     if (costs[0] > coins) {
//       break;
//     } else {
//       c += 1;
//       coins -= costs.shift();
//     }
//   }
//   return c;
// };
const insert = (arr, v) => {
  const index = arr.findIndex((item) => {
    return item[1] > v[1] || (item[1] === v[1] && item[2] > v[2]);
  });
  if (index < 0) {
    arr.push(v);
  } else {
    arr.splice(index, 0, v);
  }
};
var getOrder = function (tasks) {
  const stack = [];
  const tasksIndex = tasks
    .map((item, index) => [item[0], item[1], index])
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[2] - b[2];
    });
  let cur = 0;
  const res = [];
  while (tasksIndex.length || stack.length) {
    if (!stack.length) {
      res.push(tasksIndex[0][2]);
      cur = Math.max(
        cur + tasksIndex[0][1],
        tasksIndex[0][0] + tasksIndex[0][1]
      );
      tasksIndex.shift();
    } else {
      res.push(stack[0][2]);
      cur = Math.max(cur + stack[0][1], stack[0][0] + stack[0][1]);
      stack.shift();
    }
    while (tasksIndex.length && tasksIndex[0][0] <= cur) {
      insert(stack, tasksIndex.shift());
      //   stack.push(tasksIndex.shift());
    }
    // stack.sort((a, b) => {
    //   if (a[1] !== b[1]) return a[1] - b[1];
    //   return a[2] - b[2];
    // });
  }
  return res;
};
const tasks = [
  [7, 10],
  [7, 12],
  [7, 5],
  [7, 4],
  [7, 2],
];
console.log(getOrder(tasks));
var getXORSum = function (arr1, arr2) {
  const l1 = arr1.length;
  const l2 = arr2.length;
  let v1 = 0;
  for (let i = 0; i < l1 - 1; i++) {
    for (let j = 0; j < l1; j++) {
      v1 = v1 ^ arr1[i] ^ arr[j];
    }
  }
  const v2 = arr2.reduce((pre, item) => pre ^ item, 0);
  if (l1 % 2 && l2 % 2) {
    return v1 ^ v2;
  } else if (l1 % 2) {
    return v2;
  } else if (l2 % 2) {
    return v1;
  } else {
    return 0;
  }
};
const arr1 = [1, 2, 3],
  arr2 = [6, 5];
console.log(getXORSum(arr1, arr2));
