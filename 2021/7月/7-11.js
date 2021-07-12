var pathInZigZagTree = function (label) {
  let level = Math.ceil(Math.log2(label + 1));
  const stack = [label];
  while (level > 1) {
    level--;
    label = ~~(label / 2);

    label = Math.pow(2, level - 1) + Math.pow(2, level) - label - 1;
    stack.unshift(label);
  }
  return stack;
};
console.log(pathInZigZagTree(26));
