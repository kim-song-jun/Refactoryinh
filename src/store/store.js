import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import axios from 'axios';
import statics from '../static/statics';
import {result} from 'lodash';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };

  return {count, name, doubleCount, increment};
});

export const useAnalyzerStore = defineStore('analyzer', () => {
  const ANALYZER_STANDBY = ref(false);
  const ANALYZER_LAUNCH = ref({});
  const ANALYZER_READY = ref(false);

  const getStartReady = () => axios.get(`${statics.URL}/start-ready`);
  const getNotReady = () => axios.get(`${statics.URL}/stop-ready`);

  return {
    ANALYZER_STANDBY,
    ANALYZER_LAUNCH,
    ANALYZER_READY,
    getNotReady,
    getStartReady,
  };
});

export const useClubStore = defineStore('club', () => {
  const CURRENT_CLUB = ref('');
  const CURRENT_SUB = ref('');

  const CLICKED_CLUB = ref([0, 0, 0, 0, 0]);
  const CLICKED_SUB = ref([0, 0, 0, 0, 0, 0]);

  const postSelectClub = async () =>
    await axios.post(`${statics.URL}/select-club`, {
      club: `${CURRENT_CLUB}`,
      sub: `${CURRENT_SUB}`,
    });

  return {CURRENT_CLUB, CURRENT_SUB, CLICKED_CLUB, CLICKED_SUB, postSelectClub};
});

export const useMultiWindowStore = defineStore('multiWindow', () => {
  const SECOND_WINDOW = ref(false);
  const DISPLAYS = ref(1);
  const OPEN_MULTI_WINDOW = ref(false);
  const IS_OPEN_MULTI_WINDOW = ref(false);

  return {SECOND_WINDOW, DISPLAYS, OPEN_MULTI_WINDOW, IS_OPEN_MULTI_WINDOW};
});

export const useFullPageStore = defineStore('fullPage', () => {
  const SELECT_LAUNCHED_DATA = ref({});
  const LAUNCHED_LIST = ref([]);
  const TABLE_DATA = ref([]);

  const CUSTOM_DATA = ref({datasets: []});
  const CUSTOM_OPTION = ref({});

  const CLIP_URL = ref('');

  const CONTROLLER_ACTION = ref(0);
  const CONTROLLER_CURRENT_SELECT = ref(0);
  const CONTROLLER_CURRENT_FORCUS = ref(0);

  const getVideoClip = () =>
    new Promise((res, rej) =>
      axios
        .get(
          `${statics.URL}/media/launch-clip/${SELECT_LAUNCHED_DATA.launchID}.mp4`,
        )
        .then(
          (result) =>
            (CLIP_URL.value = `${statics.URL}/media/launch-clip/${SELECT_LAUNCHED_DATA.launchID}.mp4`),
          res(result),
        )
        .catch((E) => {
          rej(E);
        }),
    );

  return {
    SELECT_LAUNCHED_DATA,
    LAUNCHED_LIST,
    TABLE_DATA,
    CUSTOM_DATA,
    CUSTOM_OPTION,
    CLIP_URL,
    CONTROLLER_ACTION,
    CONTROLLER_CURRENT_FORCUS,
    CONTROLLER_CURRENT_SELECT,
    getVideoClip,
  };
});

export const useGameStore = defineStore('game', () => {
  const IS_GAME_START = ref(false);

  const getStartGameReady = () => axios.get(`${statics.URL}/start-game-ready`);

  return {IS_GAME_START, getStartGameReady};
});

export const useMainPageStore = defineStore('main', () => {
  const OPEN_MODAL = ref(false);

  return {OPEN_MODAL};
});
