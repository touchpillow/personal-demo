class PageControl {
  constructor() {
    this.userInfo = {};
    this.init();
  }
  init() {
    this.initUserInfo();
  }
  initUserInfo() {
    // 公共接口 get userInfo
    //example: this.userInfo=await geiUserInfo()..
  }
  initTableData() {
    //可以为空
  }
  initCardData() {
    //可以为空
  }
}
class Page1 extends PageControl {
  constructor() {
    super();
    //...
  }
  initTableData() {
    // page1的获取表格数据的接口
  }
  initCardData() {
    //page1的获取卡片数据的接口
  }
}
class Page2 extends PageControl {
  constructor() {
    super();
    //...
  }
  initTableData() {
    // page2的获取表格数据的接口
  }
  initCardData() {
    //page2的获取卡片数据的接口
  }
}
const page1 = new Page1();
const page2 = new Page2();
// function getWeekDay(date) {
//   const day = new Date(date).getDay();
//   if (day === 0) {
//     return "周天";
//   } else if (data === 1) {
//     return "周一";
//   } else if (data === 2) {
//     return "周二";
//   } else if (data === 3) {
//     return "周三";
//   } else if (data === 4) {
//     return "周四";
//   } else if (data === 5) {
//     return "周五";
//   } else {
//     return "周六";
//   }
// }
function getWeekDay(date) {
  const day = new Date(date).getDay();
  const weekdayConfig = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六"
  };
  return `周${weekdayConfig[day]}`;
}
const scoreConfig = [
  {
    range: [80, 100],
    appraise: "优秀"
  },
  {
    range: [60, 80],
    appraise: "良好"
  },
  {
    range: [0, 60],
    appraise: "不合格"
  }
];
function inRange(min, max, value) {
  return value <= max && value >= min;
}
function getAppraise(score) {
  const item = scoreConfig.find(item =>
    inRange(item.range[0], item.range[1], score)
  );
  if (!item) {
    return new Error("分数无效");
  }
  return item.appraise;
}
