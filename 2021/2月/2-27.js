// var smallestRangeII = function (A, K) {
//   A.sort((a, b) => b - a);
//   const l = A.length;
//   if (l === 1) return 0;
//   if (K === 0) return A[0] - A[l - 1];
//   let res = A[0] - A[l - 1];

//   for (let i = 0; i < l - 1; i++) {
//     const a = Math.max(A[0] - K, A[i + 1] + K);
//     const b = Math.min(A[l - 1] + K, A[i] - K);
//     res = Math.min(res, a - b);
//   }
//   return res;
// };
// const A = [506, 4763, 8681, 4243, 4040, 8587, 9235, 442, 1865, 2820];
// K = 5899;
// console.log(smallestRangeII(A, K));
var TopVotedCandidate = function (persons, times) {
  const l = persons.length;
  const data = new Array(l + 1).fill(0);
  this.map = new Map();
  let pre = 0;
  for (let i = 0; i < l; i++) {
    const p = persons[i];
    data[p]++;
    if (data[p] >= data[pre]) {
      pre = p;
    }
    this.map.set(times[i], pre);
  }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  if (this.map.has(t)) return this.map.get(t);
  let v = t - 1;
  while (!this.map.has(v)) {
    v--;
  }
  this.map.set(v, this.map.get(t));
  return this.map.get(v);
};
