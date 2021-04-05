/**
 * 1403. 非递增顺序的最小子序列
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  if (nums.length === 1) return nums;
  const len = nums.length;
  let sortNums = nums.sort((a, b) => a - b);
  const allSum = sortNums.reduce((a, b) => a + b, 0);
  // 前缀和
  // let frontSum = allSum,
  // 尾缀和
  behindSum = 0;
  const res = [];
  while (behindSum <= allSum - behindSum) {
    const last = nums.pop();
    res.push(last);
    behindSum += last;
  }
  // for (let i = len - 1; i >= 0; i--) {
  //   frontSum = frontSum - nums[i];
  //   behindSum = behindSum + nums[i];
  //   if (frontSum < behindSum) {
  //     return sortNums.slice(i).reverse();
  //   }
  // }
  // for(){}
};

/**
 * 1217. 玩筹码
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChipsError = function (position) {
  // 1 2 3 4 === 3:2
  // 1 2 3 4 5 6 === 6:3
  // 1 2 3 4 5 6 7 === 4:4  5:3 6:4 7:3

  // if(position.length === 1) return 0
  // if(position.length === 2 || position.length === 3) return 1
  return ~~(position.length / 2);
};
var minCostToMoveChips = function (position) {
  const len = position.length;
  //  偶数位置 奇数位置
  let v0 = 0,
    v1 = 0;
  for (let i = 0; i < len; i++) {
    if (position[i] % 2) {
      // 奇数位置筹码
      ++v1;
    } else ++v0;
  }
  return v0 > v1 ? v1 : v0;
};

/**
 * 1518. 换酒问题
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = 0,
    all = 0;
  while (numBottles + empty >= numExchange) {
    // 先喝掉全部的酒
    all += numBottles;
    // 之前剩余的的空酒瓶 + 当次喝过后增加的空酒瓶
    empty += numBottles;
    // 空酒瓶兑换可以喝的酒
    numBottles = ~~(empty / numExchange);
    // 不能够全部兑换完，剩余的空酒瓶
    empty = empty % numExchange;
  }
  return all + numBottles;
};

/**
 * 1725. 可以形成最大正方形的矩形数目
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let k = 0,
    maxLen = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let [l, w] = rectangles[i];
    const min = Math.min(l, w);
    if (k === min) ++maxLen;
    if (k < min) {
      k = min;
      maxLen = 1;
    }
  }
  return maxLen;
};

/**
 * 122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0;

  prices.slice(1).reduce((pre, cur) => {
    if (cur > pre) sum += cur - pre;
    return cur;
  }, prices[0]);
  return sum;
};

/**
 * 874. 模拟行走机器人
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
// 不知道错在哪里了
var robotSimError = function (commands, obstacles) {
  const len = commands.length;
  let map = new Map(),
    x = 0,
    y = 0,
    // 1面向北 2面向东 3面向南 4面向西
    d = 1;
  const position = [0, 0];
  for (let i = 0; i < obstacles.length; i++) {
    const [xi, yi] = obstacles[i];
    map.set(`${xi},${yi}`, true);
  }
  const v = {
    "-2": -1,
    "-1": 1,
  };
  for (let i = 0; i < len; i++) {
    const step = commands[i];
    if (step === -2 || step === -1) {
      d = Math.max(1, (d + v[step] + 5) % 5);
      d = (d + v[step] + 4) % 4;
      // // 左转90
      // if (d === 1) d = 4;
      // else if (d === 2) d = 1;
      // else if (d === 3) d = 2;
      // else if (d === 4) d = 3;
      // } else if (step === -1) {
      // // 右转90
      // if (d === 1) d = 2;
      // else if (d === 2) d = 3;
      // else if (d === 3) d = 4;
      // else if (d === 4) d = 1;
    } else if (step >= 1 && step <= 9) {
      // 向前移动
      const keyIndex = {
        1: 1,
        2: 0,
        3: 1,
        4: 0,
      };
      const valuesIndex = {
        1: 1,
        2: 1,
        3: -1,
        4: -1,
      };
      // if (!map.has(`${x},${y + 1}`)) {
      //   break;
      // }
      position[keyIndex[d]] += valuesIndex[d];
      if (map.has(position.join())) {
        position[keyIndex[d]] -= valuesIndex[d];
        break;
      }
      for (let j = 1; j <= step; j++) {
        // 1面向北 2面向东 3面向南 4面向西
        // if (d === 1) {
        //   if (!map.has(`${x},${y + 1}`)) ++y;
        //   else break;
        // }
        // if (d === 2) {
        //   if (!map.has(`${x + 1},${y}`)) ++x;
        //   else break;
        // }
        // if (d === 3) {
        //   if (!map.has(`${x},${y - 1}`)) --y;
        //   else break;
        // }
        // if (d === 4) {
        //   if (!map.has(`${x - 1},${y}`)) --x;
        //   else break;
        // }
      }
    }
  }
  return x * x + y * y;
};

/**
 * 944. 删列造序
 * @param {string[]} strs
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const len = strs.length,
    col = strs[0].length;
  let num = 0;
  for (let c = 0; c < col; c++) {
    let pre = "a";
    for (let n = 0; n < len; n++) {
      const s = strs[n][c];
      if (s < pre) {
        ++num;
        break;
      }
      pre = s;
    }
  }
  return num;
};

/**
 * 1758. 生成交替二进制字符串的最少操作数
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let num1 = 0,
    pre1 = s[0],
    num2 = 0,
    pre2 = +!+s[0] + "";

  // 比较 0101 1010 交换次数的大小
  // "110010"
  //  101010
  // "10010100"
  //  10101010
  //  01010101
  for (let i = 1; i < s.length; i++) {
    if (s[i] === pre1) {
      num1++;
      pre1 = +!+pre1 + "";
    } else pre1 = s[i];
  }
  for (let i = 0; i < s.length; i++) {
    console.log(i, s[i], pre2);
    if (s[i] !== pre2) {
      num2++;
      pre2 = s[i];
    } else pre2 = +!+pre2 + "";
  }
  // console.log(num1,num2)
  return Math.min(num1, num2);
};
var minOperations = function (s) {
  const l = s.length;
  // 0的数量
  let c0 = 0;
  //奇数位上0的数量
  let position = 0;
  for (let i = 0; i < l; i++) {
    if (i === "0") {
      c0++;
      if (i % 2) {
        position++;
      }
    }
  }
  const odd = ~~(l / 2);
  const even = ~~((l + 1) / 2);
  let pattern1 = 0;
  pattern1 += odd - position;
  pattern1 += c0 - position;
  //
  let patter2 = 0;
  patter2 += even - (c0 - position);
  patter2 += position;
  return Math.min(patter2, pattern1);
  // let num1 = 0,
  //   pre1 = s[0],
  //   num2 = 0,
  //   pre2 = +!+s[0] + "";

  // // 比较 0101 1010 交换次数的大小
  // // "110010"
  // //  101010
  // // "10010100"
  // //  10101010
  // //  01010101
  // for (let i = 1; i < s.length; i++) {
  //   if (s[i] === pre1) {
  //     num1++;
  //     pre1 = +!+pre1 + "";
  //   } else pre1 = s[i];
  // }
  // for (let i = 0; i < s.length; i++) {
  //   console.log(i, s[i], pre2);
  //   if (s[i] !== pre2) {
  //     num2++;
  //     pre2 = s[i];
  //   } else pre2 = +!+pre2 + "";
  // }
  // // console.log(num1,num2)
  // return Math.min(num1, num2);
};

/**
 * 1710. 卡车上的最大单元数
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// 不知道错哪了
var maximumUnits = function (boxTypes, truckSize) {
  // let len = boxTypes.length;
  // // 第i个箱子可用箱子容量为j的最大单元总数
  // let dp = new Array(len + 1)
  //   .fill(0)
  //   .map((_) => new Array(truckSize + 1).fill(0));
  // // 第i类箱子
  // for (let i = 1; i <= len; i++) {
  //   const [num, unit] = boxTypes[i - 1];
  //   // 可用箱子数量
  //   for (let j = 1; j <= truckSize; j++) {
  //     // 取当前箱子的数量
  //     for (let k = 0; k <= num && k <= j; k++) {
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - k] + k * unit);
  //     }
  //   }
  // }
  // console.log(dp);
  // return dp[len][truckSize];
  const l = boxTypes.length;
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  let c = 0;
  while (truckSize > 0 && boxTypes.length) {
    if (boxTypes[0][0] >= truckSize) {
      c += truckSize * boxTypes[0][1];
      truckSize = 0;
    } else {
      c += boxTypes[0][0] * boxTypes[0][1];
      truckSize -= boxTypes[0][0];
    }
  }
  return c;
};
