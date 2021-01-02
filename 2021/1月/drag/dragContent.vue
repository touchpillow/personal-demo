<template>
  <div class="item-content">
    <span class="item-id">{{index}}</span>
    <span class="item-text">{{item.text}}</span>
  </div>
</template>
<script>
export default {
  props: ["item", "index"]
};
</script>
<style scoped>
.item-text {
  word-break: break-all;
  text-align: left;
}
.item-id {
  margin-right: 16px;
}
.item-content {
  display: flex;
  align-items: center;
  line-height: 18px;
  padding: 24px 0;
}
</style>