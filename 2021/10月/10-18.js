/*
 * @Author: your name
 * @Date: 2021-10-18 12:58:35
 * @LastEditTime: 2021-10-21 10:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-18.js
 */
var hasValidPath = function (grid) {
  const map = new Map();
  map.set(1, new Set([1, 3, 5]));
  map.set(2, new Set([2, 5, 6]));
  map.set(3, new Set([2, 5, 6]));
  map.set(4, new Set([2, 5, 6]));
  map.set(5, new Set([1, 4, 6]));
  map.set(6, new Set([1, 3, 5]));
  const map1 = new Map();
  const xOffset = (x) => {
    return [x, 0];
  };
  const yOffset = (y) => {
    return [0, y];
  };
  map1.set(1, xOffset);
  map1.set(2, yOffset);
  map1.set(3, [1, 0]);
  map1.set(4, [0, 1]);
  map1.set(5, [1, 0]);
  map1.set(1, [1, 0]);
  const h = grid.length;
  const w = grid[0].length;
  const getNext = (i, j) => {
    const [x, y] = map1.get(grid[i][j]);
  };
  const dfs = (i, j) => {
    if (i < 0 || i >= h) return false;
    if (j < 0 || j >= w) return false;
    if (i === h - 1 && j === w - 1) return true;
    const current = grid[i][j];
    const [x, y] = getNext(i, j);
  };
};
