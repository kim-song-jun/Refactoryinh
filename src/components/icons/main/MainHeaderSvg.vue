<script setup>
const props = defineProps({
  option: Number,
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.514"
    height="40"
    viewBox="0 0 12.514 20"
    v-if="option == 0">
    <path
      id="left"
      d="M37.56,216.18H32.087l-7.041,9.894,6.68,10.106H37.2l-6.68-10.106Z"
      transform="translate(-25.046 -216.18)"
      fill="#c9a063" />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37.5"
    height="36"
    viewBox="0 0 17.5 16"
    v-if="option == 1">
    <g id="그룹_16" data-name="그룹 16" transform="translate(-766.5 -13.5)">
      <line
        id="선_18"
        data-name="선 18"
        x2="17.5"
        transform="translate(766.5 14.5)"
        fill="none"
        stroke="#c9a063"
        stroke-width="2" />
      <line
        id="선_19"
        data-name="선 19"
        x2="17.5"
        transform="translate(766.5 21.5)"
        fill="none"
        stroke="#c9a063"
        stroke-width="2" />
      <line
        id="선_20"
        data-name="선 20"
        x2="17.5"
        transform="translate(766.5 28.5)"
        fill="none"
        stroke="#c9a063"
        stroke-width="2" />
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
