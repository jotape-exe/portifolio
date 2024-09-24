<template>
  <div class="bg-zinc-50 dark:bg-zinc-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
