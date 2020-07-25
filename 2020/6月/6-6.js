// var twoSum = function (nums, target) {
//     for (let i = nums.length - 1; i; i--) {
//         const v = nums[i];
//         if (m[target - v] !== void 0) {
//             return [i, m[target - v]]
//         }
//         m[v] = i

//     }
// };
// var twoSum = function (nums, target) {
//     const m = {};
//     for (let i = nums.length - 1; i >= 0; i--) {
//         const v = nums[i];
//         if (m[target - v] !== void 0) {
//             return [i, m[target - v]]
//         }
//         m[v] = i

//     }
// };
// var twoSum = function (nums, target) {
//   const m = {};
//   const l = nums.length;
//   const s = Math.ceil(l / 2);
//   for (let i = s - 1; i >= 0; i--) {
//     const j = l - 1 - i;
//     const v = nums[i];
//     const v2 = nums[j];
//     if (v + v2 === target && j !== i) {
//       return [j, i];
//     }
//     if (m[target - v] !== void 0) {
//       console.log(v, v2);
//       return [i, m[target - v]];
//     } else if (m[target - v2] !== void 0) {
//       return [j, m[target - v2]];
//     }
//     m[v] = i;
//     m[v2] = j;
//   }
// };
// const res = twoSum([1, 3, 4, 2], 6);
// console.log(res);
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const d = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const c = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const res = 0;
  s.replace(/IV|IX|XL|XC|CD|CM/g, (a) => {
    res += d[a];
    return "";
  }).replace(/I|V|X|L|C|D|M/g, (a) => {
    res += c[a];
    return "";
  });
  return res;
};
// romanToInt("III");
const a = (s) => {
  s.replace(/sd|s/g, (a) => {
    console.log(a);
    return "";
  });
};
a("sd");
const a = (a) => {
  switch (s[a]) {
    case "M":
      return 1000;
    case "D":
      return 500;
    case "C":
      return 100;
    case "L":
      return 50;
    case "X":
      return 10;
    case "V":
      return 5;
    case "I":
      return 1;
  }
};
