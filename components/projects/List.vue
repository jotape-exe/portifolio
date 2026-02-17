<template>
  <div class="projects-list">
    <div v-for="(item, index) in data" :key="index">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }"
        :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }">
        <ProjectsCard v-bind="item" />
      </motion.div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import type { CardProjectProps } from './Card.vue';


const { data } = defineProps<{
  data: CardProjectProps[];
}>();
</script>

<style>
.projects-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>