var numSub = function (s) {
  let c = 0;
  const mod = Math.pow(10, 9) + 7;
  let cur = 0;
  for (const i of s) {
    if (i === "0") {
      cur = 0;
    } else {
      cur++;
      c = (c + cur) % mod;
    }
  }
  return c;
};
