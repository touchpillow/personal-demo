var longestSubsequence = function (arr, difference) {
  const l = arr.length;
  const map = new Map([[arr[0], 1]]);
  let max = 1;
  for (let i = 1; i < l; i++) {
    if (map.has(arr[i] - difference)) {
      map.set(
        arr[i],
        Math.max(map.get(arr[i]) || 0, map.get(arr[i] - difference) + 1)
      );
      max = Math.max(map.get(arr[i]), max);
    } else {
      map.set(arr[i], map.get(arr[i]) || 1);
    }
  }
  return max;
};
const arr = [7, -2, 8, 10, 6, 18, 9, -8, -5, 18, 13, -6, -17, -1, -6, -9, 9, 9],
  difference = 1;
console.log(longestSubsequence(arr, difference));
