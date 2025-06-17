<template>
  <div class="stack-card">
    <div>
      <slot name="icon" />
    </div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style scoped lang="css">
.stack-card {
  height: 3rem;
  gap: 15px;
  display: flex;
  
  align-items: center;
  justify-content: flex-end;
}

h3{
  width: fit-content;
  font-weight: normal;
  font-size: 1.5rem;
}
</style>