// var removeStones = function (stones) {
//   const l = stones.length;
//   const parent = new Array(l).fill(0).map((value, index) => index);
//   //合并同行同列的点 指向同一根节点
//   for (let i = 0; i < l; i++) {
//     for (let j = i + 1; j < l; j++) {
//       if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
//         union(parent, i, j);
//       }
//     }
//   }
//   return parent.filter((item, index) => item !== index).length;
// };
// const union = (parent, i, j) => {
//   parent[find(parent, j)] = find(parent, i);
// };
// const find = (parent, x) => {
//   if (parent[x] != x) {
//     parent[x] = find(parent, parent[x]);
//   }
//   return parent[x];
// };
// const stones = [
//   [0, 1],
//   [1, 0],
//   [1, 1],
// ];
// console.log(removeStones(stones));
const list = [1, 2, 3, 4, 5];
const delay = 1000;
const createFun = (item) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(item);
      }, delay);
    });
  };
};

list.map(createFun).reduce((p, item) => {
  return p.then(item);
}, Promise.resolve());
// var bagOfTokensScore = function (tokens, P) {
//   tokens.sort((a, b) => a - b);
//   const l = tokens.length;
//   let left = 0;
//   let right = l - 1;
//   let c = 0;
//   let max = 0;
//   while (right >= left) {
//     if (P < tokens[left] && !c) break;
//     if (P < tokens[left]) {
//       P += tokens[right];
//       right--;
//       c--;
//     } else {
//       P -= tokens[left];
//       left++;
//       c++;
//       max = Math.max(c, max);
//     }
//   }
//   return max;
// };
// const okens = [100, 200, 300, 400],
//   P = 200;
// console.log(bagOfTokensScore(okens, P));
