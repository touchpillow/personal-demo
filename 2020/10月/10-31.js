// var reformatDate = function (date) {
//   const list = date.split(" ");
//   const month = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   let m = (month.findIndex((i) => i == list[1]) + 1).toString();
//   if (m.length < 2) {
//     m = `0${m}`;
//   }
//   let d = list[0].replace(/[a-z]/g, "");
//   if (d.length < 2) {
//     d = `0${d}`;
//   }
//   const y = list[2];
//   return [y, m, d].join("-");
// };
// const s = "20th Oct 2052";
// console.log(reformatDate(s));
// var numIdenticalPairs = function (nums) {
//   const res = 0;
//   const map = new Map();
//   for (const n of nums) {
//     if (map.get(n)) {
//       res += map.get(n);
//       map.set(n, map.get(n) + 1);
//     } else {
//       map.set(n, 1);
//     }
//   }
//   return res;
// };
// var combinationSum4 = function (nums, target) {
//   const map = new Map();
//   const search = (target) => {
//     if (map.has(target)) return map.get(target);
//     let v = 0;
//     for (const n of nums) {
//       if (n > target) {
//         continue;
//       } else if (n == target) {
//         v += 1;
//       } else {
//         v += search(target - n);
//       }
//     }
//     map.set(target, v);
//     return v;
//   };
//   return search(target);
// };
var combinationSum4 = function (nums, target) {
  const res = new Array(target + 1).fill(0);
  for (let i = 1; i <= target; i++) {
    for (const n of nums) {
      if (n == i) {
        res[i] += 1;
      } else if (n < i) {
        res[i] += res[i - n];
      }
    }
  }
  console.log(res);
  return res[target];
};
const nums = [1, 2, 3],
  target = 4;
console.log(combinationSum4(nums, target));
