// var paddingNum = function (n) {
//   const [integer, decima] = n.split(".");
//   return `${Number(integer).toLocaleString("en")}${decima ? `.${decima}` : ""}`;
// };
// console.log(paddingNum("12345.1323"));
// var paddingNum = function (n) {
//   //   return n.replace(/(\d+?)(?=(\d{3})+(\.\d+)?$)/g, "$1,");
//   return `${Number(n).toLocaleString("en")}`;
// };
// console.log(paddingNum("12324.345345453"));

// const getNum = (str) => {
//   const root = JSON.parse(str);
//   const node = [];
//   const dfs = (root, level = 0) => {
//     if (!root) return;
//     node[level] = (node[level] || 0) + 1;
//     dfs(root.left, level + 1);
//     dfs(root.right, level + 1);
//   };
//   dfs(root);
//   return node.pop();
// };
// var printVertically = function (s) {
//   const list = s.split(" ");
//   const l = list.length;
//   const res = [];
//   let index = 0;
//   while (true) {
//     let cur = "";
//     for (let i = 0; i < l; i++) {
//       cur += list[i][index] ? list[i][index] : " ";
//     }
//     cur = cur.trimEnd();
//     if (cur) {
//       res.push(cur);
//     } else {
//       return res;
//     }
//   }
// };
const getNum = (n) => {
  if (n === 0) return 1;
  //dpx[i]表示第i个字符为x时满足条件数量
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  const mod = 998244353;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 1] - dp[i - 2]) % mod;
  }
  return (2 * dp[n]) % mod;
};
console.log(getNum(3));
