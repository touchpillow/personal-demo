// var numWaterBottles = function (numBottles, numExchange) {
//   let c = numBottles;
//   while (c >= numExchange) {
//     const v = ~~(c / numExchange);
//     numBottles += v;
//     c %= numExchange;
//     c += v;
//   }
//   return numBottles;
// };
// console.log(numWaterBottles(2, 3));
// var countGoodTriplets = function (arr, a, b, c) {
//   let res = 0;
//   const l = arr.length;
//   for (let i = 0; i < l - 2; i++) {
//     for (let j = i + 1; j < l - 1; j++) {
//       if (Math.abs(arr[i] - arr[j]) <= a) {
//         for (let k = j + 1; k < l; k++) {
//           if (Math.abs(arr[i] - arr[k]) <= c && Math.abs(arr[j] - arr[k]) <= b)
//             res++;
//         }
//       }
//     }
//   }
//   return res;
// };
// var canFormArray = function (arr, pieces, left = 0) {
//   const l = arr.length;
//   if (l == left) return true;
//   return pieces.some((item, index) => {
//     const li = item.length;
//     if (li + left > l) return false;
//     for (let i = 0; i < li; i++) {
//       if (item[i] !== arr[left + i]) return false;
//     }
//     const tempList = pieces.slice();
//     tempList.splice(index, 1);
//     return canFormArray(arr, tempList, left + li);
//   });
// };
// const arr = [1, 3, 5, 7],
//   pieces = [[2, 4, 6, 8]];
// console.log(canFormArray(arr, pieces));
// var countVowelStrings = function (n) {
//   if (n == 0) return 0;
//   if (n == 1) return 5;
//   const list = [1, 1, 1, 1, 1];
//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j < 5; j++) {
//       list[j] = list[j] + list[j - 1];
//     }
//   }
//   return list.reduce((a, b) => a + b, 0);
// };
// console.log(countVowelStrings(2));
// var furthestBuilding = function (heights, bricks, ladders) {
//   const l = heights.length;
//   const dis = new Array(l - 1);
//   for (let i = 1; i < l; i++) {
//     dis[i - 1] = heights[i] - heights[i - 1];
//   }
//   if (l < 2) return l - 1;
//   const s = dis.filter((i) => i > 0);
//   if (ladders >= s.length) return l - 1;
//   if (s.reduce((a, b) => a + b, 0) <= bricks) return l - 1;
//   let sum = 0;
//   const stack = [];

//   for (let i = 1; i < l; i++) {
//     if (dis[i - 1] <= 0) continue;
//     sum += dis[i - 1];
//     insertStack(dis[i - 1]);
//     if (sum <= bricks) continue;
//     if (sum > bricks && !ladders) {
//       return i - 1;
//     } else {
//       while (ladders && sum > bricks) {
//         ladders--;
//         const item = stack.shift();
//         sum -= item;
//       }
//       if (sum > bricks) return i - 1;
//     }
//   }
//   function insertStack(n) {
//     const l = stack.length;
//     for (let i = 0; i < l; i++) {
//       if (stack[i] <= n) {
//         stack.splice(i, 0, n);
//         return;
//       }
//     }
//     stack.push(n);
//   }
//   return l - 1;
// };
// const heights = [14, 3, 19, 3],
//   bricks = 17,
//   ladders = 0;
// console.log(furthestBuilding(heights, bricks, ladders));
var kthSmallestPath = function (destination, k) {
  let [n, m] = destination;
  const list = new Array(m + n + 1);
  list[0] = 1;
  for (let i = 1; i <= m + n; i++) {
    list[i] = list[i - 1] * i;
  }
  let sum = 0;
  let cur = "";
  let h = 0;
  while (sum < k) {
    const temp = list[n + h - 1] / (list[h] * list[n - 1]);
    if (sum + temp == k) {
      console.log(cur, sum, h, m);
      cur += `${"H".repeat(m - h)}V${"V".repeat(n - 1)}${"H".repeat(h)}`;
      return cur;
    } else if (sum + temp < k) {
      h++;
      sum += temp;
    } else {
      cur += `${"H".repeat(m - h)}V`;
      n--;
      k -= sum;
      sum = 0;
      m = h;
      h = 0;
    }
  }
};
// var kthSmallestPath = function (destination, k) {
//   const [n, m] = destination;
//   const res = [];
//   function getRes(m, n, pre) {
//     if (res.length == k) return;
//     if (!m && !n) {
//       res.push(pre);
//       return;
//     }
//     if (!m) {
//       getRes(m, n - 1, `${pre}V`);
//     } else if (!n) {
//       getRes(m - 1, n, `${pre}H`);
//     } else {
//       getRes(m - 1, n, `${pre}H`);
//       getRes(m, n - 1, `${pre}V`);
//     }
//   }
//   getRes(m, n, "");
//   //   res.sort((a, b) => a > b);
//   return res[k - 1];
// };
console.log(kthSmallestPath([2, 3], 2));
