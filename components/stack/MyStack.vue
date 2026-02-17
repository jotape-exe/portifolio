<template>
  <div class="my-stack">
    <div class="stacks-header">
      <h1>{{ $t('home.stack') }}</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">frontend</h3>
      </motion.div>
      <StackList :stacks="frontend" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">backend</h3>
      </motion.div>
      <StackList :stacks="backend" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">database</h3>
      </motion.div>
      <StackList :stacks="database" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">tools</h3>
      </motion.div>
      <StackList :stacks="tools" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import { backend, database, frontend, tools } from '~/constants/my-stack.constant';

</script>

<style lang="css" scoped>
.stacks-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin-bottom: 1rem;
}

.my-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.8rem;
  width: 100%;
  padding: 2rem;
}

.title-stack {
  font-size: 3.2rem;
  font-weight: 500;
  text-transform: uppercase;
}

.hero-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  background-color: var(--background);
  margin-top: 5rem;
}

@media (max-width: 768px) {
  .title-stack {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .hero-container {
    margin-top: 2rem;
  }

  .my-stack {
    padding: 0.4rem;
  }
}
</style>