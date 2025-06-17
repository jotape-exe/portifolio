<template>
  <div class="projects-list">
    <div v-for="(item, index) in data" :key="index">
      <ProjectsCard v-bind="{
        stacks: item.stacks,
        image: item.image,
        github: item.github,
        externalUrl: item.externalUrl,
        name: item.name
      }" :stacks="item.stacks" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = defineProps<{
  data: {
    stacks: string[];
    image: string;
    github?: string;
    externalUrl?: string
    name: string;
  }[];
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