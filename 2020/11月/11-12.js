// var deleteNode = function (head, val) {
//   if (!head) return head;
//   if (head.val == val) return head.next;
//   const node = head;
//   while (node.next) {
//     if (node.next.val == val) {
//       node.next = node.next.next;
//       break;
//     } else {
//       node = node.next;
//     }
//   }
//   return head;
// };
// var exchange = function (nums) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left < right) {
//     while (nums[left] % 2 === 0 && left < right) {
//       left++;
//     }
//     while (nums[right] % 2 && left < right) {
//       right--;
//     }
//     console.log(left, right);
//     [nums[left], nums[right]] = [nums[right], nums[left]];
//   }
//   return nums;
// };
// console.log(exchange([1, 2, 3, 4]));
var findNthDigit = function (n) {
  if (n < 10) return n;
  let v = 1;
  let c = 0;
  while (c < n) {
    const temp = 9 * v * Math.pow(10, v - 1);
    if (c + temp >= n) {
      break;
    }
    c += temp;
    v++;
  }
  let temp = Math.ceil((n - c) / v);
  const index = ((n - c - 1) % v) + 1;
  const l = v;
  while (true) {
    if (index == 1) {
      return Math.ceil(temp / Math.pow(10, v - 1));
    }
    if (l - v + 1 == index) {
      return Math.floor((temp - 1) / Math.pow(10, v - 1));
    }
    temp %= Math.pow(10, v - 1);
    if (!temp) return 9;
    v--;
  }
  return temp - 1;
};
console.log(findNthDigit(29));
