<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { theme, setTheme } = useTheme();

onBeforeMount(() => {
  document.documentElement.classList.add(theme.value);
});
</script>