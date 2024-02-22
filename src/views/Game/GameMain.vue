<script lang="ts" setup>
import { Lunar } from 'lunar-typescript';
const lunar = Lunar.fromDate(new Date());

const yearGan = lunar.getYearGan();
const yearZhi = lunar.getYearZhi();
const monthGan = lunar.getMonthGan();
const monthZhi = lunar.getMonthZhi();
const dayGan = lunar.getDayGan();
const dayZhi = lunar.getDayZhi();
const timeGan = lunar.getTimeGan();
const timeZhi = lunar.getTimeZhi();
</script>

<template>
  <div h-full w-screen color-white p8 flex="~ col" gap-8>
    <div h-full w-full of-hidden flex-center border="1px dashed #666" border-rd-4  p8 bg-mask flex-col>
      <div font-size-32px>年干支：{{ yearGan }}</div>
      <div font-size-32px>年地支：{{ yearZhi }}</div>
      <div font-size-32px>月干支：{{ monthGan }}</div>
      <div font-size-32px>月地支：{{ monthZhi }}</div>
      <div font-size-32px>日干支：{{ dayGan }}</div>
      <div font-size-32px>日地支：{{ dayZhi }}</div>
      <div font-size-32px>时干支：{{ timeGan }}</div>
      <div font-size-32px>时地支：{{ timeZhi }}</div>
    </div>
  </div>
</template>
