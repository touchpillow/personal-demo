// var convertBST = function (root) {
//   if (!root) return root;
//   let current;
//   let sum = 0;
//   let currentVal = 0;
//   const search = (root) => {
//     if (root.right) {
//       search(root.right);
//     }

//     if (root.val !== current) {
//       sum = currentVal;
//       current = root.val;
//       root.val += sum;
//       sum = currentVal = root.val;
//     } else {
//       root.val += sum;
//       currentVal += root.val;
//     }
//     console.log(root.val);
//     if (root.left) {
//       search(root.left);
//     }
//   };
//   search(root);
//   return root;
// };
// const a = {
//   val: 5,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 13,
//     left: null,
//     right: null,
//   },
// };
// convertBST(a);
// var reverseStr = function (s, k) {
//   const l = s.length;
//   const res = "";
//   let i = 0;
//   while (i < l) {
//     const sk = s.slice(i, k);
//     const sk1 = s.slice(0, k);
//     const a = "";
//     for (const i of sk1) {
//       a = `${i}${a}`;
//     }
//     res += `${a}${sk}`;

//     i += 2 * k;
//   }
//   return res;
// };
var combine = function (n, k) {
  const l = n.length;
  const res = [];
  if (k > l) return res;
  if (k < 1) return res;
  const temp = new Array(k);
  for (let i = 0; i < k; i++) {
    temp[i] = i + 1;
  }
  res.push(temp);
  for (let i = k + 1; i <= n; i++) {
    const l = res.length;
    for (let j = 0; j < l; j++) {
      for (let m = 0; m < k; m++) {
        const arrTemp = res[j].slice(0);
        arrTemp[m] = i;
        res.push(arrTemp);
      }
    }
  }
  return res;
};
console.log(combine(4, 2));
