// var constructFromPrePost = function (pre, post) {
//   if (pre.length == 0) {
//     return null;
//   }

//   let tmp = pre[0];
//   let index = post.findIndex((item) => item === pre[1]);
//   let root = new TreeNode(tmp);
//   root.left = constructFromPrePost(
//     pre.slice(1, index + 2),
//     post.slice(0, index + 1)
//   );
//   root.right = constructFromPrePost(
//     pre.slice(index + 2),
//     post.slice(index + 1, post.length - 1)
//   );
//   return root;
// };
var findAndReplacePattern = function (words, pattern) {
  const getS = (item) => {
    const map = new Map();
    let c = 1;
    let res = "";
    for (const s of item) {
      if (!map.get(s)) {
        map.set(s, c++);
      }
      res += `${map.get(s)}-`;
    }
    return res;
  };
  const copyWords = words.map(getS);
  const cPattern = getS(pattern);
  return words.filter((i, index) => {
    return cPattern === copyWords[index];
  });
};
