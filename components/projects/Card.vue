<template>
  <div class="my-project" @mouseenter="showPreview = true" @mouseleave="showPreview = false">
    <div class="stacks-header">
      <!-- Container para o título e ícone -->
      <div class="title-container">
        <h2 class="title-stack">{{ name }}</h2>

        <!-- Ícone com animação -->
        <motion.div class="action-icon" :animate="{ y: [0, -10, 0] }"
          :transition="{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }">
          <Icon name="ph:hand-tap" class="icon-bounce" />
        </motion.div>
      </div>
    </div>

    <!-- Lista de stacks -->
    <div class="stacks-list">
      <div v-for="(stack, index) in stacks" :key="index" class="stack-item">
        <div class="row-stack">
          <span class="stack-indicator"></span>
          <span class="stack-name">{{ stack }}</span>
        </div>
        <ProjectsModalPreview :image-src="image" :is-visible="showPreview" :git-url="github"
          :external-url="externalUrl" />
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { motion } from 'motion-v';
import { ref } from 'vue';

const { stacks, name } = defineProps<{
  stacks: string[];
  image: string;
  github?: string;
  externalUrl?: string
  name: string;
}>();

const showPreview = ref(false);
</script>

<style scoped lang="css">
.title-container {
  position: relative;
  display: inline-block;
  /* Permite ajustar o ícone em relação ao texto */
}

.row-stack {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.my-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  position: relative;
  overflow: visible;
  z-index: 1;
  border-radius: 1.6rem;
}


.stack-indicator {
  height: 10px;
  width: 10px;
  background-color: var(--text-title);
  opacity: 0.2;
  border-radius: 50%;
}

.my-project::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 1.6rem;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgb(63, 131, 248) 0%, rgba(63, 131, 248, 0.048)100%);
  opacity: 0.2;
  transition: width 0.3s ease-in-out;
  z-index: -1;
}

.my-project:hover::before {
  width: 100%;
}

.stacks-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
}


.icon-external-link {
  font-size: 3rem;
}


.title-stack {
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
}

.stacks-list {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
}

.stack-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}



.stack-item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.my-project {
  position: relative;
}

.stack-name {
  font-size: 1.2rem;
  color: var(--text-title);
}

.icon-bounce {
  font-size: 1rem;
  color: var(--text-title);
}

.action-icon {
  display: none;
}

@media (max-width: 768px) {
  .title-stack {
    font-size: 1.8rem;
    margin-bottom: 0.1rem;
  }

  .stack-name {
    font-size: 0.4rem;
  }

  .stack-indicator {
    height: 6px;
    width: 6px;
  }

  .row-stack {
    gap: 0.2rem;
  }

  .stacks-list {
    gap: 0.4rem;
  }

  .action-icon {
    position: absolute;
    top: -1px;
    right: -17px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


}
</style>
