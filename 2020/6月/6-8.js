// var mergeTwoLists = function (l1, l2) {
//   if (!l1 || !l2) {
//     return l1 || l2;
//   }
//   if (l1.val > l2.val) {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   } else {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   }
// };
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  var res, s;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      s = s || res;
      if (s) {
        s.next = l2;
        s = s.next;
      }
      res = res || l2;
      l2 = l2.next;
    } else {
      s = s || res;
      if (s) {
        s.next = l1;
        s = s.next;
      }
      res = res || l1;
      l1 = l1.next;
    }
  }
  if (s) {
    s.next = l1 || l2;
  } else {
    res.next = l1 || l2;
  }
  return res;
};
l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
console.log(mergeTwoLists(l1, l2));
