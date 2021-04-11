// var arraySign = function (nums) {
//   let c1 = 0;
//   const l = nums.length;
//   for (let i = 0; i < l; i++) {
//     if (nums[i] === 0) return 0;
//     if (nums[i] < 0) {
//       c1++;
//     }
//   }
//   return c1 % 2 ? -1 : 1;
// };
// const nums = [-1, 1, -1, 1, -1];
// console.log(arraySign(nums));
// var findTheWinner = function (n, k) {
//   const res = new Array(n);
//   for (let i = 1; i <= n; i++) {
//     res[i - 1] = i;
//   }
//   let c = 1;
//   let pre = -1;
//   while (c < n) {
//     c++;
//     let v1 = 0;
//     while (v1 !== k) {
//       pre = (pre + 1) % n;
//       if (res[pre] !== 0) {
//         v1++;
//       }
//     }

//     res[pre] = 0;
//   }
//   return res.filter((i) => i !== 0)[0];
// };
// console.log(findTheWinner(6, 5));
var minSideJumps = function (obstacles) {
  const l = obstacles.length;
  //res[0,1,2]表示对应赛道到达某个点时的横跳次数
  //压缩了一下
  const res = [1, 0, 1];
  for (let i = 1; i < l; i++) {
      //先将障碍物所在的赛道的值设置为一个不可能的值
    if (obstacles[i] !== 0) {
      res[obstacles[i] - 1] = l + 2;
    }
    //如果当前赛道的当前点没有障碍物，那么计算从当前赛道前一个位置过来或者从另一个赛道横跳过来
    if (obstacles[i] !== 1) {
      res[0] = Math.min(res[0], res[1] + 1, res[2] + 1);
    }
    if (obstacles[i] !== 2) {
      res[1] = Math.min(res[0] + 1, res[1], res[2] + 1);
    }
    if (obstacles[i] !== 3) {
      res[2] = Math.min(res[0] + 1, res[1] + 1, res[2]);
    }
  }
  return Math.min(...res);
};
// const obstacles = [0, 2, 1, 0, 3, 0];
// console.log(minSideJumps(obstacles));
var MKAverage = function (m, k) {
  this.m = m;
  this.k = k;
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  if (this.data.length >= this.m) {
    this.data.shift();
  }
  this.data.push(num);
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.data.length < this.m) return -1;
  this.data.sort((a, b) => a - b);
  let sum = 0;
  for (let i = k; i < this.m - this.k; i++) {
      sum+=
  }
};
