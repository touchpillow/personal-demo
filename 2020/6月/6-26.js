// var isHappy = function (n) {
//   if (n == 1) return true;
//   const set = new Set();
//   let k;
//   while (!set.has(n)) {
//     let sum = 0;
//     k = n;
//     while (n) {
//       let value = n % 10;
//       sum += value * value;
//       n = (n / 10) | 0;
//     }
//     if (sum == 1) return true;
//     set.add(k);
//     n = sum;
//   }

//   return false;
// };
// console.log(isHappy(19));
// var removeElements = function (head, val) {
//   while (head && head.val == val) {
//     head = head.next;
//   }
//   let node = head;
//   while (node && node.next) {
//     if (node.next.val === val) {
//       node.next = node.next.next;
//     } else {
//       node = node.next;
//     }
//   }
//   return node;
// };
const isZhi = (a) => {
  if (!(a % 2)) return false;
  const m = a / 2;
  for (let i = 3; i < m; i += 2) {
    if (!(a % i)) return false;
  }
  return true;
};
var countPrimes = function (n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  let res = 1;
  for (let i = 3; i <= n; i++) {
    if (isZhi(i)) res++;
  }
  return res;
};
