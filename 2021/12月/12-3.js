var minFlips = function (target) {
  target = "0" + target;
  const l = target.length;
  let c = 0;
  for (let i = 1; i < l; i++) {
    if (target[i] !== target[i - 1]) {
      c++;
    }
  }
  return c;
};
