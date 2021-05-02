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
//   this.list = [];
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
//   let left = 0;
//   let right = this.list.length - 1;
//   if (seatNumber < this.list[left]) {
//     this.list.unshift(seatNumber);
//     return;
//   } else if (seatNumber > this.list[right]) {
//     this.list.push(seatNumber);
//     return;
//   }
//   while (right >= left) {
//     if (left === right) {
//       break;
//     }
//     const mid = ~~((left + right) / 2);
//     if (mid === left) break;
//     if (this.list[mid] > seatNumber) {
//       right = mid;
//     } else {
//       left = mid;
//     }
//   }
//   this.list.splice(right, 0, seatNumber);
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

function middle(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] >= n) return arr[left];
  if (arr[right] <= n) return arr[right];
  while (right >= left) {
    if (left === right) break;
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    if (arr[mid] === n) return n;
    if (arr[mid] > n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  if (Math.abs(arr[right] - n) < Math.abs(arr[left] - n)) {
    return arr[right];
  } else {
    return arr[left];
  }
}
function insert(arr, n) {
  if (!arr.length) {
    arr.push(n);
  } else {
    let left = 0;
    let right = arr.length - 1;
    if (arr[left] > n) {
      arr.unshift(n);
      return;
    } else if (arr[right] < n) {
      arr.push(n);
      return;
    }
    while (right >= left) {
      if (left === right) break;
      const mid = ~~((left + right) / 2);
      if (left === mid) break;
      if (arr[mid] > n) {
        right = mid;
      } else {
        left = mid;
      }
    }
    arr.splice(right, 0, n);
  }
}
var closestRoom = function (rooms, queries) {
  const k = queries.length;
  const res = new Array(k);
  queries = queries.map((item, i) => [item[0], item[1], i]);
  queries.sort((a, b) => b[1] - a[1]);
  rooms.sort((a, b) => {
    return b[1] - a[1];
  });
  const ids = [];
  for (let i = 0; i < k; i++) {
    const [id, s, index] = queries[i];
    while (rooms.length && rooms[0][1] >= s) {
      const newId = rooms.shift()[0];
      insert(ids, newId);
    }
    if (!ids.length) {
      res[index] = -1;
      continue;
    } else {
      if (index === 0) {
        console.log(ids);
      }
      res[index] = middle(ids, id);
    }
  }
  return res;
};
const a = [
    [23, 22],
    [6, 20],
    [15, 6],
    [22, 19],
    [2, 10],
    [21, 4],
    [10, 18],
    [16, 1],
    [12, 7],
    [5, 22],
  ],
  b = [
    [12, 5],
    [15, 15],
    [21, 6],
    [15, 1],
    [23, 4],
    [15, 11],
    [1, 24],
    [3, 19],
    [25, 8],
    [18, 6],
  ];
console.log(closestRoom(a, b));
