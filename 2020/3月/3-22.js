class LoadImage {
  //ele :dom元素 src:实际的路径 defaultsrc:占位图的路径 y：距离页面顶端的距离
  constructor(ele, src, defaultsrc, x, y) {
    this.ele = ele;
    this.src = src;
    this.ele.src = defaultsrc;
    this.y = y;
    this.id = Math.random();
  }
  load() {
    const img = new Image();
    img.src = this.src;
    img.onload = () => {
      this.ele.src = this.src;
    };
  }
  loadimg(params) {
    this.load();
    //do anything
  }
}

class Page {
  constructor(ele) {
    this.ele = ele;
    this.imgList = [];
    this.init();
  }
  //注册滚动事件
  init() {
    this.ele.addEventListener("scroll", this.scrollPage);
  }
  //判断哪些图片需要加载
  scrollPage() {
    const currentY = this.ele.clientHeight + this.ele.scrollTop;
    const imgList = this.imgList.filter(item => {
      return item.y <= currentY;
    });
    this.load(imgList);
  }
  //通知图片加载
  load(list) {
    list.forEach(item => {
      item.loadimg("complete");
    });
    list.forEach(item => {
      this.unbind(item.id);
    });
  }
  //注册事件
  componentEvent(img) {
    this.imgList.push(img);
  }
  //注销事件
  unbind(id) {
    const index = this.imgList.findIndex(item => item.id === id);
    this.imgList.splice(index, 1);
  }
}
const imgList = new Array(5).fill("").map(item => new LoadImage());
const page = new Page();
//注册事件
page.componentEvent(...imgList);
class EventCenter {
  constructor() {
    this.event = {};
  }
  listener(eventHandle, eventName) {
    if (this.event[eventName]) {
      this.event[eventName] = [eventHandle];
    } else {
      this.event[eventName].push(eventHandle);
    }
  }
  trigger(eventName, ...params) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(item => {
        item(params);
      });
    }
  }
}
