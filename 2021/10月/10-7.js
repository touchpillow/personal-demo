var maxNumber = function (nums1, nums2, k) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const index1 = new Array(l1);
  const index2 = new Array(l2);
  index1[l1 - 1] = l1 - 1;
  index2[l2 - 1] = l2 - 1;
  for (let i = l1 - 2; i >= 0; i--) {
    if (nums1[i] >= nums1[index1[i + 1]]) {
      index1[i] = i;
    } else {
      index1[i] = index1[i + 1];
    }
  }
  for (let i = l2 - 2; i >= 0; i--) {
    if (nums2[i] >= index2[i + 1][0]) {
      index2[i] = [nums2[i], i];
    } else {
      index2[i] = [];
      index2[i][0] = index2[i + 1][0];
      index2[i][1] = index2[i + 1][1];
    }
  }
  index1.push([-1, l1]);
  index2.push([-1, l2]);
  const res = [];
  let i1 = 0,
    i2 = 0;
  while (k--) {
    if (index1[i1][0] >= index2[i2][0]) {
      res.push(index1[i1][0]);
      i1 = index1[i1][1] + 1;
    } else {
    }
  }
};
