// var removeDuplicates = function (s, k) {
//   const l = s.length;
//   const stack = [];
//   let cur = 1;
//   let pre = s[0];
//   for (let i = 1; i < l; i++) {
//     if (pre === "") {
//       cur = 1;
//       pre = s[i];
//     } else if (s[i] === pre) {
//       cur++;
//       if (cur === k) {
//         cur = 0;
//         if (!stack.length) {
//           cur = 0;
//           pre = "";
//         } else {
//           const { c, v } = stack.pop();
//           cur = c;
//           pre = v;
//         }
//       }
//     } else {
//       stack.push({
//         c: cur,
//         v: pre,
//       });
//       cur = 1;
//       pre = s[i];
//     }
//   }
//   stack.push({
//     c: cur,
//     v: pre,
//   });
//   return stack.reduce((pre, item) => `${pre}${item.v.repeat(item.c)}`, "");
// };

//归并，遍历头结点，每次找到当前的最小的头结点
// 时间复杂度 n*m2 n是数组长度，m是单个链表的最大长度 空间复杂度O(1)
var mergeKLists = function (lists) {
  let head = new ListNode();
  const head1 = head;
  while (true) {
    if (lists.every((item) => !item)) break;
    let v = Infinity;
    let i;
    lists.forEach((item, index) => {
      if (item && item.val < v) {
        v = item.val;
        i = index;
      }
    });
    head.next = lists[i];
    lists[i] = lists[i].next;
    head = head.next;
  }
  return head1.next;
};

//归并优化，遍历头结点，每次找到当前的最小的头结点(一个或多个)
// 时间复杂度 n*m2 n是数组长度，m是单个链表的最大长度 空间复杂度O(1)
var mergeKLists = function (lists) {
  let head = new ListNode();
  const head1 = head;
  while (true) {
    if (lists.every((item) => !item)) break;
    let v = Infinity;
    let i = [];
    lists.forEach((item, index) => {
      if (item && item.val < v) {
        v = item.val;
        i.splice(0, Infinity, index);
      } else if (item && item.val == v) {
        i.push(index);
      }
    });
    i.forEach((item) => {
      head.next = lists[item];
      lists[item] = lists[item].next;
      head = head.next;
    });
  }
  return head1.next;
};

//找最长的回文前缀
//时间复杂度 O(n) 空间复杂度O(1)
// var shortestPalindrome = function (s) {
//   const l = s.length;
//   let left = s[0];
//   let right = s[0];
//   let maxL = 1;
//   for (let i = 1; i < l; i++) {
//     left += s[i];
//     right = `${s[i]}${right}`;
//     if (left === right) {
//       maxL = left.length;
//     }
//   }
//   let head = "";
//   for (let i = l - 1; i >= maxL; i--) {
//     head += s[i];
//   }
//   return `${head}${s}`;
// };

//找最长的回文前缀
//时间复杂度 O(n) 空间复杂度O(1)
var shortestPalindrome = function (s) {
  const l = s.length;
  let maxL = 0;
  let reverse = "";
  for (let i = l - 1; i >= 0; i--) {
    reverse += s[i];
  }
  for (let i = l - 1; i >= 0; i--) {
    const s1 = s.slice(0, i + 1);
    const s2 = reverse.slice(l - i - i);
    console.log(i, s1, s2, s3, s4);
    if (s1 === s2) {
      maxL = i + 1;
      break;
    }
  }

  let head = "";
  for (let i = l - 1; i >= maxL; i--) {
    head += s[i];
  }
  return `${head}${s}`;
};
//记录每个单词与单词之间的距离，即不同的字符数量
//类似回溯+剪枝，每次只找距离为1的单词
//时间复杂度O(n2*m), n是字符串数量, m是最短的序列长度
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  if (beginWord.length < 2) return 2;
  let length = Infinity;
  const findDis = (s1, s2) => {
    let count = 0;
    for (let i = 0, l = s1.length; i < l; i++) {
      if (s1[i] !== s2[i]) count++;
    }
    return count;
  };
  wordList = [...new Set(wordList)];
  const search = (currentWord, target, wordList, count = 0) => {
    if (count >= length) return;
    if (!wordList.length) return;
    const res1 = [];
    const res2 = [];
    for (const s of wordList) {
      const dis = findDis(currentWord, s);
      if (dis === 1) {
        res1.push(s);
      } else if (dis > 1) {
        res2.push(s);
      }
    }
    if (res1.includes(target)) {
      length = Math.min(count + 1, length);
      return;
    }
    res1.forEach((item) => {
      search(item, target, res2.slice(), count + 1);
    });
  };

  search(beginWord, endWord, wordList);
  return length == Infinity ? 0 : length + 1;
};
