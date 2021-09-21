var findWords = function (board, words) {
  const tree = {};
  const dfs = (word, tree) => {
    if (!word) {
      tree.isWord = true;
      return;
    }
    if (!tree[word[0]]) {
      tree[word[0]] = {};
    }
    dfs(word.slice(1), tree[word[0]]);
  };
  words.forEach((item) => {
    dfs(item, tree);
  });
  const h = board.length;
  const w = board[0].length;
  const find = (pre, i, j, tree) => {
    if (tree.isWord) {
      set.add(pre);
    }
    if (i < 0 || i >= h) return;
    if (j < 0 || j >= w) return;
    if (board[i][j] === -1) return;
    const v = board[i][j];
    if (!tree[v]) return;
    pre += v;
    board[i][j] = -1;
    find(pre, i + 1, j, tree[v]);
    find(pre, i - 1, j, tree[v]);
    find(pre, i, j + 1, tree[v]);
    find(pre, i, j - 1, tree[v]);
    board[i][j] = v;
  };
  const set = new Set();
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      find("", i, j, tree);
    }
  }
  return [...set];
};
