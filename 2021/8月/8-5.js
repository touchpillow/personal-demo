var removeSubfolders = function (folder) {
  folder.sort();
  const res = [folder[0]];
  const l = folder.length;
  let left = 0;
  for (let i = 1; i < l; i++) {
    if (folder[i].startsWith(`${folder[left]}/`)) {
      continue;
    } else {
      res.push(folder[i]);
      left = i;
    }
  }
  return res;
};
