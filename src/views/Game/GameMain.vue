<script lang="ts" setup>
import OneStep from './OneStep.vue';
import TwoStep from './TwoStep.vue';
import ThreeStep from './ThreeStep.vue';
import FourStep from './FourStep.vue';

const allData = ref()

const getAllData = val => {
  allData.value = val ? val : null
}
</script>

<template>
  <div style="height: calc(100vh - 58px); overflow: auto" w-screen color-white p8 flex-center flex-wrap gap-8>
    <OneStep @get-all-data="getAllData" />
    <TwoStep :all-data="allData" />
    <ThreeStep />
    <FourStep />
  </div>
</template>
