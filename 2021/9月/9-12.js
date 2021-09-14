// var maxPoints = function (points) {
//   const l = points.length;
//   if (l < 2) return l;
//   const map = new Map();
//   let max = 0;
//   for (let i = 0; i < l; i++) {
//     for (let j = i + 1; j < l; j++) {
//       let s = "";
//       const disx = points[i][0] - points[j][0];
//       const disy = points[i][1] - points[j][1];
//       if (!disx) {
//         s = `x-${points[i][0]}`;
//       } else if (!disy) {
//         s = `y-${points[i][1]}`;
//       } else {
//         const k = disy / disx;
//         const c = points[i][1] - k * points[i][0];
//         s = `${k}-${c}`;
//       }
//       if (!map.has(s)) map.set(s, new Set());
//       map.get(s).add(i);
//       map.get(s).add(j);
//       max = Math.max(max, map.get(s).size);
//     }
//   }
//   return max;
// };
// const a = [
//   [1, 1],
//   [3, 2],
//   [5, 3],
//   [4, 1],
//   [2, 3],
//   [1, 4],
// ];

// console.log(maxPoints(a));
function count2sInRangeAtDigit(num, d, nNum) {
  const pow10 = Math.floor(Math.pow(10, d)); //10^d
  const nextPow10 = Math.floor(pow10 * 10); // 10^d+1
  const right = Math.floor(num % pow10); //余数，长度为d

  const roundDown = Math.floor(num - (num % nextPow10)); //去除d+1余数的整数位
  const roundUp = Math.floor(roundDown + nextPow10);

  const digit = Math.floor((num / pow10) % 10);

  //roundDown/10 的值表示去除对10^d+1长度的整数部分。因为形如001(nNum)xxx的数字必定满足条件

  //数值分为两部分，10^d左边和右边。左边的值是roundDown/10,右边根据当前位的和nNum的大小关系计算

  //如果当前位数小于nNum，说明对10^d+1取余的结果小于nNum，类似003xx小于4，百位小于4，只能往前取,即取roundDown/10

  //等于则加上尾数的3xx部分，算上300，就要+1,也就是roundDown/10 + right + 1

  //当前位数大于nNum，说明3xx部分均取得到，数量是10^d，所以是roundDown/10 + 10^d
  if (digit < nNum) {
    return roundDown / 10;
  } else if (digit == nNum) return roundDown / 10 + right + 1;
  else return roundUp / 10;
}

function count2sInRange(num, nNum) {
  let count = 0;
  const strNum = num.toString();
  for (let digit = 0; digit < strNum.length; digit++) {
    //依次枚举 各位、十位、...10^digit位上数字为nNum时的次数
    const n = count2sInRangeAtDigit(num, digit, nNum);
    console.log("目标输出：", n);
    count += n;
  }

  return count;
}
var countDigitOne = function (n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
    ans +=
      Math.floor(n / (mulk * 10)) * mulk +
      Math.min(Math.max((n % (mulk * 10)) - mulk + 1, 0), mulk);
    mulk *= 10;
  }
  return ans;
};
