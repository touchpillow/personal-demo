// var numOfMinutes = function (n, headID, manager, informTime) {
//   if (n <= 1) return 0;
//   const map = new Map();
//   for (let i = 0; i < n; i++) {
//     if (manager[i] < 0) continue;
//     if (!map.has(manager[i])) {
//       map.set(manager[i], []);
//     }
//     map.get(manager[i]).push(i);
//   }

//   const getDpth = (i) => {
//     if (!map.has(i)) return [0];
//     return Math.max(...map.get(i).map(getDpth)) + informTime[i];
//   };

//   return getDpth(headID);
// };
var numOfMinutes = function (n, headID, manager, informTime) {
  const dp = new Array(n);
  dp[headID] = 0;
  const getTime = (i) => {
    if (dp[i] >= 0) return dp[i];
    return getTime(manager[i]) + informTime[i];
  };
  for (let i = 0; i < n; i++) {
    dp[i] = getTime(i);
  }
  return Math.max(...dp);

