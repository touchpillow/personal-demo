var removeInvalidParentheses = function (s) {
  let left = 0,
    right = 0;
  const l = s.length;
  for (let i = 0; i < l; i++) {
    if (s[i] === "(") {
      left++;
    } else if (s[i] === ")") {
      if (!left) {
        right++;
      } else {
        left--;
      }
    }
  }
  const set = new Set();
  const dfs = (i, pre, left, right) => {
    if (!left && !right) {
      set.add(`${pre}${s.slice(i)}`);
      return;
    }
    // for(){}
  };
};
