// var secondHighest = function (s) {
//   let a = -1;
//   let b = -2;
//   for (const n of s) {
//     const v = Number(n);
//     if (Number.isNaN(v)) {
//       continue;
//     } else {
//       if (v > a) {
//         [a, b] = [v, a];
//       } else if (v !== a && v > b) {
//         b = v;
//       }
//     }
//   }
//   return b >= 0 ? b : -1;
// };
// const s = "abc1111";
// console.log(secondHighest(s));
// var AuthenticationManager = function (timeToLive) {
//   this.time = timeToLive;
//   this.token = new Map();
// };

// /**
//  * @param {string} tokenId
//  * @param {number} currentTime
//  * @return {void}
//  */
// AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
//   this.token.set(tokenId, currentTime + this.time);
// };

// /**
//  * @param {string} tokenId
//  * @param {number} currentTime
//  * @return {void}
//  */
// AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
//   if (!this.token.has(tokenId)) return;
//   if (this.token.get(tokenId) <= currentTime) return;
//   this.token.set(tokenId, currentTime + this.time);
// };

// /**
//  * @param {number} currentTime
//  * @return {number}
//  */
// AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
//   let c = 0;
//   for (const [token, time] of this.token.entries()) {
//     if (time > currentTime) c++;
//   }
//   return c;
// };
var getMaximumConsecutive = function (coins) {
  const l = coins.length;
  coins.reduce((a, b) => a + b, 0);
  let res = 0;
  for (let i = 0; i < l; i++) {
    if (coins[i] <= res + 1) {
      res += coins[i];
    } else {
      break;
    }
  }
  return res;
};
const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};
var maxScore = function (nums) {
  nums.sort((a, b) => b - a);
  const value = [];
  const l1 = nums.length;
  for (let i = 0; i < l1 - 1; i++) {
    for (let j = i + 1; j < l1; j++) {
      value.push([i, j, gcd(nums[i], nums[j])]);
    }
  }
  value.sort((a, b) => a[2] - b[2]);
  if (new Set(value.map((i) => i[2])).size === 1) {
    let c = 0;
    for (let i = 1; i <= l1 / 2; i++) {
      c += i * value[0][2];
    }
    return c;
  }
  let res = 0;
  const l = value.length - 1;
  let right = l;
  let c = 0;
  while (right >= 0 && value[right][2] >= value[l][2]) {
    c++;
    right--;
  }
  const set = new Set();
  const dfs = (level, index, pre = 0) => {
    while (set.has(value[index][0]) || set.has(value[index][1])) {
      index--;
    }
    if (level === 1) {
      res = Math.max(res, pre + level * value[index][2]);
      return;
    }
    set.add(value[index][0]);
    set.add(value[index][1]);
    dfs(level - 1, l, pre + level * value[index][2]);
  };
  for (let i = 0; i < l / 2; i++) {
    dfs(l1 / 2, l - i);
    set.clear();
  }

  return res;
};
const a = [878394, 878394, 878394, 878394];
console.log(maxScore(a));
