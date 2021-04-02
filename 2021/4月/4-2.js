// var maxDistance = function (grid) {
//   const position = [];
//   const n = grid.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === 1) {
//         position.push([i, j]);
//         grid[i][j] = -1;
//       }
//     }
//   }
//   const len = position.length;
//   if (len === n * n || !len) return -1;
//   let dis = 0;
//   const handle = (i, j) => {
//     if (i < 0 || i >= n) return;
//     if (j < 0 || j >= n) return;
//     if (grid[i][j] !== 0) return;
//     position.push([i, j]);
//     grid[i][j] = -1;
//   };
//   while (position.length) {
//     const l = position.length;
//     for (let i = 0; i < l; i++) {
//       const [j, k] = position.shift();
//       handle(j, k + 1);
//       handle(j, k - 1);
//       handle(j + 1, k);
//       handle(j - 1, k);
//     }
//     dis++;
//   }
//   return dis;
// };
var isRobotBounded = function (instructions) {
  let dir = 0;
  const position = [0, 0];
  const vmap = {
    0: 1,
    1: 1,
    2: -1,
    3: -1,
  };
  const dmap = {
    0: 1,
    1: 0,
    2: 1,
    3: 0,
  };
  for (const s of instructions) {
    if (s === "G") {
      position[dmap[dir]] += vmap[dir];
    } else if (s === "L") {
      dir = (dir - 1 + 4) % 4;
    } else {
      dir = (dir + 1) % 4;
    }
  }
  if (position[0] === 0 && position[1] === 0) return true;
  if (dir === 0) return false;
  return true;
};
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill("").map(() => new Array(n).fill(Infinity));

  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = 0;
  }

  for (let d = 2; d < n; d++) {
    for (let l = 0; l < n - d; l++) {
      const r = l + d;
      for (let i = l + 1; i < r; i++) {
        dp[l][r] = Math.min(
          dp[l][r],
          nums[i] * nums[l] * nums[r] + dp[l][i] + dp[i][r]
        );
      }
    }
  }
  return dp[0][n - 1];
};
