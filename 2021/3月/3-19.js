// var canPlaceFlowers = function (flowerbed, n) {
//   const stack = [];
//   let len = 0;
//   for (const n of flowerbed) {
//     //计算所有连续的0及对应的长度
//     //连续的0对应的最大种植数量是可以计算的
//     if (!n) {
//       len++;
//     } else {
//       stack.push(len);
//       len = 0;
//     }
//   }
//   //没有1，即左右边界相连
//   if (!stack.length) return ~~((len + 1) / 2) >= n;
//   const left = stack.shift();
//   //左右边界 只需要考虑一端的相邻问题
//   const init = ~~(left / 2) + ~~(len / 2);
//   return (
//     stack.reduce((sum, item) => {
//       return sum + ~~((item - 1) / 2);
//     }, init) >= n
//   );
// };
// var canPlaceFlowers = function (flowerbed, n) {
//   const stack = [];
//   let len = 0;
//   const funMap = {
//     0: () => {
//       len++;
//     },
//     1: () => {
//       stack.push(len);
//       len = 0;
//     },
//   };
//   for (const n of flowerbed) {
//     //计算所有连续的0及对应的长度
//     //连续的0对应的最大种植数量是可以计算的
//     funMap(n)();
//   }
//   const resMap = {
//     true: () => {
//       return ~~((len + 1) / 2) >= n;
//     },
//     false: () => {
//       const left = stack.shift();
//       //左右边界 只需要考虑一端的相邻问题
//       const init = ~~(left / 2) + ~~(len / 2);
//       return (
//         stack.reduce((sum, item) => {
//           return sum + ~~((item - 1) / 2);
//         }, init) >= n
//       );
//     },
//   };
//   return resMap(`${!stack.length}`);
// };
// const flowerbed = [1, 0, 0, 0, 1],
//   n = 2;
// console.log(canPlaceFlowers(flowerbed, n));
// var intervalIntersection = function (firstList, secondList) {
//   const l1 = firstList.length;
//   const l2 = secondList.length;
//   let p1 = 0;
//   let p2 = 0;
//   const res = [];
//   while (p1 < l1 && p2 < l2) {
//     while (firstList[p1][1] < secondList[p2][0] && p1 < l1) {
//       p1++;
//       if (p1 === l1) return res;
//     }

//     while (secondList[p2][1] < firstList[p1][0] && p2 < l2) {
//       p2++;
//       if (p2 === l2) return res;
//     }
//     if (
//       firstList[p1][1] < secondList[p2][0] ||
//       secondList[p2][1] < firstList[p1][0]
//     ) {
//       continue;
//     }
//     res.push([
//       Math.max(firstList[p1][0], secondList[p2][0]),
//       Math.min(firstList[p1][1], secondList[p2][1]),
//     ]);
//     if (firstList[p1][1] > secondList[p2][1]) {
//       p2++;
//     } else if (firstList[p1][1] < secondList[p2][1]) {
//       p1++;
//     } else {
//       p1++;
//       p2++;
//     }
//   }
//   return res;
// };
// const a = [
//     [1, 8],
//     [16, 20],
//   ],
//   b = [
//     [2, 11],
//     [12, 13],
//   ];
// console.log(intervalIntersection(a, b));
// var smallestFromLeaf = function (root) {
//   if (!root) return "";
//   const curS = String.fromCharCode(root.val + 97);
//   const left = smallestFromLeaf(root.left);
//   const right = smallestFromLeaf(root.right);
//   if (!left && !right) return curS;
//   if (!left) return right + curS;
//   if (!right) return left + curS;
//   return `${left}${curS}` > `${right}${curS}`
//     ? `${right}${curS}`
//     : `${left}${curS}`;
// };
// var smallestFromLeaf = function (root) {
//   const dfs = (root) => {
//     if (!root) return "";
//     const curS = String.fromCharCode(root.val + 97);
//     const left = dfs(root.left);
//     const right = dfs(root.right);
//     if (!left && !right) return [curS];
//     if (!left) return right.map((item) => item + curS);
//     if (!right) return left.map((item) => item + curS);
//     const arr = [...left, ...right].map((i) => `${i}${curS}`);
//     let min = arr[0] + curS;
//     for (const s of arr) {
//       if (s < min) {
//         min = s;
//       }
//     }
//     return arr.filter((item) => item.startsWith(min));
//   };
//   const res = dfs(root);
//   let min = res[0];
//   for (const s of res) {
//     if (s < min) {
//       min = s;
//     }
//   }
//   return min;
// };
// var smallestFromLeaf = function (root) {
//   const dfs = (root) => {
//     if (!root) return "";
//     const left = dfs(root.left);
//     const right = dfs(root.right);
//     const curS = String.fromCharCode(root.val + 97);
//     if (!left && !right) return [curS];
//     if (!left) return right.map((item) => `${item}${curS}`);
//     if (!right) return left.map((item) => `${item}${curS}`);
//     return [...left, ...right].map((item) => `${item}${curS}`);
//   };
//   const arr = dfs(root);
//   let min = arr[0];
//   for (const s of arr) {
//     if (s < min) {
//       min = s;
//     }
//   }
//   return min;
// };

// const a = [1, 2, 3];
// const obj = { 1: 1, 2: 1 };
// a.pop();
// // console.log(Object.getOwnPropertyDescriptor(a, "length"));
// // console.log(Object.keys(obj)); //['1','2']
// Object.values(obj); //[1,1]
// Object.entries(obj); //[['1',1],['2',1]]
// // console.log(a.values());
// console.log(Array.from(1, 2, 3));
var canPlaceFlowers = function (flowerbed, n) {
  const stack = [];
  let len = 0;
  const funMap = {
    0: () => {
      len++;
    },
    1: () => {
      stack.push(len);
      len = 0;
    },
  };
  for (const n of flowerbed) {
    //计算所有连续的0及对应的长度
    //连续的0对应的最大种植数量是可以计算的
    funMap[n]();
  }
  const resMap = {
    true: () => {
      return ~~((len + 1) / 2) >= n;
    },
    false: () => {
      const left = stack.shift();
      //左右边界 只需要考虑一端的相邻问题
      const init = ~~(left / 2) + ~~(len / 2);
      return (
        stack.reduce((sum, item) => {
          return sum + ~~((item - 1) / 2);
        }, init) >= n
      );
    },
  };
  return resMap[`${!stack.length}`]();
};
