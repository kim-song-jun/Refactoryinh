<script setup>
import {ref, onMounted} from 'vue';
import {useMultiWindowStore, useGameStore} from '../../../store/store';
import {storeToRefs} from 'pinia';
import MainHeaderSvg from '../../icons/main/MainHeaderSvg.vue';

const multiWindowStore = useMultiWindowStore();
const gameStore = useGameStore();

const {IS_OPEN_MULTI_WINDOW} = storeToRefs(multiWindowStore);
const {IS_GAME_START} = storeToRefs(gameStore);

const currentState = ref(['STAND_ALONE', 'EXTERNAL_MONITOR', 'GAME_CONNECT']);

const redirectPath = {
  STAND_ALONE: () => window.router.push('/SelectPage'),
  EXTERNAL_MONITOR: () => window.router.push('/ControllerPage'),
  GAME_CONNECT: () => window.router.push('/GameControllerPage'),
};

const clickHandler = (item) => redirectPath[item]();
const checkCurrentState = (isGameStart, isOpenMultiWindow) => {
  return isOpenMultiWindow ? 1 : isGameStart ? 2 : 0;
};
</script>

<template>
  <div class="Header-Container">
    <div
      class="Header-LeftItem"
      @click="
        clickHandler(
          currentState[checkCurrentState(IS_GAME_START, IS_OPEN_MULTI_WINDOW)],
        )
      ">
      <MainHeaderSvg :option="0"></MainHeaderSvg>
    </div>
    <div class="Header-MiddleItem">
      {{
        currentState[
          checkCurrentState(IS_GAME_START, IS_OPEN_MULTI_WINDOW)
        ].replace('_', ' ')
      }}
    </div>
    <div class="Header-RightItem">
      <MainHeaderSvg :option="1"></MainHeaderSvg>
    </div>
  </div>
</template>

<style scoped>
.Header-Container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: inherit;
}
.Header-MiddleItem {
  color: #c9a063;
  font-weight: bold;
  font-size: 24pt;
  margin-bottom: 10px;
  font-family: 'Roboto';
}
</style>
