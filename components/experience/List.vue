<template>
  <div>
    <div class="experience-list">
      <div v-for="(item, index) in data" :key="index">
        <ExperienceCard :date="item.date" :position="item.position" :company="item.company" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {data} = defineProps<{
  data: {
    date: string;
    position: string;
    company: string;
  }[];
}>();
</script>

<style>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>