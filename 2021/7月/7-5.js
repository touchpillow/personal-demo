// var numTilePossibilities = function (tiles) {
//   const l = tiles.length,
//     visited = new Array(l).fill(false);
//   const set = new Set();
//   const backtrack = (first, output) => {
//     if (output.length > 0) set.add(output.join(""));
//     if (first === l) return;
//     for (let i = 0; i < l; ++i) {
//       if (visited[i]) continue;
//       output.push(tiles[i]);
//       visited[i] = true;
//       backtrack(first + 1, output);
//       visited[i] = false;
//       output.pop();
//     }
//   };
//   backtrack(0, []);
//   return set.size;
// };
var numTilePossibilities = function (tiles) {
  let c = 0;
  tiles = [...tiles].sort();

  const deep = (pre, next) => {
    if (pre) c++;
    const l1 = next.length;
    for (let i = 0; i < l1; i++) {
      while (next[i] === next[i - 1]) {
        i++;
      }
      if (i >= l1) break;
      deep(pre + next[i], next.slice(0, i).concat(next.slice(i + 1)));
    }
  };
  deep("", tiles);
  return c;
};
const a = "AAB";
console.log(numTilePossibilities(a));
