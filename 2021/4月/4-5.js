var longestValidParentheses = function (s) {
  const l = s.length;
  const stack = [];
  const leftIndex = [];
  const left = [];
  const set = new Set();
  let c = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] === "(") {
      c++;
    } else {
      c--;
    }
    if (c < 0) {
      left.push(false);
      c = 0;
    }
    if (stack[stack.length - 1] === "(" && s[i] === ")") {
      const preLeft = leftIndex.pop();
      set.add(preLeft);
      stack.pop();
    } else if (s[i] === "(") {
      leftIndex.push(i);
      left.push(i);
      stack.push("(");
    } else {
      stack.push(s[i]);
    }
  }
  let max = 0;
  let cur = 0;
  for (const i of left) {
    if (set.has(i)) {
      cur += 2;
      max = Math.max(cur, max);
    } else {
      cur = 0;
    }
  }
  return max;
};
var longestValidParentheses = function (s) {
  if (!s) return 0;
  const l = s.length;
  const dp = new Array(l).fill(0);
  for (let i = 1; i < l; i++) {
    if (s[i] == ")") {
      if (s[i - 1] == "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
    }
  }
  return Math.max(...dp);
};
const s = ")(";
console.log(longestValidParentheses(s));
