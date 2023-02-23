<script setup>
import {ipcRenderer} from 'electron';
import {storeToRefs} from 'pinia';
import {onMounted, onBeforeUnmount} from 'vue';
import {initArray} from './modules/external/initLaunchList';
import {checkLaunchExternal} from './modules/sseModules/checkLaunch';
import {checkReady} from './modules/sseModules/checkReady';
import checkStandBy from './modules/sseModules/checkStandby';
import statics from './static/statics';
import {useFullPageStore, useAnalyzerStore} from './store/store';

const analyzerStore = useAnalyzerStore();
const fullPageStore = useFullPageStore();
const {CONTROLLER_ACTION, TABLE_DATA} = storeToRefs(fullPageStore);

onMounted(() => {
  const eventSource = new EventSource(`${statics.URL}/listen`);

  eventSource.addEventListener('open', (event) => {
    console.log(event.currentTarget);
  });
  eventSource.addEventListener('error', (event) => {
    console.log(event.data);
  });
  eventSource.addEventListener('analyzer-standby', (event) =>
    checkStandBy(event, analyzerStore),
  );
  eventSource.addEventListener('analyzer-ready', (event) =>
    checkReady(event, analyzerStore),
  );

  if (window.location.pathname == '/FullPage') {
    eventSource.addEventListener('analyzer-launch', (event) => {
      checkLaunchExternal(event, analyzerStore, fullPageStore);
    });

    ipcRenderer.on('SECONDWINDOW', (event, arg) => {
      CONTROLLER_ACTION.value = arg;
    });

    TABLE_DATA.value = initArray([], statics.DUMMY.length);
  }
});
onBeforeUnmount(() => {
  eventSource.close();
});
</script>

<template>
  <Transition name="fade" mode="out-in">
    <RouterView></RouterView>
  </Transition>
</template>

<style></style>
