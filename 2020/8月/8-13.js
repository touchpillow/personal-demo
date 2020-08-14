// var calPoints = function (ops) {
//   const scores = [];
//   for (const s of ops) {
//     switch (s) {
//       case "+":
//         console.log(
//           (scores[scores.length - 1] || 0) + (scores[scores.length - 2] || 0)
//         );
//         scores.push(
//           scores[scores.length - 1] || 0 + scores[scores.length - 2] || 0
//         );
//         break;
//       case "D":
//         scores.push((scores[scores.length - 1] || 0) * 2);
//         break;
//       case "C":
//         scores.pop();
//         break;
//       default:
//         scores.push(+s);
//     }
//   }
//   console.log(scores);
//   return scores.reduce((res, i) => res + i, 0);
// };
// var a = ["5", "2", "C", "D", "+"];
// console.log(calPoints(a));
// var repeatedStringMatch = function (A, B) {
//   for (const s of B) {
//     if (!A.includes(s)) return -1;
//   }
//   while
//   return count;
// };
var pathSum = function (root, sum) {
  if (!root) return [];
  const stack = [
    {
      node: root,
      val: root.val,
    },
  ];
  const res = [];
  while (stack.length) {
    const item = stack.shift();
    const val = item.val.reduce((res, i) => res + i);
    if (!item.node.left && !item.node.right) {
      if (val === sum) {
        res.push(item.val);
      }
    } else {
      if (item.node.left) {
        const val = item.val.slice();
        val.push(item.node.left.val);
        stack.push({
          node: item.node.left,
          val,
        });
      }
      if (item.node.right) {
        const val = item.val.slice();
        val.push(item.node.right.val);
        stack.push({
          node: item.node.right,
          val,
        });
      }
    }
  }
  return res;
};
