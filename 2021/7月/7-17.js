// var maxAbsValExpr = function (arr1, arr2) {};

var alphabetBoardPath = function (target) {
  const map = new Map([["a", [0, 0]]]);
  for (let i = 1; i < 26; i++) {
    const s = String.fromCharCode(97 + i);
    map.set(s, [~~(i / 5), i % 5]);
  }
  let x = 0,
    y = 0;
  const repeatS = (s, n) => {
    return s.repeat(Math.abs(n));
  };
  const getS = (initX, initY, targetX, targetY) => {
    const offsetX = targetX - initX;
    const offsetY = targetY - initY;
    x = targetX;
    y = targetY;
  };
  return [].reduce.call(
    target,
    (pre, item) => {
      return pre + getS(x, y, ...map.get(item));
    },
    ""
  );
};
console.log(alphabetBoardPath("zb"));
