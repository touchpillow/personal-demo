var calculateMinimumHP = function (dungeon) {
  const h = dungeon.length;
  const w = dungeon[0].length;
  const dp = new Array(h).fill("").map(() => new Array(w).fill(0));
  let min = dungeon[0][0];
  dungeon[h - 1][w - 1] = Math.max(1, 1 - dungeon[h - 1][w - 1]);
  for (let i = h - 1; i >= 0; i--) {
    for (let j = w - 1; j >= 0; j--) {
      if (i === h - 1 && j === w - 1) continue;
      const min = Math.min(
        dungeon[i + 1][j] ?? Infinity,
        dungeon[i][j + 1] ?? Infinity
      );
      dungeon[i][j] = Math.max(1, min - dungeon[i][j]);
    }
  }
  return dungeon[0][0];
};
const a = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];
console.log(calculateMinimumHP(a));
