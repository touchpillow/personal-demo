// var repeatedSubstringPattern = function (s) {
//   const l = s.length;
//   if (l < 2) return false;
//   for (let i = 1; i <= l / 2; i++) {
//     if (!(l % i) && s.slice(0, i).repeat(l / i) === s) return true;
//   }
//   return false;
// };
// var hammingDistance = function (x, y) {
//   const s1 = s.toString(2).padstart(32, "0");
//   const s2 = y.toString(2).padstart(32, "0");
//   let res = 0;
//   for (let i = 0; i <= 32; i++) {
//     if (s1[i] !== s2[i]) res++;
//   }
//   return res;
// };
// var islandPerimeter = function (grid) {
//   const length = grid.length;
//   if (!length) return 0;
//   let res = 0;
//   let a = 0;
//   const height = grid[0].length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < height; j++) {
//       if (grid[i][j] === 1) {
//         res++;
//         if (grid[i - 1] && grid[i - 1][j] === 1) {
//           a++;
//         }
//         if (grid[i][j - 1] === 1) {
//           a++;
//         }
//         if (grid[i][j + 1] === 1) {
//           a++;
//         }
//         if (grid[i + 1] && grid[i + 1][j] === 1) {
//           a++;
//         }
//       }
//     }
//   }
//   return 4 * res - a;
// };
var getPermutation = function (n, k) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i + 1);
  }
  let aaa = [];
  let res = 1;
  let i = 1;
  let num = 0;
  while (true) {
    res *= i;
    if (res > k) {
      num = i - 1;
      res /= i;
      break;
    } else if (res == k) {
      num = i - 1;
      break;
    }
    i++;
  }
  for (let j = 0; j < n - 1 - num; j++) {
    aaa.push(result[j]);
    result[j] *= -1;
  }
  console.log(aaa);
  while (k >= 0 && num >= 0) {
    let x = Math.floor(k / res);
    k -= x * (res / (num - 1));
    console.log(x, k, aaa, res, num);
    for (let i = 0; i < n; i++) {
      if (result[i] > 0) {
        if (x <= 1) {
          aaa.push(result[i]);
          result[i] *= -1;
          break;
        }
        x--;
      }
    }
    num--;
    res /= num;
  }
  return aaa.join("");
};
console.log(getPermutation(4, 6));
