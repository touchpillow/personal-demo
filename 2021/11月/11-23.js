const findIndex = (list, v) => {
  if (!list.length) return -1;
  let left = 0,
    right = list.length - 1;
  if (list[right] > v) return -1;
  while (true) {
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    if (list[mid] > v) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (v === 6) {
    console.log(list);
  }
  return right;
};
var avoidFlood = function (rains) {
  const l = rains.length;
  const res = new Array(l).fill(1);
  const map = new Map();
  const stack = [];
  for (let i = l - 1; i >= 0; i--) {
    const v = rains[i];
    if (!v) {
      if (!map.size) {
        res[i] = 1;
      } else {
        stack.push(i);
      }
    } else {
      if (!map.has(v)) {
        map.set(v, i);
        res[i] = -1;
      } else {
        const pre = map.get(v);
        const target = findIndex(stack, pre);
        if (target < 0) return [];
        const value = stack.splice(target, 1)[0];
        if (v === 2) {
          console.log(i, stack, pre, target, value);
        }
        res[value] = v;
        res[i] = -1;
        map.set(v, i);
      }
    }
  }
  return res;
};
const a = [1, 0, 2, 0, 3, 0, 2, 0, 0, 0, 1, 2, 3];
console.log(avoidFlood(a));
