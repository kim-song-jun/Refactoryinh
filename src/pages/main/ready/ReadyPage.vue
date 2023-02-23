<script setup>
import {useAnalyzerStore} from '../../../store/store';

const {getNotReady} = useAnalyzerStore();

const clickHandler = () => {
  getNotReady(), window.router.push('/MainPage');
};
</script>
<template>
  <img
    src="../../../assets/images/ready/readyAnimation.gif"
    @click="clickHandler()" />
</template>

<style scoped></style>
