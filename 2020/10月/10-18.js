// var smallerNumbersThanCurrent = function (nums) {
//   const l = nums.length;
//   const list = nums.slice().sort((a, b) => a - b);
//   const map = new Map();
//   map.set(list[0], 0);
//   for (let i = 1; i < l; i++) {
//     while (list[i] == list[i - 1] && i < l) {
//       i++;
//     }
//     map.set(list[i], i);
//   }
//   return nums.map((i) => map.get(i));
// };
// var maxLengthBetweenEqualCharacters = function (s) {
//   const l = s.length;
//   if (l < 2) return 0;
//   const map = new Map();
//   let max = -1;
//   for (let i = 0; i < l; i++) {
//     if (map.has(s[i])) {
//       max = Math.max(max, i - map.get(s[i]) - 1);
//     } else {
//       map.set(s[i], i);
//     }
//   }
//   return max;
// };
// const s = "cabbac";
// console.log(maxLengthBetweenEqualCharacters(s));
// var bestTeamScore = function (scores, ages) {
//   let l = scores.length;
//   const a = ages.map((item, index) => `${scores[index]}-${item}`);
//   const map = new Map();
//   a.forEach((item, index) => {
//     if (index !== a.indexOf(item)) {
//       map.set(index, a.indexOf(item));
//     }
//   });
//   for (const key of map.keys()) {
//     ages[map.get(key)] += ages[key];
//   }
//   scores = scores.filter((item, index) => {
//     return !map.has(index);
//   });
//   ages = ages.filter((item, index) => {
//     return !map.has(index);
//   });
//   l = scores.length;
//   console.log(scores, ages);
//   const list = ages
//     .map((item, index) => {
//       return [item, scores[index]];
//     })
//     .sort((a, b) => a[0] - b[0]);
//   let res = [];
//   for (let i = l - 1; i >= 0; i--) {
//     if (!res.length) {
//       res.push(i);
//     } else {
//       const ageMax = list[i][1];
//       const agelist = [];
//       for (let l1 = res.length, j = 0; j < l1; j++) {
//         if (list[res[j]][0] > list[i][0] && list[res[j]][1] < list[i][1]) {
//           agelist.push(j);
//         }
//       }

//       const sum = agelist.reduce((a, item) => {
//         a += list[res[item]][1];
//         return a;
//       }, 0);
//       if (ageMax >= sum) {
//         res = res.filter((item, index) => !agelist.includes(index));
//         res.push(i);
//       }
//     }
//   }
//   console.log(list);
//   console.log(res);
//   return res.reduce((a, b) => {
//     a += list[b][1];
//     return a;
//   }, 0);
// };
// const scores = [6, 5, 1, 7, 6, 5, 5, 4, 10, 4],
//   ages = [3, 2, 5, 3, 2, 1, 4, 4, 5, 1];
// console.log(bestTeamScore(scores, ages));
// var sortString = function (s) {
//   const list = s.split("").sort();
//   let res = "";
//   let v = "";
//   let i = 0;
//   while (list.length) {
//     v = "";
//     while (i < list.length) {
//       if (list[i] !== v) {
//         res += list[i];
//         v = list[i];
//         list.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     v = "";
//     i = list.length - 1;
//     while (i >= 0 && list.length) {
//       if (list[i] !== v) {
//         res += list[i];
//         v = list[i];
//         list.splice(i, 1);
//       }
//       i--;
//     }
//   }
//   return res;
// };
var increasingTriplet = function (nums) {
  const l = nums.length;
  let small = nums[0];
  let mid = Infinity;
  for (let i = 1; i < l; i++) {
    if (nums[i] <= small) {
      small = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
