var simplifiedFractions = function (n) {
  let res = [];
  const map = new Map();
  const gcd = (a, b) => {
    if (map.has(`${a}-${b}`)) return map.get(`${a}-${b}`);
    if (!a) {
      return b;
    }
    const res = gcd(b % a, a);
    map.set(`${a}-${b}`, res);
    return res;
  };
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (gcd(j, i) === 1) {
        res.push(`${j}-${i}`);
      }
    }
  }
  return res;
};
console.log(simplifiedFractions(6));
