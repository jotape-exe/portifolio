<template>
    <button @click="toggleTheme" class="btn-icon">
      <Icon class="theme-icon" :name="theme === 'light' ? 'lucide:sun' : 'lucide:moon'" />
    </button>
</template>

<script lang="ts" setup>
const { theme, toggleTheme } = useTheme();
</script>

<style lang="css" scoped>
.theme-icon {
  width: 1.3rem;
  height: 1.3rem;
  transition: all 0.3s ease-in-out;
}
</style>