<script lang='ts' setup>
import { identity } from '@vueuse/core';
import StepCard from './StepCard.vue';
import { Solar, Lunar } from 'lunar-typescript';

const props = defineProps({
  allData: {
    type: Object
  }
})

const lunar = ref()

const GanWuXing = {
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
const DiWuXing = {
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
const Relation = {
  '金': '金克木,金生水',
  '木': '木克土,木生火',
  '水': '水克火,水生木',
  '火': '火克金,火生土',
  '土': '土克水,土生金'
}

const yearWuXing = ref('未知')
const monthWuXing = ref('未知')
const dayWuXing = ref('未知')
const timeWuXing = ref('未知')

const getJieQi = () => {
  const { year, month, day } = props.allData

  const youDate = Solar.fromYmd(year, month, day)
  const jieQiTable = lunar.value.getJieQiTable()

  const jieQi = ['冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪']

  let jieQiList = []
  jieQi.forEach(item => {
    const { _year, _month, _day } = jieQiTable[item]
    jieQiList.push({ name: item, date: Solar.fromYmd(_year, _month, _day) })
  })
  const liCun = jieQiList.find(item => item.name === '立春').date
  const liXia = jieQiList.find(item => item.name === '立夏').date
  const liQiu = jieQiList.find(item => item.name === '立秋').date
  const liDong = jieQiList.find(item => item.name === '立冬').date

  if(youDate.isBefore(liCun) || youDate.isAfter(liDong)) {
    console.log('冬季，水旺，木相，火死，土囚，金休')
  } else if(youDate.isBefore(liXia) && youDate.isAfter(liCun)) {
    console.log('春季，木旺，火相，土死，金囚，水休')
  } else if(youDate.isBefore(liQiu) && youDate.isAfter(liXia)) {
    console.log('夏季，火旺，土相，金死，水囚，木休')
  } else if(youDate.isBefore(liDong) && youDate.isAfter(liQiu)) {
    console.log('秋季，金旺，水相，木死，火囚，土休')
  }
}

const getWuXing = () => {
  const { yearGan, yearZhi, monthGan, monthZhi, dayGan, dayZhi, timeGan, timeZhi } = props.allData
  lunar.value = Lunar.fromYmd(props.allData.year, props.allData.month, props.allData.day);
  yearWuXing.value = GanWuXing[yearGan] + DiWuXing[yearZhi]
  monthWuXing.value = GanWuXing[monthGan] + DiWuXing[monthZhi]
  dayWuXing.value = GanWuXing[dayGan] + DiWuXing[dayZhi]
  timeWuXing.value = GanWuXing[timeGan] + DiWuXing[timeZhi]

  getJieQi()
  analyse()
}

const analyse = () => {
  const { month } = props.allData
  // const season = Season[month]

  // console.log(season)
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
