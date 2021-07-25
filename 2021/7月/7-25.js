// var removeZeroSumSublists = function (head) {
//   const list = [];
//   const pre = head;
//   while (head) {
//     list.push(head.val);
//     head = head.next;
//   }
//   const l = list.length;
//   //   const preSum = new Array(l);
//   //   preSum[0] = list[0];
//   //   for (let i = 1; i < l; i++) {
//   //     preSum[i] = preSum[i - 1] + list[i];
//   //   }
//   const dp = new Array(l).fill("").map(() => new Array(l).fill(0));
//   for (let i = 0; i < l; i++) {
//     dp[i][i] = list[i];
//     for (let j = i - 1; j >= 0; j--) {
//       dp[j][i] = list[j] + list[j + 1][i];
//     }
//   }
//   const path = [];
//   let left = 0;
//   while (left < l) {
//     let right = l - 1;
//     while (dp[left][right] !== 0) {
//       right--;
//     }
//     if (right < left) {
//       left++;
//       break;
//     }
//     path.push([left, right]);
//     left = right + 1;
//   }
//   const indexList = [];
//   const l1 = path.length;
//   for (let i = 1; i < l1; i++) {
//     for (let j = path[i - 1][1] + 1; j < path[i][0]; j++) {
//       indexList.push(j);
//     }
//   }

//   const res = { next: null };
//   let cur = res;
//   let index = 0;
//   while (indexList.length) {
//     while (index !== indexList[0]) {
//       pre = pre.next;
//       index++;
//     }
//     cur.next = pre;
//     pre = pre.next;
//     cur = cur.next;
//     cur.next = null;
//     indexList.shift();
//     index++;
//   }
//   return res.next;
// };
var removeZeroSumSublists = function (head) {
  const res = { next: null };
  let pre = head;
  let index = 0;
  let sum = 0;
  const stack = [];
  const map = new Map([0, -1]);
  while (head) {
    sum += head.val;
    if (map.has(sum)) {
      const last = map.get(sum);
      while (stack.length && stack[stack.length - 1] > last) {
        stack.pop();
      }
      sum -= head.val;
    }
    index++;
  }
};
