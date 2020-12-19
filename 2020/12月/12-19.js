// const isChild = (father, son) => {
//   if (father.includes(son)) return true;
//   let i = 0;
//   let j = 0;
//   while (i < father.length && j < son.length) {
//     if (father[i] === son[j]) {
//       i++;
//       j++;
//     } else {
//       i++;
//     }
//   }
//   return j === son.length;
// };
// var findLongestWord = function (s, d) {
//   d.sort((a, b) => {
//     if (a.length !== b.length) return b.length - a.length;
//     return a > b;
//   });
//   console.log(d);
//   return (
//     d.find((item) => {
//       return isChild(s, item);
//     }) || ""
//   );
// };
// const s = "abpcplea",
//   d = ["ale", "apple", "monkey", "plea"];
// console.log(findLongestWord(s, d));
// var findMaxLength = function (nums) {
//   const l = nums.length;
//   const left = new Array(l);
//   const right = new Array(l);
//   let v1 = 0,
//     v0 = 0;
//   for (let i = 0; i < l; i++) {
//     left[i] = [v0, v1];
//     if (nums[i] === 1) {
//       v1++;
//     } else {
//       v0++;
//     }
//   }
//   let c1 = 0,
//     c0 = 0;
//   for (let i = l - 1; i >= 0; i--) {
//     right[i] = [c0, c1];
//     if (nums[i] === 1) {
//       c1++;
//     } else {
//       c0++;
//     }
//   }
//   let length = 0;
//   for (let i = 0; i < l - 1; i++) {
//     if (l - i <= length) break;
//     for (let j = l - 1; j > i; j--) {
//       if (j - i + 1 <= length) break;
//       if (v1 - left[i][1] - right[j][1] === v0 - left[i][0] - right[j][0]) {
//         length = j - i + 1;
//       }
//     }
//   }
//   return length;
// };
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);
  const l = nums.length;
  let c = 0;
  let length = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] === 1) {
      c++;
    } else {
      c--;
    }
    if (map.has(c)) {
      length = Math.max(i - map.get(c));
    } else {
      map.set(c, i);
    }
  }
  return length;
};
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]));
