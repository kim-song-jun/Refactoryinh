<script setup>
import MainFooterSvg from '../../icons/main/MainFooterSvg.vue';
</script>
<template>
  <div class="Footer-Container">
    <div class="Footer-Icon">
      <MainFooterSvg :option="0"></MainFooterSvg>
    </div>
  </div>
</template>

<style scoped>
.Footer-Container {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.Footer-Icon {
  align-self: center;
  width: 49px;
  height: 26px;
  margin-right: 13px;
}
</style>
