// var areAlmostEqual = function (s1, s2) {
//   const l1 = s1.length;
//   let c = 0;
//   const map1 = new Map();
//   const map2 = new Map();
//   for (let i = 0; i < l1; i++) {
//     if (s1[i] !== s2[i]) c++;
//     map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
//     map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
//   }

//   for (const key of map1.keys()) {
//     if (map1.get(key) !== map2.get(key)) return false;
//   }
//   return c <= 2;
// };
// var findCenter = function (edges) {
//   const map = new Map();
//   for (const [x, y] of edges) {
//     map.set(x, (map.get(x) || 0) + 1);
//     map.set(y, (map.get(y) || 0) + 1);
//   }
//   let max = 0;
//   let n;
//   for (const [key, v] of map.entries()) {
//     if (v > max) {
//       n = key;
//       max = v;
//     }
//   }
//   return n;
// };

var maxAverageRatio = function (classes, extraStudents) {
  classes.sort(([x, y], [m, n]) => {
    const v1 = (y - x) / (y * (y + 1));
    const v2 = (n - m) / (n * (n + 1));
    return v2 - v1;
  });
  const l = classes.length;
  const total = classes.map((item) => item[1]);
  const dis = classes.map((item) => item[1] - item[0]);
  const indexs = classes.map((i, index) => index);
  const calc = (i) => {
    return dis[i] / (total[i] * (total[i] + 1));
  };
  while (extraStudents--) {
    total[indexs[0]]++;
    console.log(indexs[0]);
    let i = 0;

    while (i < l - 1 && calc(indexs[i]) < calc(indexs[i + 1])) {
      [indexs[i], indexs[i + 1]] = [indexs[i + 1], indexs[i]];
      i++;
    }
  }
  const sum = indexs.reduce((sum, item) => {
    return sum + (total[item] - dis[item]) / total[item];
  }, 0);
  return sum / l;
};
const a = [
  [2, 4],
  [2, 10],
  [3, 9],
  [4, 5],
];
const b = 4;
console.log(maxAverageRatio(a, b));
// var maximumScore = function (nums, k) {
//   const l = nums.length;
//   let min = nums[k];
//   let max = nums[k];
//   let left = k;
//   let right = k;
//   while (left >= 0 && right < l) {
//     while (nums[left - 1] >= min && left > 0) {
//       left--;
//     }
//     while (nums[right + 1] >= min && right > l - 1) {
//       right++;
//     }
//     max = Math.max(max, (right - left + 1) * min);
//     console.log(left, right, min, max);
//     if (left === 0 && right === l - 1) break;
//     if (left > 0 && right < l - 1) {
//       if (nums[left - 1] > nums[right + 1]) {
//         left--;
//         min = Math.min(min, nums[left]);
//       } else if (nums[left - 1] < nums[right + 1]) {
//         right++;
//         min = Math.min(min, nums[right]);
//       } else {
//         left--;
//         right++;
//         min = Math.min(min, nums[right]);
//       }
//     } else if (left > 0) {
//       left--;
//       min = Math.min(min, nums[left]);
//     } else {
//       right++;
//       min = Math.min(min, nums[right]);
//     }
//   }
//   return max;
// };
// var maxAverageRatio = function (classes, extraStudents) {
//   var map = new Map();

//   let allPass = extraStudents,
//     allStudents = extraStudents;
//   for (var i = 0; i < classes.length; i++) {
//     map.set(i, classes[i]);
//     let pass = classes[i][0],
//       student = classes[i][1];
//     allPass += pass;
//     allStudents += student;
//   }

//   let allAverageRatio = 0;
//   for (var i = 1; i <= extraStudents; i++) {
//     // 下标 差值
//     let diff = [-1, 0];
//     for (let [index, [pass, student]] of map) {
//       let temp = Math.max(diff[1], (pass + 1) / (student + 1) - pass / student);
//       if (temp > diff[1]) diff = [index, temp];
//     }
//     let [pass, student] = map.get(diff[0]);
//     ++pass;
//     ++student;
//     map.set(diff[0], [pass, student]);
//   }
//   for (let [pass, student] of map.values()) {
//     allAverageRatio += pass / student;
//   }
//   return allAverageRatio / map.size;
// };
var maxAverageRatio = function (classes, extraStudents) {
  const calc = (x) => {
    return (x[1] - x[0]) / (x * (x[1] + 1));
  };
  const l = classes.length;
  let adjust = (heap) => {
    for (
      let i = 0, next = (i << 1) + 1, len = heap.length;
      next < len;
      i = next, next = (i << 1) + 1
    ) {
      if (next + 1 < len && calc(heap[next + 1]) < calc(heap[next]))
        next = next + 1;
      if (calc(heap[i]) < calc(heap[next])) break;
      [heap[next], heap[i]] = [heap[i], heap[next]];
    }
  };
  classes.sort((a, b) => {
    return calc(b) - calc(a);
  });
  while (extraStudents--) {
    classes[0][0]++;
    classes[0][1]++;
    adjust(classes);
  }
  let ans = 0;
  for (const c of classes) {
    ans += c[0] / c[1];
  }
  return ans / classes.length;
};
var maxAverageRatio = function (classes, extraStudents) {
  var pq = new PriorityQueue(
    ([p1, t1], [p2, t2]) =>
      (p2 + 1) / (t2 + 1) - p2 / t2 - ((p1 + 1) / (t1 + 1) - p1 / t1)
  );
  classes.forEach((item) => pq.push(item));

  var p, t;
  while (extraStudents--) {
    [p, t] = pq.pop();
    pq.push([p + 1, t + 1]);
  }

  var res = 0;
  while (pq.length()) {
    [p, t] = pq.pop();
    res += p / t;
  }

  return res / classes.length;
};

/**
 * 优先队列
 * @param {(a, b) => number} compareFn 用于确定元素顺序的方法
 */
function PriorityQueue(compareFn) {
  this.heap = [];
  this.compareFn = compareFn;
}

/** 获取当前队列长度 */
PriorityQueue.prototype.length = function () {
  return this.heap.length;
};

/** 添加元素到队列 */
PriorityQueue.prototype.push = function (item) {
  var heap = this.heap;
  // 添加元素到末尾
  heap.push(item);

  var curr = heap.length - 1;
  var parent;
  var compareFn = this.compareFn;

  // 父节点大于当前节点时，交换节点
  // 当前节点大于父节点，或到达栈顶时停止
  while (curr > 0) {
    parent = (curr - 1) >> 1;
    if (compareFn(heap[parent], heap[curr]) <= 0) break;
    [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
    curr = parent;
  }

  return heap.length;
};

/** 从队列中弹出元素 */
PriorityQueue.prototype.pop = function () {
  var heap = this.heap;
  var len = heap.length;
  // 少于一个元素时直接弹出当前元素
  if (len-- <= 1) return heap.pop();

  var head = heap[0];
  // 将最后一个元素放到堆顶
  heap[0] = heap.pop();

  var curr = 0;
  var left, right;
  var compareFn = this.compareFn;
  // 当前节点大于子节点时，交换节点
  // 子节点大于当前节点，或到达叶子节点时停止
  while (1) {
    left = (curr << 1) + 1;
    // 子节点下标超出队列长度，即已到达叶子结点
    if (left >= len) break;
    right = (curr + 1) << 1;
    // 寻找最小的子节点进行比较
    if (right < len && compareFn(heap[left], heap[right]) > 0) left = right;
    if (compareFn(heap[curr], heap[left]) <= 0) break;
    [heap[curr], heap[left]] = [heap[left], heap[curr]];
    curr = left;
  }

  return head;
};
