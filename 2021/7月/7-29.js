// class AsyncSeriesBailHook {
//   constructor(name) {
//     this.tasks = [];
//     this.name = name;
//   }
//   tapPromise(task) {
//     this.tasks.push(this.wrap(task));
//   }
//   wrap(task) {
//     return async (...arg) => {
//       //如果只考虑task失败，只需要 return Promise.then(() => task(...arg))
//       const res = await Promise.resolve()
//         .then(() => task(...arg))
//         .catch((err) => err || false);
//       if (res === false) return Promise.reject(res);
//       return Promise.resolve(res);
//     };
//   }
//   promise(...args) {
//     return this.tasks
//       .reduce((pre, next) => {
//         return pre.then(() => next(...args));
//       }, Promise.resolve())
//       .catch((e) => e);
//   }
// }
// let queue = new AsyncSeriesBailHook("name");

// console.time("cast");

// queue.tapPromise(function (...args) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// });

// queue.tapPromise(function (...args) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(2);
//       reject(); // 使用reject那么就会直接跳出后面的逻辑
//     }, 1000);
//   });
// });
// queue.tapPromise(function (...args) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(3);
//       resolve();
//     }, 1000);
//   });
// });

// queue.promise("hello").then((data) => {
//   console.log(data);
//   console.timeEnd("cast");
// });
// 打印
// 1
// 2
const calcCost = (a, b) => {
  return Math.abs(a.charCodeAt() - b.charCodeAt());
};
var equalSubstring = function (s, t, maxCost) {
  const l = s.length;
  const cost = new Array(l + 1).fill(0);

  for (let i = 1; i <= l; i++) {
    cost[i] = calcCost(s[i - 1], t[i - 1]);
  }
  let max = 0;
  let cur = 0;
  let left = 0;
  console.log(cost);
  for (let i = 1; i <= l; i++) {
    cur += cost[i];
    while (cur > maxCost) {
      left++;
      cur -= cost[left];
    }
    max = Math.max(max, i - left);
    console.log(left, i, cur);
  }
  return max;
};
const a = "krrgw",
  b = "zjxss",
  c = 19;
console.log(equalSubstring(a, b, c));
