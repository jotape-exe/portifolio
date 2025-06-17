<template>
  <div class="my-project" @mouseenter="showPreview = true" @mouseleave="showPreview = false">

    <div class="stacks-header">
      <h1 class="title-stack">{{ name }}</h1>
    </div>
    <div class="stacks-list">
      <div v-for="(stack, index) in stacks" :key="index" class="stack-item">
        <div class="row-stack" >
          <span class="stack-indicator"></span>
          <span>{{ stack }}</span>
        </div>
        <ProjectsModalPreview :image-src="image" :is-visible="showPreview" :git-url="github"
          :external-url="externalUrl" />
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
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

.row-stack{
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


.stack-item span {
  font-size: 1.2rem;
  color: var(--text-title);
}

.stack-item {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.my-project {
  position: relative;
}
</style>
