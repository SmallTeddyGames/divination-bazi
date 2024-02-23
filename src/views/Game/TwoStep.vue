<script lang='ts' setup>
import StepCard from './StepCard.vue';

const props = defineProps({
  allData: {
    type: Object
  }
})

const ganWuXing = {
  '甲': '木',
  '乙': '木',
  '丙': '火',
  '丁': '火',
  '戊': '土',
  '己': '土',
  '庚': '金',
  '辛': '金',
  '壬': '水',
  '癸': '水'
}
const diWuXing = {
  '子': '水',
  '丑': '湿土',
  '寅': '木',
  '卯': '木',
  '辰': '湿土',
  '巳': '火',
  '午': '火',
  '未': '干土',
  '申': '金',
  '酉': '金',
  '戌': '干土',
  '亥': '水',
}

const yearWuXing = ref('未知')
const monthWuXing = ref('未知')
const dayWuXing = ref('未知')
const timeWuXing = ref('未知')

const getWuXing = () => {
  const ganZhi = props.allData
  yearWuXing.value = ganWuXing[ganZhi.yearGan] + diWuXing[ganZhi.yearZhi]
  monthWuXing.value = ganWuXing[ganZhi.monthGan] + diWuXing[ganZhi.monthZhi]
  dayWuXing.value = ganWuXing[ganZhi.dayGan] + diWuXing[ganZhi.dayZhi]
  timeWuXing.value = ganWuXing[ganZhi.timeGan] + diWuXing[ganZhi.timeZhi]
}

watch(
  () => props.allData,
  () => getWuXing()
)

</script>

<template>
  <StepCard>
    <div class="title">
      第二步：分析五行
    </div>
    <div flex-center>
      <div w-130px>年五行：</div>
      <div w-100px>{{ yearWuXing }}</div>
    </div>
    <div flex-center>
      <div w-130px>月五行：</div>
      <div w-100px>{{ monthWuXing }}</div>
    </div>
    <div flex-center>
      <div w-130px>日五行：</div>
      <div w-100px>{{ dayWuXing }}</div>
    </div>
    <div flex-center>
      <div w-130px>时五行：</div>
      <div w-100px>{{ timeWuXing }}</div>
    </div>
  </StepCard>
</template>

<style scoped lang='scss'>
</style>
