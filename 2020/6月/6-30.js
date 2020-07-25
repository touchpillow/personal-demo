// var invertTree = function (root) {
//   while (root && (root.left || root.right)) {
//     let temp = root.left;
//     root.left = invertTree(root.right);
//     root.right = invertTree(temp);
//   }
//   return root;
// };
// var isStr = (s) => {
//   console.log(s);
//   while (s.length > 1) {
//     if (s[0] == s[s.length - 1]) {
//       s = s.substring(1, s.length - 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
// var longestPalindrome = function (s) {
//   let res = "";
//   let end = s.length;
//   for (let i = 0; i < end; i++) {
//     for (let j = end; j > res.length + i; j--) {
//       if (isStr(s.substring(i, j))) {
//         if (j - i > res.length) {
//           res = s.substring(i, j);
//         }
//       }
//     }
//   }
//   return res;
// };
// longestPalindrome("cbbd");
var longestPalindrome = function (s) {
  const l = s.length;
  if (l < 2) return s;
  const res = new Array(l);
  let v = s[0];
  for (let i = l - 1; i >= 0; i--) {
    res[i] = [];
    for (let j = i; j < l; j++) {
      if (j == i) {
        res[i][j] = true;
      } else if (j - 1 == i && s[i] == s[j]) {
        res[i][j] = true;
      } else if (s[i] == s[j] && res[i + 1][j - 1]) {
        res[i][j] = true;
      }
      console.log(res[i][j], i, j);
      if (res[i][j] && j - i + 1 > v.length) {
        v = s.slice(i, j + 1);
      }
    }
  }
  return v;
};
longestPalindrome("bb");
