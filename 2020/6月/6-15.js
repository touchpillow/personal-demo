var levelOrderBottom = function (root) {
  if (!root) return root;
  var v = [root],
    r = [];
  while (true) {
    var a = [],
      t = [];
    v.forEach((i) => {
      t.push(i.val);
      if (i.left) {
        a.push(i.left);
      }
      if (i.right) {
        a.push(i.right);
      }
    });
    r.unshift(t);
    if (a.length) {
      v = a;
    } else {
      break;
    }
  }
  return r;
};
