<script lang="ts" setup>
import OneStep from './OneStep.vue';
import TwoStep from './TwoStep.vue';
import ThreeStep from './ThreeStep.vue';
import FourStep from './FourStep.vue';
</script>

<template>
  <div style="height: calc(100vh - 58px); overflow: auto" w-screen color-white p8 flex-center flex-wrap gap-8>
    <OneStep />
    <TwoStep />
    <ThreeStep />
    <FourStep />
  </div>
</template>
