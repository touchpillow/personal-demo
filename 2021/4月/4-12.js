var minDistance = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const dp1 = new Array(l1 + 1).fill(0);
  const dp2 = new Array(l1 + 1).fill(0);
  for (let i = 0; i <= l1; i++) {
    dp1[i] = i;
  }
  for (let j = 1; j <= l2; j++) {
    dp2[0] = j;
    for (let i = 1; i <= l1; i++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp2[i] = dp1[i - 1];
      } else {
        dp2[i] = Math.min(dp1[i - 1], dp2[i - 1], dp1[i]) + 1;
      }
    }
    for (let i = 0; i <= l1; i++) {
      dp1[i] = dp2[i];
      dp2[i] = 0;
    }
  }

  return dp1[l1];
};
const word1 = "intention",
  word2 = "execution";
console.log(minDistance(word1, word2));
