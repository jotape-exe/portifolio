<template>
  <div class="experience-card">
    <p>{{ company }}</p>
    <h3>{{ position }}</h3>
    <span>{{ date }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
date: string, 
position: string, 
company:string
}>();
</script>

<style scoped lang="css">
.experience-card {
  height: 10rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.experience-card h3 {
  font-size: 3.4rem;
  color: var(--text-title);
  margin: 0;
}
.experience-card p {
  font-size: 1.4rem;
  color: var(--text-title);
  margin: 0.2rem 0;
}
.experience-card span {
  font-size: 1rem;
  font-weight: 200;
  color: var(--text-title);
}
</style>