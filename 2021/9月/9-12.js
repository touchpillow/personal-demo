var maxPoints = function (points) {
  const l = points.length;
  if (l < 2) return l;
  const map = new Map();
  let max = 0;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      let s = "";
      const disx = points[i][0] - points[j][0];
      const disy = points[i][1] - points[j][1];
      if (!disx) {
        s = `x-${points[i][0]}`;
      } else if (!disy) {
        s = `y-${points[i][1]}`;
      } else {
        const k = disy / disx;
        const c = points[i][1] - k * points[i][0];
        s = `${k}-${c}`;
      }
      if (!map.has(s)) map.set(s, new Set());
      map.get(s).add(i);
      map.get(s).add(j);
      max = Math.max(max, map.get(s).size);
    }
  }
  return max;
};
const a = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
];

console.log(maxPoints(a));
