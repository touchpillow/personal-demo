var minTimeToVisitAllPoints = function (points) {
  let v = 0;
  const l = points.length;
  if (l < 2) return v;
  for (let i = 1; i < l; i++) {
    let x = Math.abs(points[i][0] - points[i - 1][0]);
    let y = Math.abs(points[i][1] - points[i - 1][1]);
    const temp = Math.min(x, y) + Math.abs(x - y);
    v += temp;
  }
  return v;
};
