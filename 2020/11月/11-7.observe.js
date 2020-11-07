const content = document.querySelector(".content");
//观察器的配置
const option = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
  //   attributeFilter: ["class"],
  attributeOldValue: true,
  characterDataOldValue: true,
};

/**
 * 属性变化之后触发的回调函数
 * @param {Array<MutationRecord>} mutationsList 触发的属性变化记录，是一个数组
 * @param {MutationObserver} observer 观察者
 */
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    console.log("微任务----observe");
  }
};

//初始化监听器
const observer = new MutationObserver(callback);

//开始观察
observer.observe(content, option);

//修改dom属性
// content.classList.add("new-class");
content.setAttribute("aaaa", 2);
window.setTimeout(() => {
  console.log("宏任务");
}, 0);
console.log("同步");
Promise.resolve().then(() => {
  console.log("微任务---promise");
});

//停止观察
// observer.disconnect();
