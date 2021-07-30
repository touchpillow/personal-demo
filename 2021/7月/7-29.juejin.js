// 贪心，从左向右
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    return a[1] - b[1];
  });
  const l = pairs.length;
  let res = 1;
  let pre = pairs[0][1];
  for (let i = 1; i < l; i++) {
    if (pairs[i][0] > pre) {
      res++;
      pre = pairs[i][1];
    }
  }
  return res;
};
// 贪心，从右向左
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  const l = pairs.length;
  let res = 1;
  let pre = pairs[l - 1][0];
  for (let i = l - 2; i >= 0; i--) {
    if (pairs[i][1] < pre) {
      res++;
      pre = pairs[i][0];
    }
  }
  return res;
};
var partition = function (head, x) {
  const left = { next: null };
  let leftCur = left;
  const right = { next: null };
  let rightCur = right;
  while (head) {
    if (head.val < x) {
      leftCur.next = head;
      leftCur = leftCur.next;
      head = head.next;
      leftCur.next = null;
    } else {
      rightCur.next = head;
      rightCur = rightCur.next;
      head = head.next;
      rightCur.next = null;
    }
  }
  leftCur.next = right.next;
  return left.next;
};
var grayCode = function (n) {
  const res = [0];
  for (let i = 1; i <= n; i++) {
    const right = [...res].reverse().map((item) => item + Math.pow(2, i - 1));
    res.push(...right);
  }
  return res;
};
