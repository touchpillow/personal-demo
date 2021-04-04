// var maxSatisfied = function (customers, grumpy, X) {
//   let c = 0;
//   let l = customers.length;
//   for (let i = 0; i < l; i++) {
//     if (!grumpy[i]) {
//       c += customers[i];
//     }
//   }

//   let cur = 0;
//   for (let i = 0; i < X; i++) {
//     if (grumpy[i]) {
//       cur += customers[i];
//     }
//   }
//   let max = cur;
//   for (let i = X; i < l; i++) {
//     if (grumpy[i - X]) {
//       cur -= customers[i - X];
//     }
//     if (grumpy[i]) {
//       cur += customers[i];
//     }
//     max = Math.max(max, cur);
//   }
//   return c + max;
// };
var prevPermOpt1 = function (arr) {
  const l = arr.length;
  if (l < 2) return arr;
  let right = l - 2;
  while (right >= 0 && arr[right] <= arr[right + 1]) {
    right--;
  }
  if (right < 0) return arr;
  let maxIndex = right + 1;
  let max = arr[maxIndex];
  for (let i = maxIndex; i < l; i++) {
    if (arr[i] > max && arr[i] < arr[right]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  [arr[maxIndex], arr[right]] = [arr[right], arr[maxIndex]];
  return arr;
};
