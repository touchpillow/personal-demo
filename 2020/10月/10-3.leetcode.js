// var ParkingSystem = function (big, medium, small) {
//   this.car1 = 0;
//   this.car1N = big;
//   this.car2 = 0;
//   this.car2N = medium;
//   this.car3 = 0;
//   this.car3N = small;
// };

// /**
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function (carType) {
//   if (this[`car${carType}`] >= this[`car${carType}N`]) return false;
//   this[`car${carType}`]++;
//   return true;
// };
// var alertNames = function (keyName, keyTime) {
//   const l = keyName.length;
//   if (l < 3) return [];
//   const map = new Map();
//   for (let i = 0; i < l; i++) {
//     if (map.get(keyName[i])) {
//       map.get(keyName[i]).push(keyTime[i]);
//     } else {
//       map.set(keyName[i], [keyTime[i]]);
//     }
//   }
//   const res = [];
//   for (const key of map.keys()) {
//     let tempV = map.get(key);
//     if (tempV.length < 3) continue;
//     tempV = tempV
//       .map((item) => new Date(`2020-10-03 ${item}:00`).getTime())
//       .sort((a, b) => a - b);
//     const templ = tempV.length;
//     for (let i = 0; i < templ - 2; i++) {
//       if (tempV[i + 2] - tempV[i] <= 3600000) {
//         res.push(key);
//         break;
//       }
//     }
//   }
//   return res.sort((a, b) => {
//     let l1 = a.length;
//     let l2 = b.length;
//     let i1 = 0,
//       i2 = 0;
//     while (i1 < l1 && i2 < l2) {
//       const v1 = a[i1].charCodeAt();
//       const v2 = b[i2].charCodeAt();
//       if (v1 < v2) return -1;
//       if (v1 > v2) return 1;
//       i1++;
//       i2++;
//     }
//     if (i1 == l1) return -1;
//     return 1;
//   });
// };
// const keyName = [
//     "leslie",
//     "leslie",
//     "leslie",
//     "clare",
//     "clare",
//     "clare",
//     "clare",
//   ],
//   keyTime = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"];
// console.log(alertNames(keyName, keyTime));
var restoreMatrix = function (rowSum, colSum) {
  const h = rowSum.length;
  const w = colSum.length;
  const res = new Array(h).fill("").map(() => new Array(w).fill(0));
  res[0][0] = rowSum[0];
  //   for(let i=1;i<h;i++){
  //       for(let j=0;i+j<){}
  //   }
};
// var busiestServers = function (k, arrival, load) {
//   const aList = new Array(k).fill(0);
//   const aTime = new Array(k).fill(0);
//   const l = arrival.length;
//   let max = 0;
//   let min;
//   for (let i = 0; i < k && i < l; i++) {
//     aList[i]++;
//     aTime[i] = arrival[i] + load[i];
//   }
//   max = 1;
//   for (let i = k; i < l; i++) {
//     min = Math.min(...aTime);
//     if (arrival[i] < min) continue;
//     for (let j = i % k, v = 0; v < k; j = (j + 1) % k, v++) {
//       if (arrival[i] >= aTime[j]) {
//         aTime[j] = arrival[i] + load[i];
//         aList[j]++;
//         max = Math.max(aList[j], max);
//         break;
//       }
//     }
//   }
//   const res = [];
//   for (let i = 0; i < k; i++) {
//     if (aList[i] == max) res.push(i);
//   }
//   return res;
// };
// const k = 2,
//   arrival = [1, 4, 5, 7],
//   load = [3, 2, 7, 8];
// console.log(busiestServers(k, arrival, load));
