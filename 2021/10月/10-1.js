var calculate = function (s) {
  const l = s.length;
  let cur = 0;
  let curFlag = "+";
  let pre = "0";
  for (let i = 0; i < l; i++) {
    if (s[i] === "+") {
      cur += Number(`${curFlag}${pre}`);
      curFlag = "+";
      pre = "0";
    } else if (s[i] === "-") {
      cur += Number(`${curFlag}${pre}`);
      curFlag = "-";
      pre = "0";
    } else if (s[i] === "(") {
      const [v, index] = calculate(s.slice(i + 1));
      i += index + 1;
      cur += Number(`${curFlag}1`) * Number(`${v}`);
      curFlag = "+";
    } else if (s[i] === ")") {
      cur += Number(`${curFlag}1`) * Number(`${pre}`);
      console.log(cur);
      return [cur, i];
    } else if (s[i] === " ") {
      continue;
    } else {
      pre += s[i];
    }
  }
  cur += Number(`${curFlag}${pre}`);
  return cur;
};
const s = "2-(5-6)";
console.log(calculate(s));
