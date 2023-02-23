<script setup>
import {useMainPageStore} from '../../store/store';
import {storeToRefs} from 'pinia';
import MainHeader from '../../components/header/main/MainHeader.vue';
import MainClub from '../../components/club/main/MainClub.vue';
import MainFooter from '../../components/footer/main/MainFooter.vue';
import MainModal from '../../components/club/main/MainModal.vue';

console.log(window.location.pathname);

const mainPageStore = useMainPageStore();
const {OPEN_MODAL} = storeToRefs(mainPageStore); // default == false
console.log(OPEN_MODAL.value);
</script>
<template>
  <div class="MainPage-Container">
    <MainModal v-if="OPEN_MODAL"></MainModal>
    <div class="MainPage-Header">
      <MainHeader></MainHeader>
    </div>
    <div class="MainPage-Content">
      <MainClub></MainClub>
    </div>
    <div class="MainPage-Footer">
      <MainFooter></MainFooter>
    </div>
  </div>
</template>

<style scoped>
.MainPage-Container {
  position: relative;
  width: 800px;
  height: 480px;
  background-color: black;
  display: flex;
  flex-direction: column;
}
.MainPage-Header {
  height: 82.4px;
  padding-left: 13px;
  padding-right: 13px;
}
.MainPage-Content {
  height: 330px;

  padding-left: 13px;
  padding-right: 13px;
}
.MainPage-Footer {
  height: 67.6px;
  display: flex;
}
</style>
