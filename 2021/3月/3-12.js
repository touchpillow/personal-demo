// var isCompleteTree = function (root) {
//   let stack = [root];
//   let numbers = [0];
//   let c = 0;
//   while (stack.length) {
//     const temp = [];
//     const tempN = [];
//     const l = stack.length;
//     for (let i = 0; i < l; i++) {
//       if (i === 0) {
//         if (numbers[0] !== 0) return false;
//       } else if (i !== l - 1 && numbers[i] - numbers[i + 1] !== -1) {
//         return false;
//       }
//       const cur = stack[i];
//       const curN = numbers[i];
//       if (!cur) continue;
//       temp.push(cur.left);
//       tempN.push(curN * 2);
//       temp.push(cur.right);
//       tempN.push(curN * 2 + 1);
//     }
//     if (temp.length !== 2 * l) {
//       c++;
//     }
//     stack = temp;
//     numbers = tempN;
//     console.log(stack, numbers);
//   }
//   return c < 2;
// };
var maxWidthRamp = function (A) {
  A = A.map((i, index) => [i, index]);
  A.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let max = 0;
  let min = A[0][1];
  const l = A.length;
  for (let i = 1; i < l; i++) {
    max = Math.max(max, A[i][1] - min);
    min = Math.min(min, A[i][1]);
  }
  return max;
};
