const insert = (item, list) => {
  const [start, end] = item;
  const l = list.length;
  if (!l) {
    list.push(item);
    return;
  }
  let left = 0;
  let right = l - 1;
  if (end > list[right][1]) {
    list.push(item);
    return;
  } else if (end < list[left][1]) {
    list.unshift(item);
    return;
  }
  while (true) {
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    if (list[mid][1] > end) {
      right = mid;
    } else {
      left = mid;
    }
  }
  list.splice(right, 0, item);
};
var maxEvents = function (events) {
  events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });
  const stack = [];
  let curTime = 0;
  let c = 0;
  while (true) {
    if (!stack.length && !events.length) break;
    while (events.length && events[0][0] <= curTime) {
      insert(events.shift(), stack);
    }
    if (stack.length && stack[0][1] >= curTime) {
      c++;
      curTime++;
      stack.shift();
    }
    // console.log(curTime, c, stack);
    while (stack.length && stack[0][1] < curTime) {
      stack.shift();
    }
    if (!stack.length && events.length) {
      curTime = events[0][0];
    }
  }
  return c;
};
const a = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 2],
];
console.log(maxEvents(a));
