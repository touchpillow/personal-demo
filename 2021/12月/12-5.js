var getWinner = function (arr, k) {
  const l = arr.length;
  let c = 0;
  for (let left = 0; left < l; ) {
    let flag = false;
    for (let right = left + 1; right < l; right++) {
      if (arr[left] > arr[right]) {
        c++;
      } else {
        c = 1;
        left = right;
        flag = true;
        if (k === 1) return arr[left];
        break;
      }
      if (c === k) {
        return arr[left];
      }
    }
    if (!flag) return arr[left];
  }
};
const arr = [1, 25, 35, 42, 68, 70],
  k = 1;
console.log(getWinner(arr, k));
