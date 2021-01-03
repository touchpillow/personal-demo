<template>
  <div class="item-content" ref="itemContent">
    <span
      class="item-id"
      @dragend="dragEndHandle"
      draggable
      @drag="dragHandle"
      @dragstart="dragStartHandle"
    >{{index}}</span>
    <span class="item-text">{{item.text}}</span>
  </div>
</template>
<script>
export default {
  props: ["item", "index"],
  methods: {
    dragEndHandle(e) {},
    dragStartHandle(e) {
      // e.preventDefault();
      const customEvent = new DragEvent("dragstart", {
        ...e.dataTransfer
      });
      e.dataTransfer.setDragImage(
        this.$refs.itemContent.parentElement,
        e.offsetX,
        this.$refs.itemContent.parentElement.clientHeight / 2
      );
      // this.$refs.itemContent.parentElement.dispatchEvent(customEvent);
      // this.$emit("dragEvent", customEvent);
    },
    dragHandle(e) {
      e.preventDefault();
      // e.stopPropagation();
      const customEvent = new DragEvent("drag", {
        ...e.dataTransfer
      });
      this.$refs.itemContent.parentElement.dispatchEvent(customEvent);
    }
  }
};
</script>
<style scoped>
.item-text {
  word-break: break-all;
  text-align: left;
}
.item-id {
  margin-right: 16px;
  cursor: move;
}
.item-content {
  display: flex;
  align-items: center;
  line-height: 18px;
  padding: 24px 0;
}
</style>