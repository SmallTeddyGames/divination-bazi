<script setup lang="ts">
import ChangeGameStatus from '@/views/NavButton/ChangeGameStatus.vue'
import GitHubButton from '@/views/NavButton/GitHubButton.vue'
import ColorSchemeToggle from '@/views/NavButton/ColorSchemeToggle.vue'
import FullScreenToggle from '@/views/NavButton/FullScreenToggle.vue'
</script>

<template>
  <nav w-screen px-2 md:px4 py-2 md:py3 text-base md:text-lg bg-transparent border="b base" color-white flex="~ gap-1 items-center">
    <div title="Game" class="whitespace-nowrap">Divination Game</div>
    <div flex-auto></div>
    <!-- 游戏控制按钮 -->
    <ChangeGameStatus />
    <!-- github按钮 -->
    <GitHubButton />
    <!-- 颜色切换按钮 -->
    <ColorSchemeToggle />
    <!-- 全屏按钮 -->
    <FullScreenToggle />
  </nav>
</template>
