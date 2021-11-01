var maxScore = function (cardPoints, k) {
  const l = cardPoints.length;
  let right = 0;
  for (let i = 0; i < k; i++) {
    right += cardPoints[l - 1 - i];
  }
  let max = right;
  let left = 0;
  console.log(right);
  for (let i = 1; i <= k; i++) {
    left += cardPoints[i - 1];
    right -= cardPoints[l - 1 + i - k];
    max = Math.max(max, left + right);
  }
  return max;
};
const cardPoints = [100, 40, 17, 9, 73, 75];
const k = 3;
console.log(maxScore(cardPoints, k));
