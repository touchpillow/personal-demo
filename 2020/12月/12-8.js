var rand10 = function () {
  const n = rand7();
  return (n * 10) / 7;
};
var rand10 = function () {
  let result = rand7();
  while (result > 5) result = rand7();
  // 等概率1-6
  let temp = rand7();
  while (temp === 7) temp = rand7();
  return temp <= 3 ? result : result + 5;
};
