<template>
  <div>
    <div class="experience-list">
      <div v-for="(item, index) in data" :key="index">
        <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }">
          <ExperienceCard :date="item.date" :position="item.position" :company="item.company" />
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

const { data } = defineProps<{
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