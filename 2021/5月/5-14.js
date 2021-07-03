var insert = function (intervals, newInterval) {
  const stack = [];
  let curStart = newInterval[0],
    curEnd = newInterval[1];
  let flag = false;
  for (const [start, end] of intervals) {
    if (curStart >= start && curEnd <= end) {
      flag = true;
      stack.push([start, end]);
      continue;
    }
    if (
      (start <= curEnd && start >= curStart) ||
      (end <= curEnd && end >= curStart)
    ) {
      curStart = Math.min(curStart, start);
      curEnd = Math.max(curEnd, end);
    } else {
      if (end < curStart) {
        stack.push([start, end]);
      } else if (flag) {
        stack.push([start, end]);
      } else {
        flag = true;
        stack.push([curStart, curEnd]);
        stack.push([start, end]);
      }
    }
  }
  if (!flag) {
    stack.push([curStart, curEnd]);
  }
  return stack;
};
const intervals = [[1, 5]],
  newInterval = [2, 7];
console.log(insert(intervals, newInterval));
