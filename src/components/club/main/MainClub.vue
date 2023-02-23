<script setup>
import {storeToRefs} from 'pinia';
import {
  useAnalyzerStore,
  useClubStore,
  useMainPageStore,
} from '../../../store/store';

import {CLUB_IMAGES} from '../../../static/statics.js';
import activeImage from '../../../assets/images/main/clubs/active.png';

const clubStore = useClubStore();
const mainPageStore = useMainPageStore();
const analyzerStore = useAnalyzerStore();

const {getStartReady} = analyzerStore;
const {postSelectClub} = clubStore;

const {CLICKED_CLUB, CURRENT_CLUB, CURRENT_SUB} = storeToRefs(clubStore);
const {OPEN_MODAL} = storeToRefs(mainPageStore);

const CLUB = ['DRIVER', 'WOOD', 'IRON', 'WEDGE', 'PUTTER'];

const setBorder = (key) => (!key ? 'border-left: 0' : '');
const setTouchStart = (key) => {
  CURRENT_SUB.value = '';
  CLICKED_CLUB.value = new Array(CLICKED_CLUB.value.length).fill(0);
  CLICKED_CLUB.value[key] = 1;
};
const setActive = (key) => {
  CURRENT_CLUB.value = CLUB[key].toLowerCase();
  if (key == 2 || key == 1 || key == 3) {
    OPEN_MODAL.value = !OPEN_MODAL.value;
    return;
  }
  if (CLICKED_CLUB.value[key] == 1) {
    postSelectClub();
    getStartReady();
  }
};
const activeClub = (key) => {
  if (CLICKED_CLUB.value[key]) {
    return `url(${activeImage})`;
  }
  return '';
};
</script>
<template>
  <div class="GolfClub-Containter">
    <div
      v-for="(item, key) in CLUB"
      :key="key"
      class="GolfClub-Item"
      @touchstart="setTouchStart(key)"
      @touchend="setActive(key)"
      :style="[setBorder(key), {backgroundImage: activeClub(key)}]">
      <div class="GolfClub-Sub-Text" v-if="CLICKED_CLUB[key] == 1">
        <b>{{ CURRENT_SUB }}</b>
      </div>
      <div
        class="GolfClub-Image"
        :style="{backgroundImage: `url(${CLUB_IMAGES[key]})`}"></div>
      <div style="padding-bottom: 10px">
        <b>{{ item }}</b>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GolfClub-Containter {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
}
.GolfClub-Item {
  background-color: black;
  width: 100%;
  height: 100%;
  border-left: 1px solid #c9a063;
  border-bottom: 1px solid #c9a063;
  font-family: Roboto;
  font-size: 32px;
  color: white;
  text-align: center;

  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.GolfClub-Image {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/EMPTY.png');
}
.GolfClub-Sub-Text {
  position: absolute;
  width: 154px;
  height: 310px;
  z-index: 1;
  /* color: white; */
  font-family: Roboto;
  font-size: 30px;
  color: white;
  text-align: center;
}
</style>
