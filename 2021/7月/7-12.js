var minHeightShelves = function (books, shelf_width) {
  const l = books.length;
  const dp = new Array(l + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = books[0][1];
  for (let i = 2; i <= l; i++) {
    dp[i] = Math.min(dp[i], dp[i - 1] + books[i - 1][1]);
    let w = books[i - 1][0];
    let maxHeight = books[i - 1][1];
    for (let j = i - 1; j > 0; j--) {
      w += books[j - 1][0];
      if (w > shelf_width) break;
      maxHeight = Math.max(maxHeight, books[j - 1][1]);
      dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
    }
  }

  return dp[l];
};
const a = [
  [1, 1],
  [2, 3],
  [2, 3],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 2],
];
const b = 4;
console.log(minHeightShelves(a, b));
