// var arrayRankTransform = function (arr) {
//   const l = arr.length;
//   if (!l) return [];
//   const list = arr.slice().sort((a, b) => a - b);
//   let v = 0;
//   const map = new Map();
//   map.set(arr[0], 1);
//   for (let i = 1; i < l; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       v++;
//       map.set(arr[i], v);
//     }
//   }
//   return arr.map((i) => map.get(i));
// };
// var removePalindromeSub = function (s) {
//   const l = s.length;
//   if (!l) return 0;
//   let left = 0,
//     right = l - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) return 2;
//     left++;
//     right--;
//   }
//   return 1;
// };
// this.libList.forEach((item) => {
//   const Z = CnChar.spell(item.address).slice(0, 1);
//   firstName.push(Z);
//   if (addList[Z]) {
//     addList[Z].items.push(item.address);
//   } else {
//     addList[Z] = {
//       title: Z,
//       items: [item.address],
//     };
//   }
// });
const a = "sdcxerterxzchjui";
console.log(a.split("").sort());
