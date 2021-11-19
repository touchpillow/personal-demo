var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle;
  this.record = [];
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  this.record.unshift([row1, row2, col1, col2, newValue]);
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  const v = this.record.find(
    ([a, b, c, d]) => row <= b && row >= a && col <= d && col >= c
  );
  if (!v) return this.rectangle[row][col];
  return v[4];
};
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
