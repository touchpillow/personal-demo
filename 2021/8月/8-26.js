var findBestValue = function (arr, target) {
  const map = new Map();
  let max = 0;
  for (const n of arr) {
    max = Math.max(max, n);
    map.set(n, (map.get(n) || 0) + 1);
  }
  const l = arr.length;
  const entries = [...map.entries()].sort((a, b) => a[0] - b[0]);
  let cur = target;
  let curV = 0;

  let num = 0;
  let preSum = 0;
  let start = 0;
  for (let i = 1; i <= max; i++) {
    if (entries[start][0] === i) {
      const [n, c] = entries[start];
      num += c;
      preSum += c * i;
      start++;
    }
    if (Math.abs(preSum + (l - num) * i - target) < cur) {
      cur = Math.abs(preSum + (l - num) * i - target);
      curV = i;
    }
  }
  return curV;
};

const splitList = (arr) => {
  const l = arr.length;
  const res = [];
  const l1 = Math.ceil(l / 3);
  const l2 = Math.ceil((l - l1) / 2);
  res[0] = arr.slice(0, l1);
  res[1] = arr.slice(l1, l1 + l2);
  res[2] = arr.slice(l1 + l2);
  return res;
};

const splitList = (arr) => {
  const res = [[], [], []];
  let i = 0;
  while (arr.length) {
    res[i % 3].push(arr.shift());
    i++;
  }
  return res;
};
const splitList = (arr) => {
  const l = arr.length;
  const res = [[], [], []];
  for (let i = 0; i < l; i++) {
    res[i % 3].push(arr[i]);
  }
  return res;
};
const splitList = (arr, n = 3) => {
  return arr.reduce(
    (res, item, index) => {
      res[index % n].push(item);
      return res;
    },
    new Array(n).fill("").map(() => [])
  );
};
