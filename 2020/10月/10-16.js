// var countNegatives = function (grid) {
//   let c = 0;
//   const m = grid.length;
//   const n = grid[0].length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] < 0) {
//         c += n - j;
//         break;
//       }
//     }
//   }
//   return c;
// };
// var checkIfExist = function (arr) {
//   for (const n of arr) {
//     console.log(n);
//     if (!n && arr.filter((i) => !i).length == 2) {
//       return true;
//     } else if (n && arr.includes(2 * n)) {
//       return true;
//     }
//   }
//   return false;
// };
// const a = [-2, 0, 10, -19, 4, 6, -8];
// console.log(checkIfExist(a));
var findItinerary = function (tickets) {
  const map = {};
  const res = ["JFK"];
  let cur = "JFK";
  for (const [from, to] of tickets) {
    if (map[from]) {
      map[from].push(to);
    } else {
      map[from] = [to];
    }
    if (!map[to]) {
      map[to] = [];
    }
  }
  for (const key of Object.keys(map)) {
    map[key].sort();
  }
  const res = [];
  const dfs = (city, res) => {
    if (!obj[city]) return;
    const arr = obj[city];

    while (arr.length) {
      dfs(arr.shift(), res);
    }
    res.unshift(city);
  };
  dfs("JFK", res);
  return res;
};
const a = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];
console.log(findItinerary(a));
