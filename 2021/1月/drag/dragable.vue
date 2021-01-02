<template>
  <div class="page">
    <div class="list flex -column pr">
      <drag-com comName="dragContent" :list="list"></drag-com>
    </div>
  </div>
</template>
<script>
import dragCom from "./dragCom";
export default {
  components: {
    dragCom
  },
  data() {
    return {
      curDrag: -1,
      list: [
        {
          id: 1,
          text: "昨夜重楼高锁，酒醒帘幕低垂，去年春恨却来迟"
        },
        {
          id: 2,
          text: "落花人独立，微雨燕双飞"
        },
        {
          id: 3,
          text: "记得小苹初见，两重心字罗衣，琵琶弦上说相思"
        },
        {
          id: 4,
          text: "当时明月在，曾照彩云归"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style  scoped>
.pr {
  position: relative;
}
.list {
  width: 300px;
}
.pa {
  position: absolute;
  left: 0;
}
.list-item {
  height: 36px;
  align-items: center;
  transition: all 0.5s linear;
}
.full-w {
  width: 100%;
}
.full-h {
  height: 100%;
}
.flex {
  display: flex;
}
.flex.-column {
  flex-direction: column;
}

.page {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 24px;
}
</style>