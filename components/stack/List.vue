<template>
  <div class="stack-card-list-grid">
    <motion.div v-for="(stack, i) in stacks" :key="i" class="stack-card" :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true, margin: '0px', amount: 0.1 }"
      :transition="{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }">
      <StackCard :title="stack.title">
        <template #icon>
          <img v-if="stack?.icon" class="stack-icon" :src="stack.icon" />
        </template>
      </StackCard>
    </motion.div>
  </div>
</template>


<script lang="ts" setup>
import { motion } from 'motion-v';


const { stacks } = defineProps(['stacks']);



</script>

<style scoped lang="css">
.stack-card-list-grid {
  display: grid;
  grid-template-columns: repeat(3, max-content); 
  gap: 1rem;
  justify-content: flex-end; 
  align-items: center; 
  width: 100%; 
}

.stack-card {
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  width: 100%; 
}

.stack-icon {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.2rem;
}

@media (max-width: 768px) {


  .stack-icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (max-width: 480px) {


  .stack-card {
    justify-content: center; 
  }
}

</style>
