<template>
  <div class="stack-card-list-grid">
    <motion.div
      v-for="(stack, i) in stacks"
      :key="i"
      class="stack-card"
      :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '0px', amount: 0.1 }"
      :transition="{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }"
    >
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: flex-end;
  justify-content: end;
}


.stack-card {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


.stack-icon {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.2rem;
}

@media (max-width: 768px) {
  .stack-card-list-grid {
    grid-template-columns: repeat(2, 1fr);
    justify-content: end;
  }
}

@media (max-width: 480px) {
  .stack-card-list-grid {
    grid-template-columns: 1fr;
    justify-content: end;
  }
}
</style>
