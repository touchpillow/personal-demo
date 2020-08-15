// const pro1 = new Promise((res, rej) => {
//   throw new Error("fail");
// });
// const pro2 = new Promise((res, rej) => {
//   res("ok");
//   console.log("pro1");
// });
// pro1
//   .then((v) => {
//     console.log("then1");
//     return pro2;
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .then(
//     (v) => {
//       console.log("then3", 111);
//     },
//     (v) => {
//       console.log("then3", 222);
//     }
//   );
// Promise.reject()
//   .then((v) => {
//     console.log("reject1", 111);
//   })
//   .then((v) => {
//     console.log("reject1", 333);
//   });
// Promise.resolve()
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   })
//   .then(() => {
//     console.log(111);
//   });
// setTimeout(() => {
//   console.log(1);
// }, 0);
// var hasAlternatingBits = function (n) {
//   const s = n.toString(2);
//   for (let i = 0, l = s.length; i < l; i++) {
//     if (s[i] === s[i + 1]) return false;
//   }
//   return true;
// };
// var countBinarySubstrings = function (s) {
//   const l = s.length;
//   if (l < 2) return 0;
//   let count = 0;
//   let v = s[0];
//   let preL = 0;
//   let curL = 1;
//   for (let i = 1; i < l; i++) {
//     if (s[i] === v) {
//       curL++;
//     } else {
//       count += Math.min(curL, preL);
//       v = s[i];
//       preL = curL;
//       curL = 1;
//     }
//   }
//   count += Math.min(curL, preL);
//   return count;
// };
// var a = "001100";
// console.log(countBinarySubstrings(a));
// var connect = function (root) {
//   if (!root) return root;
//   const stack = [root];
//   let pre = null;
//   while (stack.length) {
//     const temp = [];
//     stack.reduce((res, item) => {
//       item.next = pre;
//       pre = item;
//       if (item.right) {
//         temp.push(item.right);
//       }
//       if (item.left) {
//         temp.push(item.left);
//       }
//       return res;
//     }, 0);
//     pre = null;
//     stack.splice(0, Infinity, ...temp);
//   }
//   return root;
// };
// var minimumTotal = function (triangle) {
//   const h = triangle.length;
//   if (!h) return 0;
//   const l = triangle[h - 1].length;
//   const res = new Array(l).fill(0);
//   for (const v of triangle) {
//     v.reduceRight((pre, item, index) => {
//       if (!index) {
//         res[index] = item + (res[index] || 0);
//       } else {
//         res[index] = item + Math.min(res[index] || 0, res[index - 1]);
//       }

//       return pre;
//     }, 0);
//     console.log(res);
//   }
//   return Math.min(...res);
// };
// var a = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// console.log(minimumTotal(a));
var minimumTotal = function (triangle) {
  const h = triangle.length;
  if (!h) return 0;
  triangle.reduceRight((pre, lineItem, linIndex) => {
    if (linIndex == h - 1) return pre;
    lineItem.reduceRight((pre, item, index) => {
      lineItem[index] =
        item +
        Math.min(
          triangle[linIndex + 1][index],
          triangle[linIndex + 1][index + 1]
        );
    }, 0);
    return pre;
  }, 0);
  return triangle[0][0];
};
var a = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(a));
