<template>
  <div class="drag-container">
    <div
      class="drag-item"
      ref="dragItem"
      v-for="(item,index) in list"
      :key="`${item.text}`"
      :style="getTop(item.id)"
      @dragstart.stop="dragStartHandle(item.id)"
      @dragover="dragoverHandle($event,item.id)"
      @dragend="dragEnd"
    >
      <component
        :is="comName"
        :index="item.id"
        :key="item.id"
        @hook:mounted="getHeight(item.id,index)"
        :item="item"
      ></component>
    </div>
  </div>
</template>
<script>
import dragContent from "./dragContent";
export default {
  data() {
    return {
      curDrag: -1,
      heightMap: {}
    };
  },
  props: ["comName", "list"],
  components: {
    dragContent
  },
  methods: {
    dragEnd() {
      this.curDrag = -1;
    },
    dragStartHandle(id) {
      console.log(123);
      this.curDrag = id;
    },
    dragoverHandle(e, id) {
      console.log(111);
      e.preventDefault();
      if (this.curDrag === id) return;
      const target = e.target;
      const height = target.clientHeight;
      const isTopPart = e.offsetY / height >= 0.5;
      const curDragNodeIndex = this.list.findIndex(
        item => item.id === this.curDrag
      );
      const curDragoverNodeIndex = this.list.findIndex(item => item.id === id);
      // console.log(
      //   this.curDrag,
      //   curDragNodeIndex,
      //   curDragoverNodeIndex,
      //   isTopPart
      // );
      if (
        (curDragNodeIndex < curDragoverNodeIndex && isTopPart) ||
        (curDragNodeIndex > curDragoverNodeIndex && !isTopPart)
      ) {
        [this.list[curDragNodeIndex], this.list[curDragoverNodeIndex]] = [
          this.list[curDragoverNodeIndex],
          this.list[curDragNodeIndex]
        ];
        this.list.push();
      }
    },
    getTop(id) {
      return {
        top: `${this.topMap[id]}px`,
        opacity: id === this.curDrag ? "0.3" : "1"
        // height: `${this.heightMap[id]}px`
      };
    },
    getHeight(id, index) {
      this.$set(
        this.heightMap,
        id,
        this.$refs.dragItem[index].children[0].clientHeight
      );
    }
  },
  computed: {
    topList() {
      const l = this.list.length;
      const list = new Array(l).fill(0);
      for (let i = 1; i < l; i++) {
        list[i] = list[i - 1] + this.heightMap[this.list[i - 1].id];
      }
      return list;
    },
    topMap() {
      return this.topList.reduce((map, item, index) => {
        map[this.list[index].id] = item;
        return map;
      }, {});
    }
  }
};
</script>
 <style scoped>
.drag-container {
  width: 100%;
  height: 100%;
}
.drag-item {
  position: absolute;
  left: 0;
  top: 0;
  transition: top 0.5s ease-in-out;
}
.item-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-dialog {
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>