// var maximumTime = function (time) {
//   let res = "";
//   if (time[1] === "?") {
//     if (time[0] === "?") {
//       res = "23:";
//     } else if (["0", "1"].includes(time[0])) {
//       res = `${time[0]}9:`;
//     } else {
//       res = `${time[0]}3:`;
//     }
//   } else {
//     if (time[0] === "?") {
//       if (["0", "1", "2", "3"].includes(time[1])) {
//         res = `2${time[1]}:`;
//       } else {
//         res = `1${time[1]}:`;
//       }
//     } else {
//       res = `${time[0]}${time[1]}:`;
//     }
//   }

//   if (time[3] === "?") {
//     res += "5";
//   } else {
//     res += time[3];
//   }
//   if (time[4] === "?") {
//     res += "9";
//   } else {
//     res += time[4];
//   }
//   return res;
// };
// console.log(maximumTime("1?:22"));
var minCharacters = function (a, b) {
  const l1 = a.length;
  const l2 = b.length;
  const list1 = new Array(26).fill(0);
  const list2 = new Array(26).fill(0);
  for (const s of a) {
    list1[s.charCodeAt() - 97]++;
  }
  for (const s of b) {
    list2[s.charCodeAt() - 97]++;
  }
  const maxL = Math.max(...list1.map((item, index) => item + list2[index]));
  const num1 = l1 + l2 - maxL;
  let num2 = Infinity;
  let num3 = Infinity;
  let lefta = 0;
  let leftb = 0;
  for (let i = 0; i <= 25; i++) {
    lefta += list1[i];
    leftb += list2[i];
    num2 = Math.min(num2, l1 - lefta + leftb);
    num3 = Math.min(num3, l2 - leftb + lefta);
  }
  return Math.min(num1, num2, num3);
};
const a = "aaaaaaaa",
  b = "aaaaaaaaaaaaaaaaaaa";
// console.log(minCharacters(a, b));
var kthLargestValue = function (matrix, k) {
  const h = matrix.length;
  const w = matrix[0].length;
  const dp = new Array(h + 1).fill("").map(() => new Array(w + 1).fill(0));
  const res = [];
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      dp[i][j] = dp[i][j - 1] ^ matrix[i - 1][j - 1];
    }
  }
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      dp[i][j] = dp[i][j] ^ dp[i - 1][j];
      res.push(dp[i][j]);
    }
  }

  res.sort((a, b) => b - a);
  return res[k - 1];
};
const matrix = [
    [5, 2],
    [1, 6],
  ],
  k = 3;
console.log(kthLargestValue(matrix, k));
