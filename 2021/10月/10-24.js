var longestDiverseString = function (a, b, c) {
  const list = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];
  list.sort((a, b) => {
    return a[1] - b[1];
  });
  if ((list[0][1] + list[1][1] + 1) * 2 < list[2][1]) {
    list[2][1] = (list[0][1] + list[1][1] + 1) * 2;
  }
  let res = "";
  while (list[0][1] || list[1][1] || list[2][1]) {}
};
