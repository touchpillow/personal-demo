var minInsertions = function (s) {
  let left = 0;
  const l = s.length;
  let c = 0;
  for (let i = 0; i < l; ) {
    if (s[i] === "(") {
      left++;
    } else {
      if (!left) {
        if (s[i + 1] === ")") {
          i++;
          c++;
        } else {
          c += 2;
        }
      } else {
        if (s[i + 1] === ")") {
          i++;
        } else {
          c++;
        }
        left--;
      }
    }
    i++;
  }
  return c + left * 2;
};
const a = "(()))(()))()())))";
console.log(minInsertions(a));
