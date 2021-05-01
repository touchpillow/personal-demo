// var replaceDigits = function (s) {
//   let res = "";
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     if (!(i % 2)) {
//       res += s[i];
//       continue;
//     }
//     const target = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
//     res += target;
//   }
//   return res;
// };
// var SeatManager = function (n) {
//   this.list = new Array(n);
//   for (let i = 1; i <= n; i++) {
//     this.list[i - 1] = i;
//   }
// };

// /**
//  * @return {number}
//  */
// SeatManager.prototype.reserve = function () {
//   return this.list.shift();
// };

// /**
//  * @param {number} seatNumber
//  * @return {void}
//  */

// SeatManager.prototype.unreserve = function (seatNumber) {
//   const index = this.list.findIndex((i) => i > n);
//   if (index < 0) {
//     this.list.push(n);
//   } else {
//     this.list.splice(index, 0, n);
//   }
// };
// var maximumElementAfterDecrementingAndRearranging = function (arr) {
//   arr.sort((a, b) => a - b);
//   const l = arr.length;
//   if (arr[0] !== 1) {
//     arr[0] = 1;
//   }
//   for (let i = 1; i < l; i++) {
//     if (arr[i] - arr[i - 1] > 1) {
//       arr[i] = arr[i - 1] + 1;
//     }
//   }
//   return arr[l - 1];
// };
// const a = [100, 1, 1000];
// console.log(maximumElementAfterDecrementingAndRearranging(a));
function middle(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left][0]) if (left >= right) return arr[left][0];
  while (right > left) {}
}
var closestRoom = function (rooms, queries) {
  const map = new Map();
  for (const [id, s] of rooms) {
    if (!map.has(s)) {
      map.set(s, []);
    }
    map.get(s).push(id);
  }
  for (const s of map.keys()) {
    map.get(s).sort((a, b) => a - b);
  }
  const k = queries.length;
  const res = new Array(k);
  queries = queries.map((item, i) => [item[0], item[1], i]);
  queries.sort((a, b) => a[1] - b[1]);
  rooms.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  for (let i = 0; i < k; i++) {
    const [id, s, index] = queries[i];
    if (!rooms.length) {
      res[index] = -1;
      continue;
    }
    while (rooms.length && rooms[0][1] < s) {
      rooms.shift();
    }
    if (!rooms.length) {
      res[index] = -1;
      continue;
    }
    if (map.has(s)) {
      res[index] = map.get(s)[0];
    } else {
      res[index] = middle(rooms, id);
    }
  }
};
