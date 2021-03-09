const getDomByArr = (arr) => {
  const stack = [0];
  arr.push(0);
  const suffix = [];
  const createUl = (n, deep, flag, url = "") => {
    let res = "";
    for (let c = 0; c < n; c++) {
      const s = `\n${" ".repeat(deep + Math.abs(flag) * c)}<${url}ul>`;
      if (flag > 0) {
        res += s;
      } else {
        suffix.unshift(s);
      }
    }
    return res;
  };
  const createLiStart = (deep) => {
    return `\n${" ".repeat(deep)}<li deep="${deep}">`;
  };
  const createLiEnd = (deep) => {
    suffix.unshift(`\n${" ".repeat(deep)}</li>`);
  };
  let res = "";
  for (const n of arr) {
    const pre = stack[stack.length - 1];
    if (pre === n) {
      if (!n) break;
      res += suffix.shift();
    } else if (pre < n) {
      res += createUl(n - pre, pre, 1);
      res += createUl(n - pre, pre, -1, "/");
    } else {
      while (stack[stack.length - 1] >= n) {
        const last = stack.pop();
        if (last) {
          console.log(n, last, suffix[0], stack);
          res += suffix.shift();
        }
        if (last !== n) {
          let dis = Math.min(last - stack[stack.length - 1], last - n);
          while (dis--) {
            res += suffix.shift();
          }
        }
      }
    }
    if (n) {
      res += createLiStart(n);
      createLiEnd(n);
    }
    if (n !== stack[stack.length - 1]) {
      stack.push(n);
    }
  }
  res += suffix.join("");
  return res;
};
console.log(getDomByArr([1, 2, 3, 2, 1, 3, 5, 4, 3]));
