// function getDomByArr(arr = [1, 2, 2, 3, 2, 1]) {
//   let deep = [];
//   let prefixArr = [];
//   let suffixStack = [];
//   let tempSuffixStack = [];
//   //   每次迭代的时候，都要更新一下闭合这个数字之前的ul和li
//   //   这个数字本身的闭合，留给下一个数字
//   function pushLiDom(deep) {
//     prefixArr.push(`<li deep="${deep}">`);
//     tempSuffixStack.push("</li>");
//   }
//   function pushUlDom() {
//     prefixArr.push(`<ul>`);
//     tempSuffixStack.push("</ul>");
//   }
//   // 没有考虑0
//   arr.reduce((pre, item) => {
//     // 上一次处理的加入深度列表
//     deep.push(pre);
//     if (item < pre) {
//       prefixArr = prefixArr.concat(tempSuffixStack.pop());
//       deep.pop();
//       while (item < deep[deep.length - 1]) {
//         prefixArr = prefixArr.concat(suffixStack.pop().reverse());
//         deep.pop();
//       }
//       if (item == deep[deep.length - 1]) {
//         deep.pop();
//         prefixArr = prefixArr.concat(suffixStack.pop().reverse());
//         tempSuffixStack = [];
//         pushLiDom(item);
//       } else if (item > deep[deep.length - 1]) {
//         for (var i = 0; i < item - deep[deep.length - 1]; i++) {
//           prefixArr = prefixArr.concat(suffixStack.pop().reverse());
//         }
//         tempSuffixStack = [];
//         pushLiDom(item);
//       }
//     } else if (item == pre) {
//       // 相等时出栈
//       deep.pop();
//       prefixArr = prefixArr.concat(tempSuffixStack.pop());
//       tempSuffixStack = [];
//       pushLiDom(item);
//     } else {
//       // 3 -> 5 填充空的ul的标签
//       for (var i = 0; i < item - pre; i++) {
//         pushUlDom();
//         suffixStack.push(tempSuffixStack);
//         tempSuffixStack = [];
//       }
//       // 加入当前li标签
//       pushLiDom(item);
//     }
//     return item;
//   }, 0);
//   console.log(suffixStack);
//   let dom = prefixArr
//     .concat(tempSuffixStack.pop(), suffixStack.flat().reverse())
//     .join("\r\n");
//   console.log(dom);
// }
// getDomByArr([3, 2, 1, 3, 5, 4, 2, 1, 3]);
var longestCommonPrefix = function (strs) {};
