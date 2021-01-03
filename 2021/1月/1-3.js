// var countSubstrings = function (s) {

// };
// var replaceWords = function (dictionary, sentence) {
//   dictionary.sort((a, b) => a.length - b.length);
//   sentence = sentence.split(" ");
//   return sentence.map((s) => {
//     for (const d of dictionary) {
//       if (s.startsWith(d)) {
//         return d;
//       }
//     }
//     return s;
//   });
// };
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  const l = s.length;

  const dp = new Array(l).fill(false);

  for (let j = 0; j < l; j++) {
    for (let i = 0; i <= j; i++) {
      if (i == j) {
        dp[i] = true;
        count++;
      } else if (j - i == 1 && s[i] == s[j]) {
        dp[i] = true;
        count++;
      } else if (j - i > 1 && s[i] == s[j] && dp[j - 1]) {
        dp[i] = true;
        count++;
      }
    }
  }
  return count;
};
