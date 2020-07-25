// var fizzBuzz = function (n) {
//   const res = [];
//   for (let i = 1; i <= n; i++) {
//     if (!(i % 3)) {
//       if (!(i % 5)) {
//         res.push("FizzBuzz");
//       } else {
//         res.push("Fizz");
//       }
//     } else if (!(i % 5)) {
//       res.push("Buzz");
//     } else {
//       res.push(`${i}`);
//     }
//   }
//   return res;
// };
// var thirdMax = function (nums) {
//   let first = -Infinity;
//   let second = -Infinity;
//   let third = -Infinity;
//   for (const i of nums) {
//     if (i > first) {
//       third = second;
//       second = first;
//       first = i;
//     } else if (i > second) {
//       third = second;
//       second = i;
//     } else if (i > third) {
//       third = i;
//     }
//   }
//   return third === -Infinity ? max : third;
// };
// var myPow = function (x, n) {
//   if (n == 0) return 1;
//   if (n < 0) return 1 / myPow(x, n);
//   if (n % 2) return x * myPow(x, n - 1);
//   return myPow(x * x, n / 2);
// };
var spiralOrder = function (matrix) {
  const res = [];
  const m = matrix.length;
  const n = matrix[0].length;
  if (!m) return res;
  let horiFlag = true;
  let verFlag = true;
  let count = 0;
  let i = 0;
  let j = 0;
  let d = 0;
  let a = 0;
  while (count < m * n) {
    count++;
    console.log(i, j);
    res.push(matrix[i][j]);
    if (verFlag && horiFlag) {
      if (j == n - 1 - i) {
        verFlag = false;
        a++;
        i++;
      } else {
        j++;
      }
    } else if (horiFlag && !verFlag) {
      if (i == m - a) {
        horiFlag = false;
        j--;
      } else {
        i++;
      }
    } else if (!verFlag && !horiFlag) {
      if (j == d) {
        verFlag = true;
        i--;
      } else {
        j--;
      }
    } else {
      if (i == a) {
        horiFlag = true;
        d++;
        j++;
      } else {
        i--;
      }
    }
  }
  return res;
};
const a = [[3], [2]];
console.log(spiralOrder(a));
