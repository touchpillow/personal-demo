class Command {
  constructor() {
    this.eventList = [];
  }
  doAction() {
    this.doEvent();
  }
  doEvent() {
    this.eventList
      .map(item => {
        return new Promise(res => {
          item.event();
          res();
        });
      })
      .reduce((res, item) => res.then(item), Promise.resolve());
  }
  findEventIndex(name) {
    return this.eventList.findIndex(item => item.name === name);
  }
  addEvent(name, fun) {
    const index = this.findEventIndex(name);
    if (index < 0) {
      this.eventList.push({
        name,
        event: fun
      });
    } else {
      this.eventList[index].event = fun;
    }
  }
  removeEvent(name) {
    const index = this.findEventIndex(name);
    if (index >= 0) {
      this.eventList.splice(index, 1);
    }
  }
}
const a = new Command();
a.addEvent("fn", () => {
  console.log(111);
});
a.addEvent("fc", () => {
  console.log(222);
});
a.addEvent("fn", () => {
  console.log(333);
});
a.doAction();
