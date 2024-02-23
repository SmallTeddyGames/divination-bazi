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

const year = ref('')
const month = ref('')
</script>

<template>
  <div h-full w-screen color-white p8 flex="~ col" gap-8>
    <div h-full w-full of-hidden flex-center font-size-32px gap-8>
      <!-- <div>年干支：{{ yearGan }}{{ yearZhi }}</div>
      <div>月干支：{{ monthGan }}{{ monthZhi }}</div>
      <div>日干支：{{ dayGan }}{{ dayZhi }}</div>
      <div>时干支：{{ timeGan }}{{ timeZhi }}</div> -->
      <div flex-center flex-col gap-4>
        <span class="demonstration">Year</span>
        <el-date-picker v-model="year" type="year" placeholder="Pick a year" />
      </div>
      <div flex-center flex-col gap-4>
        <span class="demonstration">Month</span>
        <el-date-picker v-model="month" type="month" placeholder="Pick a month" />
      </div>
    </div>
  </div>
</template>
