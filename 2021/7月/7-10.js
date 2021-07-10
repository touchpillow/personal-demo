var carPooling = function (trips, capacity) {
  const list = new Array(1001).fill(0);
  for (const [a, b, c] of trips) {
    list[b] += a;
    list[c] -= a;
  }
  let c = 0;
  for (let i = 0; i <= 1000; i++) {
    c += list[i];
    if (c > capacity) return false;
  }
  return true;
};
var carPooling = function (trips, capacity) {
  const stack = [];
  for (const [a, b, c] of trips) {
    stack.push(
      {
        i: b,
        v: a,
      },
      {
        i: c,
        v: -a,
      }
    );
  }
  stack.sort((a, b) => {
    if (a.i !== b.i) {
      return a.i - b.i;
    }
    return a.v - b.v;
  });
  let c = 0;
  for (const item of stack) {
    c += item.v;
    if (c > capacity) return false;
  }

  return true;
};
