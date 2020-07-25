// var addDigits = function (num) {
//   while (num >= 10) {
//     const s = `${num}`;
//     num = 0;
//     for (const i of s) {
//       num += +i;
//     }
//   }
//   return num;
// };
// var addDigits = function (num) {
//   while (num > 9) {
//     num %= 9;
//   }
//   return num || 9;
// };
// var isUgly = function (num) {
//   if (!num) return false;
//   const a = [2, 3, 5];
//   let count = 0;
//   do {
//     count = 0;
//     a.forEach((i) => {
//       if (!(num % i)) {
//         num /= i;
//         count++;
//       }
//     });
//   } while (count && num !== 1);
//   return num == 1;
// };
// const a = [2, 3, 5];
// var isUgly = function (num) {
//   if (!num) return false;
//   let count = 0;
//   a.forEach((i) => {
//     if (!(num % i)) {
//       num /= i;
//       count++;
//     }
//   });
//   if (num == 1) return true;
//   if (!count) return false;
//   return isUgly(num);
// };\
// var generateParenthesisA = (left, right, pre, res) => {
//   if (!pre) {
//     generateParenthesisA(--left, right, "(", res);
//   } else if (left == right) {
//     generateParenthesisA(--left, right, `${pre}(`, res);
//   } else if (!left && right == 1) {
//     res.push(`${pre})`);
//   } else if (!left) {
//     generateParenthesisA(left, --right, `${pre})`, res);
//   } else {
//     generateParenthesisA(--left, right, `${pre}(`, res);
//     generateParenthesisA(++left, --right, `${pre})`, res);
//   }
// };
// var generateParenthesis = function (n) {
//   if (!n) return [];
//   return generateParenthesisA(n, n, "", []);
// };

// console.log(generateParenthesis(3));
// const a = (...c) => {
//   console.log(c);
// };
// a(1);
const deepMergeItem = (target = {}, source, keys = {}) => {
  Object.keys(source).forEach((item) => {
    if (keys[item] && keys[item].flag) return;
    if (keys[item] === undefined) {
      keys[item] = {
        flag: false,
        keys: {},
      };
    }
    if (typeof source[item] == "object") {
      target[item] = deepMergeItem(target[item], source[item], keys[item].keys);
    } else {
      target[item] = source[item];
      keys[item].flag = true;
    }
  });
  return target;
};
const deepMerge = (object = {}, ...sources) => {
  const keys = {};
  const l = sources.length;
  for (let i = l - 1; i >= 0; i--) {
    deepMergeItem(object, sources[i], keys);
  }
  console.log(keys);
  return object;
};
const a = { a: 1, b: 2, c: 3, d: { a: 1 } };
const b = {
  a: {
    a: 1,
    b: 2,
  },
  c: 2,
  d: {
    a: 3,
    b: { a: 1 },
  },
};
const c = {
  a: 1,
  d: {
    a: {
      c: 1,
    },
  },
};
console.log(deepMerge(a, b, c));
