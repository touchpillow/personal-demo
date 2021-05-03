// var getMinDistance = function (nums, target, start) {
//   const l = nums.length;
//   let min = l;

//   for (let i = 0; i < l; i++) {
//     if (nums[i] === target && Math.abs(i - start) < min) {
//       min = Math.abs(i - start);
//     }
//   }
//   return min;
// };
// const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   target = 1,
//   start = 0;
// console.log(getMinDistance(nums, target, start));
var splitString = function (s) {
  const l = s.length;
  let flag = false;
  const dfs = (index, pre = []) => {
    if (flag) return;
    if (index < 0 && pre.length > 1) {
      flag = true;
      return;
    }
    for (let i = index; i >= 0; i--) {
      const head = Number(s.slice(i, index + 1));
      if (pre.length && head !== pre[0] + 1) continue;
      const target = pre.slice();
      target.unshift(Number(s.slice(i, index + 1)));
      dfs(i - 1, target);
    }
  };
  dfs(l - 1);
  return flag;
};
// const s = "10009998";
// console.log(splitString(s));
function insert(arr, n) {
  if (!arr.length) {
    arr.push(n);
  } else {
    let left = 0;
    let right = arr.length - 1;
    if (arr[left] >= n) {
      arr.unshift(n);
      return;
    } else if (arr[right] <= n) {
      arr.push(n);
      return;
    }
    while (right >= left) {
      if (left === right) break;
      const mid = ~~((left + right) / 2);
      if (left === mid) break;
      if (arr[mid] === n) {
        right = mid;
        break;
      }
      if (arr[mid] > n) {
        right = mid;
      } else {
        left = mid;
      }
    }
    arr.splice(right, 0, n);
  }
}
function deleteItem(list, n) {
  const l = list.length;
  if (!l) return;
  let left = 0,
    right = l - 1;
  if (list[left] === n) {
    list.splice(left, 1);
    return;
  } else if (list[right] === n) {
    list.splice(right, 1);
    return;
  }
  while (right > left) {
    if (left >= right) break;
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    if (list[mid] === n) {
      left = mid;
      break;
    }
    if (list[mid] > n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  if (list[left] === n) {
    list.splice(left, 1);
  }
}
var minInterval = function (intervals, queries) {
  const lenList = [];
  const startValue = intervals.slice().sort((a, b) => {
    return a[0] - b[0];
  });
  const endValue = intervals.slice().sort((a, b) => {
    return a[1] - b[1];
  });
  const k = queries.length;
  queries = queries.map((a, i) => [a, i]);
  queries.sort((a, b) => a[0] - b[0]);
  const res = new Array(k);
  for (let i = 0; i < k; i++) {
    const [v, index] = queries[i];
    let prev = Infinity;
    if (i > 0) {
      prev = queries[i - 1][0];
    }
    while (startValue.length && startValue[0][0] <= v) {
      const item = startValue.shift();
      if (item[1] < v) continue;
      insert(lenList, item[1] - item[0] + 1);
    }
    while (endValue.length && endValue[0][1] <= v - 1) {
      const item = endValue.shift();
      if (item[0] > prev) continue;
      deleteItem(lenList, item[1] - item[0] + 1);
    }
    if (!lenList.length) {
      res[index] = -1;
    } else {
      res[index] = lenList[0];
    }
  }
  return res;
};
const intervals = [
    [2, 3],
    [2, 5],
    [1, 8],
    [20, 25],
  ],
  queries = [2, 19, 5, 22];
console.log(minInterval(intervals, queries));
