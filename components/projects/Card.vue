<template>
  <div class="project-card" @mouseenter="showPreview = true" @mouseleave="showPreview = false">
    <div class="header">
      <div class="title-group">
        <div class="title-row">
          <h2 class="title">{{ name }}</h2>


          <motion.div class="tap-icon" :animate="{ scale: [1, 1.2, 0.7] }"
            :transition="{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }">
            <Icon name="ph:hand-tap" />
          </motion.div>
        </div>
        <p class="description">{{ t(descriptionKey) }}</p>
      </div>
    </div>

    <div class="stacks">
      <AppBadge v-for="(stack, i) in stacks" :key="i" variant="outline" :color="stack.color" size="sm">
        {{ stack.name }}
      </AppBadge>
    </div>

    <ProjectsModalPreview :image-src="image" :is-visible="showPreview" :git-url="github" :external-url="externalUrl" />
  </div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import { ref } from "vue";
import type { StackItem } from "~/types/stack-item.interface";
const { locale, t } = useI18n()

export interface CardProjectProps {
  stacks: StackItem[];
  image: string;
  github?: string;
  externalUrl?: string;
  name: string;
  descriptionKey: string
}

defineProps<CardProjectProps>();

const showPreview = ref(false);
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1rem;
  border-radius: var(--radius-large);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  position: relative;
  z-index: 0;
  overflow: visible;
  cursor: pointer;
  transition: transform 0.25s ease;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg,
      rgb(63, 131, 248) 0%,
      rgba(63, 131, 248, 0.048) 100%);
  opacity: 0.18;
  transition: width 0.35s ease;
  z-index: 0;
}

.project-card:hover::before {
  width: 100%;
}

.project-card:hover {
  transform: translateY(-2px);
  z-index: 10;
}

.header,
.stacks {
  position: relative;
  z-index: 1;
}

.header {
  display: flex;
  align-items: center;
}

.title-group {
  display: flex;
  flex-direction: column;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.title {
  font-size: 1.15rem;
  margin: 0;
  color: var(--text-title);
  line-height: 1.2;
  text-transform: uppercase;
}

.description {
  margin: 0.2rem 0;
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.45;
}


.tap-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  opacity: 0.8;
}

.stacks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

@media (max-width: 768px) {
  .project-card {
    padding: 0.7rem;
    gap: 0.45rem;
  }

  .title {
    font-size: 0.95rem;
  }
}
</style>
