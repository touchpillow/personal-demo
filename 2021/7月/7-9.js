// var sampleStats = function (count) {
//   let min, max;
//   const sum = count.reduce((pre, item) => pre + item, 0);
//   let c = 0;
//   const flag = !(sum % 2);
//   let s = 0;
//   let middle,
//     maxCount = 0,
//     maxNum;
//   for (let i = 0; i < 256; i++) {
//     c += count[i];
//     if (min === undefined && count[i]) {
//       min = i;
//     }
//     if (count[i]) {
//       max = i;
//     }
//     if (count[i] > maxCount) {
//       maxCount = count[i];
//       maxNum = i;
//     }
//     s += i * count[i];
//     if (flag) {
//       if (c === sum / 2) {
//         let next = i + 1;
//         while (!count[next]) {
//           next++;
//         }
//         middle = (i + next) / 2;
//         i = next - 1;
//       } else if (middle === undefined && c > sum / 2) {
//         middle = i;
//       }
//     } else {
//       if (middle === undefined && c > sum / 2 && count[i]) {
//         middle = i;
//       }
//     }
//   }
//   return [min, max, s / sum, middle, maxNum];
// };
// const a = [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ];
// console.log(sampleStats(a));
const arr1 = [
    { id: 1, a: "", b: "" },
    { id: 2, c: "", d: "" },
  ],
  arr2 = [{ id: 1, e: "", f: "" }];

const arr3 = [
  { id: 1, a: "", b: "", e: "", f: "" },
  { id: 2, c: "", d: "" },
];

function recordItem(list, key, map) {
  for (const item of list) {
    map.set(item[key], (map.get(item[key]) || []).concat(item));
  }
}
function mergeObj(key, ...arg) {
  const map = new Map();
  const res = [];
  arg.forEach((list) => {
    recordItem(list, key, map);
  });
  for (const item of map.values()) {
    res.push(item.reduce((pre, obj) => ({ ...pre, ...obj })));
  }
  return res;
}
console.log(mergeObj("id", arr1, arr2));
