<template>
  <div class="experience-list">
    <motion.div v-for="(item, index) in data" :key="index" class="experience-item" :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true, margin: '0px', amount: 0.1 }"
      :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }">
      <ExperienceCard v-bind="item" />
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import type { CardExperienceProps } from './Card.vue';

const { data } = defineProps<{
  data: CardExperienceProps[];
}>();
</script>

<style>
.experience-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience-item {
  width: 100%;
}
</style>