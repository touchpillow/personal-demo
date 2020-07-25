/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s;
  const res = new Array(numRows).fill("");
  let i = 0;
  let flag = true;
  while (s.length) {
    res[i] += s[0];
    s = s.substring(1);
    if (i == numRows - 1) {
      flag = false;
    } else if (i == 0) {
      flag = true;
    }
    i += flag ? 1 : -1;
  }
  return res.join("");
};
var convert = (s, numRows) => {
  if (numRows < 2) return s;
  const res = new Array(numRows).fill("");
  const temp = [];
  while (s.length) {
    temp.push(s.substring(0, 2 * numRows - 2));
    s = s.substring(2 * numRows - 2);
  }
  temp.forEach((v, i) => {
    for (let i = 0; i < numRows; i++) {
      if (i == numRows - 1) {
        res[i] += v[i] || "";
      } else {
        res[i] += (v[i] || "") + (v[2 * numRows - 2 - i] || "");
      }
    }
  });
  return res.join("");
};
convert("PAYPALISHIRING", 3);
var aa = (n) => {
  if (!Number.isInteger(n)) return false;
  if (n == 1) return true;
  return aa(n / 2);
};
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n == 1) return true;
  return aa(n);
};
