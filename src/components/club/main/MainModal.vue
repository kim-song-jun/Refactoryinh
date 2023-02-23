<script setup>
import {storeToRefs} from 'pinia';
import {ref, onMounted} from 'vue';
import {
  useAnalyzerStore,
  useClubStore,
  useMainPageStore,
} from '../../../store/store';
import modalActive from '../../../assets/images/main/clubs/modalActive.png';

const {getNotReady} = useAnalyzerStore();
const clubStore = useClubStore();
const mainPageStore = useMainPageStore();

const {postSelectClub} = clubStore;
const {CURRENT_SUB, CURRENT_CLUB, CLICKED_SUB, CLICKED_CLUB} =
  storeToRefs(clubStore);

const {OPEN_MODAL} = storeToRefs(mainPageStore);

const sub = {
  iron: [4, 5, 6, 7, 8, 9],
  wood: [3, 'UT', 5],
  wedge: ['PW', 'AW', 'SW'],
};
const subList = ref([0, 0, 0, 0, 0, 0]);

const delay = (timeout) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log('waiting...');
      res('done');
    }, timeout),
  );
const setActive = async (key) => {
  const delayTime = 500;
  if (CLICKED_SUB.value[key] == 1) {
    CURRENT_SUB.value = subList.value[key];
    postSelectClub();
    await delay(delayTime);
    CLICKED_SUB.value = new Array(CLICKED_SUB.value.length).fill(0);
    OPEN_MODAL.value = false;
  }
};
const activeClub = (key) =>
  CLICKED_SUB.value[key] ? `url(${modalActive})` : '';
const setStyle = (length) => (length > 1 ? '70px' : '80px');

const clickHandler = () => {
  getNotReady();
  CURRENT_CLUB.value = '';
  CURRENT_SUB.value = '';
  CLICKED_CLUB.value = new Array(CLICKED_CLUB.value.length).fill(0);
  OPEN_MODAL.value = false;
};

onMounted(() => {
  subList.value = [...sub[`${CURRENT_CLUB.value}`]];
  CLICKED_SUB.value = new Array(subList.value.length).fill(0);
});
</script>

<template>
  <div class="ClubModal-Background" @click="clickHandler"></div>
  <div class="ClubModal-Container">
    <div
      v-for="(item, index) in subList"
      :key="index"
      class="ClubModal-Item"
      @touchstart.stop="CLICKED_SUB[index] = 1"
      @touchend="setActive(index)"
      :style="{backgroundImage: activeClub(index)}">
      <div
        class="ClubModal-Modal-text"
        :style="{fontSize: `${setStyle(item.length)}`}">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.ClubModal-Background {
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 800px;
  height: 480px;
  z-index: 1;
}
.ClubModal-Container {
  position: absolute;
  z-index: 200;
  width: 640px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  gap: 15px 20px;
  justify-content: space-between;
}
.ClubModal-Item {
  width: 180px;
  height: 150px;
  border: solid 1px #c9a063;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ClubModal-Modal-text {
  color: white;
  font-size: 70px;
  font-style: bold;
  font-family: Roboto;
  text-align: center;
}
</style>
