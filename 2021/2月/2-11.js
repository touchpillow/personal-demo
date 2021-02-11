// var pushDominoes = function (dominoes) {
//   let flag = "";
//   const temp = [];
//   let res = "";
//   for (const s of dominoes) {
//     if (s === ".") {
//       temp.push(flag === "R" ? "R" : ".");
//     } else if (s === "R") {
//       res += temp.join("");
//       temp = [];
//       flag = "R";
//       res += "R";
//     } else {
//       if (flag !== "R") {
//         res += temp.fill("L").join("");
//       } else {
//         const l = temp.length;
//         res += `${new Array(~~(l / 2)).fill("R").join("")}${
//           l % 2 ? "." : ""
//         }${new Array(~~(l / 2)).fill("L").join("")}`;
//       }
//       temp = [];
//       res += "L";
//       flag = "L";
//     }
//   }
//   res += temp.join("");
//   return res;
// };
var canVisitAllRooms = function (rooms) {
  const l = rooms.length;
  const dp = new Array(l).fill(false);
  const dfs = (i) => {
    if (!dp[i]) return;
    dp[i] = true;
    const next = rooms[i];
    next.forEach((item) => {
      dfs(item);
    });
  };
  dfs(0);
  return dp.every((item) => item);
};
