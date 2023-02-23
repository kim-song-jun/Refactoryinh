<script setup>
import {storeToRefs} from 'pinia';
import {ref, onMounted} from 'vue';
import SelectSvg from '../../components/icons/Select/SelectSvg.vue';
import {useAnalyzerStore, useClubStore, useGameStore} from '../../store/store';

const analyzerStore = useAnalyzerStore();
const clubStore = useClubStore();
const gameStore = useGameStore();

const {getStartGameReady} = gameStore;
const {getNotReady} = analyzerStore;
const {CURRENT_CLUB, CURRENT_SUB} = storeToRefs(clubStore);

const pages = ref(['MAIN_PAGE', 'EXTERNAL_PAGE', 'GAME_PAGE']);

const redirectPath = {
  MAIN_PAGE: () => window.router.push('/MainPage'),
  EXTERNAL_PAGE: () => window.router.push('/MainPage'),
  GAME_PAGE: () => window.router.push('/'),
};

const clickHandler = (item) => redirectPath[item]();

onMounted(() => {
  CURRENT_CLUB.value = '';
  CURRENT_SUB.value = '';
  getStartGameReady;
  getNotReady;
});
</script>

<template>
  <div class="SelectPage-Container">
    <div class="SelectPage-Items">
      <div
        v-for="(item, index) in pages"
        :key="index"
        class="SelectPage-Item"
        @click="clickHandler(item)">
        <div :class="`logo-${index}`">
          <SelectSvg :option="index"></SelectSvg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.SelectPage-Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 800px;
}
.SelectPage-Items {
  display: flex;
  width: 680px;
  height: 300px;
  justify-content: space-between;
  align-content: stretch;
}

.SelectPage-Item {
  width: 220px;
  height: 300px;
  border: 1px solid #c9a063;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url('src/assets/images/select/selectGradation.png');
}
.SelectPage-Item .logo-0 {
  padding-top: 52px;
  padding-left: 58px;
}
.SelectPage-Item .logo-2 {
  padding-top: 54px;
  padding-left: 52px;
}
.SelectPage-Item .logo-1 {
  padding-top: 60px;
  padding-left: 32px;
}
</style>
