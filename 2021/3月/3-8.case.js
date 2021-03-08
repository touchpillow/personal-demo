//1.数组求最大和
/**
 * 动态规划初版 时间复杂度 O(n) 空间复杂度O(n)
 * dp[i]表示以nums[i]结尾的子数组的最大和
 * @param {number[]} arr 数组
 * @param {number} target
 * @returns
 */
const maxSum1 = (nums) => {
  const l = nums.length;
  const dp = new Array(l);
  dp[0] = nums[0];
  for (let i = 1; i < l; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
  }
  return Math.max(...dp);
};
/**
 * 动态规划优化 时间复杂度 O(n) 空间复杂度O(1)
 * cur表示以当前元素结尾的子数组的最大和
 * @param {number[]} arr 数组
 * @param {number} target
 * @returns
 */
const maxSum2 = (nums) => {
  let max = nums[0];
  let cur = nums[0];
  const l = nums.length;
  for (let i = 1; i < l; i++) {
    if (cur < 0) {
      cur = nums[i];
    } else {
      cur += nums[i];
    }
    max = Math.max(cur, max);
  }
  return max;
};

//2. 二叉树的路径问题
/**
 * 二叉树向下遍历，记录每个节点，从根节点到它本身时的和即可 。借用栈完成,bfs或者dfs都可以，防止内存溢出
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {*} root 根节点
 * @param {*} N 目标值
 */
const treeUrl = (root, N) => {
  if (!root) return false;
  const stack = [
    {
      pre: 0,
      node: root,
    },
  ];
  while (stack.length) {
    const item = stack.shift();
    if (!item.node) continue;
    if (N === item.pre + item.node.val) return true;
    stack.push({
      pre: item.pre + item.node.val,
      node: item.node.left,
    });
    stack.push({
      pre: item.pre + item.node.val,
      node: item.node.right,
    });
  }
  return false;
};

//3. N级台阶，一次只能跳3级或者4级或者5级，总共多少种跳法
/**
 * 斐波那契数列的变种  时间复杂度O(n)，空间复杂度O(n)
 * @param {number} N 台阶总数
 */
const urlNum1 = (N) => {
  const dp = new Array(N + 1).fill(0);
  dp[3] = 1;
  dp[4] = 1;
  dp[5] = 1;
  for (let i = 6; i <= N; i++) {
    dp[i] = dp[i - 5] + dp[i - 4] + dp[i - 3];
  }
  console.log(dp);
  return dp[N];
};
/**
 *  时间复杂度O(n)，空间复杂度O(1)
 * @param {number} N 台阶总数
 */
const urlNum2 = (N) => {
  if (N < 3) return 0;
  let l1 = 0;
  let l2 = 0;
  let l3 = 1;
  let l4 = 1;
  let l5 = 1;
  for (let i = 6; i <= N; i++) {
    [l1, l2, l3, l4, l5] = [l2, l3, l4, l5, l1 + l2 + l3];
  }
  return l5;
};

//4. sum函数
function sum(...nums) {
  const sumV = nums.reduce((a, b) => a + b);
  sum.prototype.v += sumV;
  return sum;
}
sum.valueOf = function () {
  return sum.prototype.v;
};
sum.prototype.v = 0;
console.log(sum(1, 2)(2).valueOf());

const sum2 = (...arg) => {
  const v = arg.reduce((a, b) => a + b);
  if (arg.length > 1) {
    return sum2.bind(this, v);
  }
  return v;
};
sum2(1, 2)(3)();

//5.链表环检测
/**
 * 链表是否有环，最简单的方式就是快慢指针 也可以借用数组，不过太耗空间了
 * @param {} root
 */
const isCircle = (root) => {
  let fast = root;
  let slow = root;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};

//6.[1,2,2,3,1] 输出字符串

/* <ul>
  <li deep="1">
    <ul>
      <li deep="2"></li>
      <li deep="2">
        <ul>
          <li deep="3"></li>
        </ul>
      </li>
      <li deep="2"></li>
    </ul>
  </li>
  <li deep="1"></li>
</ul>; */
/**
 * 单调栈即可
 * @param {number[]} arr
 */
const generateNode = (arr) => {
  arr.push(0);
  const getUl = (pre = "") => {
    return `\n<${pre}ul>${pre ? "\n" : ""}`;
  };
  const getLiStart = (i, level = 0) => {
    return `\n<li deep="${i}">`;
  };
  const getLiEnd = (level = 0) => {
    return `</li>\n`;
  };
  let pre = getUl().repeat(arr[0]);
  pre += getLiStart(arr[0]);
  const stack = [arr[0]];
  const l = arr.length;
  for (let i = 1; i < l; i++) {
    if (arr[i] === arr[i - 1]) {
      pre += getLiEnd();
    } else if (arr[i] > arr[i - 1]) {
      pre += getUl().repeat(arr[i] - arr[i - 1]);
    } else {
      while (stack.length && stack[stack.length - 1] >= arr[i]) {
        pre += getLiEnd();
        pre += getUl("/").repeat(stack[stack.length - 1] - arr[i]);
        stack.pop();
      }
    }
    if (arr[i] !== 0) {
      pre += getLiStart(arr[i]);
      if (!stack.length || stack[stack.length - 1] !== arr[i]) {
        stack.push(arr[i]);
      }
    }
  }
  return pre;
};
console.log(generateNode([2, 2, 2, 3, 2, 1]));

//7. 判断回文数
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  } else if (x <= 9) {
    return true;
  }
  x = `${x}`;
  let left = 0,
    right = x.length - 1;
  while (right > left) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome(121));

//8. 解析模板字符串
//单调栈 不考虑嵌套和运算
const parseTemplate = (str, data) => {
  let pre = "";
  const l = str.length;
  for (let i = 0; i < l; i++) {
    if (str[i] === "{") {
      const left = i + 1;
      let right = i + 1;
      while (str[right] !== "}" && right < l) {
        right++;
      }
      if (right === l) {
        pre += str.slice(i);
        break;
      } else {
        pre += data[str.slice(left, right)];
        i = right;
      }
    } else {
      pre += str[i];
    }
  }
  return pre;
};
console.log(parseTemplate("12{da}3{a}", { da: 5, a: 6 }));

//9. 返回第K大的树
//维护固定长度的栈，栈底是最小的元素，栈顶最大。
//每次推入新数字时，和栈顶元素比较，大于等于则不推入，小于则推入并删除最后一个元素
/**
 * k从1开始计数
 * @param {*} arr
 * @param {*} k
 */
const targetNum = (arr, k) => {
  const stack = [];
  for (const n of arr) {
    const index = stack.findIndex((item) => item >= n);
    if (index < 0) {
      stack.push(n);
    } else {
      stack.splice(index, 0, n);
    }
    if (stack.length > k) {
      stack.pop();
    }
  }
  return stack[k - 1];
};

//10.element.js
//先按照示例，也是递归 假定都是双标签元素 单标签写个映射就行
const createElement = (...params) => {
  if (params.length === 1) return params[0];
  const [tag, attribute, children] = params;
  const attributeStr = Object.entries(attribute).reduce((pre, [key, value]) => {
    return `${pre} ${key}:${value} `;
  }, "");
  return `<${tag} ${attributeStr}>${children
    .map((item) => createElement(...item))
    .join("")}</${tag}>`;
};
createElement("");

//11.公共数字组成的数组
// 可以是遍历+includes
const commoneMenmbers = (a, b) => {
  return a.filter((i) => b.includes(i));
};
//注意排序，所以可以用双指针
//优化的点：去除重复数字
const commoneMenmbers2 = (a, b) => {
  const l1 = a.length;
  const l2 = a.length;
  let i1 = 0;
  let i2 = 0;
  const res = [];
  //跳过重复数字
  while (i1 < l1 || i2 < l2) {
    while (a[i1] === a[i1 + 1]) {
      i1++;
    }
    while (b[i2] === b[i2 + 1]) {
      i2++;
    }
    if (a[i1] < b[i2]) {
      i1++;
    } else if (a[i1] > b[i2]) {
      i2++;
    } else {
      res.push(a[i1]);
      i1++;
      i2++;
    }
  }
  return res;
};

//12.promise.all
//假定数组成员都是Promise实例
const promiseAll = (arrs) => {
  const l = arrs.length;
  let count = 0;
  const res = new Array(l);
  return new Promise((resolve, reject) => {
    arrs.forEach((item, index) => {
      item
        .then((v) => {
          res[index] = v;
          count++;
          if (count === l) {
            resolve(res);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};
