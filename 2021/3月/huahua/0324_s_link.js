var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let start = head;
  let next = head.next;
  while (next) {
    next.pre = head;
    head = head.next;
    next = next.next;
  }
  while (start.val === head.val) {
    start = start.next;
    head = head.pre;
    if (start == head) return true;
  }
  return false;
};
var maxSubArray = function (nums) {
  const l = nums.length;
  let dp = nums[0];
  let max = -Infinity;
  for (let i = 1; i < l; i++) {
    if (dp < 0) {
      dp = nums[i];
    } else {
      dp += nums[i];
    }
    max = Math.max(max, dp);
  }
  return max;
};
var secondHighest = function (s) {
  let a = -1;
  let b = -2;
  for (const n of s) {
    const v = Number(n);
    if (Number.isNaN(v)) {
      continue;
    } else {
      if (v > a) {
        [a, b] = [v, a];
      } else if (v !== a && v > b) {
        b = v;
      }
    }
  }
  return b >= 0 ? b : -1;
};
