// var invalidTransactions = function (transactions) {
//   transactions.sort((a, b) => {
//     const [name1, time1, mount1, city1] = a.split(",");
//     const [name2, time2, mount2, city2] = b.split(",");
//     return Number(time1) - Number(time2);
//   });
//   transactions = transactions.map((item, index) => [item, index]);
//   const map = new Map();
//   const set = new Set();
//   for (const [item, index] of transactions) {
//     const [name, time, mount, city] = item.split(",");
//     if (Number(mount) > 1000) {
//       set.add(index);
//     }
//     const stack = map.get(name);
//     if (!stack) {
//       map.set(name, [[[name, time, mount, city], index]]);
//       continue;
//     }
//     let i = stack.length - 1;
//     while (i >= 0) {
//       const [cur, curIndex] = stack[i];
//       if (time - cur[1] > 60) {
//         break;
//       } else {
//         if (cur[3] === city) {
//           i--;

//           continue;
//         }

//         set.add(curIndex);
//         i--;
//         set.add(index);
//       }
//     }
//     stack.push([[name, time, mount, city], index]);
//   }
//   return [...set].map((i) => transactions[i][0]);
// };
// const transactions = ["alice,20,1220,mtv", "alice,20,1220,mtv"];
// console.log(invalidTransactions(transactions));
const msg = "123";
console.log(eval("`${msg}ddd`"));
