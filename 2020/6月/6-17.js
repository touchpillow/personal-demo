var isBalanced = function (root) {
  if (!root) return true;
  const a = (v) => {
    if (!v) return 0;
    return Math.max(a(v.left), a(v.right)) + 1;
  };

  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(a(root.left) - a(root.right)) < 2
  );
};

var fn = (sums, s) => {
  var stack = [];
  sums.forEach((i) => {
    var l = stack.length;
    if (!l) {
      stack.push(-1 * i);
      stack.push(i);
    }
    while (l) {
      var item = stack.shift();
      stack.push(item + i);
      stack.push(item - i);
      l--;
    }
  });
  return stack.filter((i) => i === s).length;
};
var a = [1, 1, 1, 1, 1],
  b = 3;
var fn = (sums, s) => {
  if (sums.length == 1) {
    return Math.abs(s) === sums[0] ? 1 : 0;
  }
  var i = sums.pop();
  return fn(sums.slice(0), s + i) + fn(sums.slice(0), s - i);
};
console.log(fn(a, b));
