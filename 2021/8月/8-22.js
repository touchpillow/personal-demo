var sequentialDigits = function (low, high) {
  const res = [];
  const initLen = `${low}`.length;
  const endLen = `${high}`.length;
  for (let l = initLen; l <= endLen; l++) {
    for (let i = 1; i + l - 1 <= 9; i++) {
      let cur = "";
      for (let j = 0; j < l; j++) {
        cur += i + j;
      }
      cur = Number(cur);
      if (cur >= low && cur <= high) {
        res.push(cur);
      }
    }
  }
  return res;
};
console.log(sequentialDigits(1000, 13000));
