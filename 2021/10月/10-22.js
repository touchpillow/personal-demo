var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  const dx = x1 > x_center ? x1 - x_center : x2 < x_center ? x_center - x2 : 0;
  const dy = y1 > y_center ? y1 - y_center : y2 < y_center ? y_center - y2 : 0;
  return dx * dx + dy * dy <= radius * radius;
};
