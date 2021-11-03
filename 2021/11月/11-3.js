var maxDiff = function (num) {
  const s = `${num}`;
  const l = s.length;
  let index;
  let index2;
  for (let i = 0; i < l; i++) {
    if (s[i] !== "9") {
      index = index ?? i;
    }
    if (s[i] !== "1" && !i) {
      index2 = i;
    } else if (s[i] !== "0" && i) {
      if (s[0] === s[i]) {
        continue;
      }
      index2 = index2 ?? i;
    }
  }

  const max = s.replaceAll(s[index ?? 0], "9");
  let min = "";
  if (!index2) {
    min = s.replaceAll(s[0], "1");
  } else {
    min = s.replaceAll(s[index2], "1");
  }
  if (Number(min) === 0) {
    min = s;
  }
  return Math.abs(min - max);
};
console.log(maxDiff(1101057));
