<template>
  <div class="h-full h-screen">
    <div class="grid-cols-1 grid md:grid-cols-3 gap-3">
      <CardProject v-for="project in projects" :key="project.office" :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const projects = [
  {

    company: {
      name: 'joaoxstone',
      img: ''
    },
    office: 'Mobile Developer',
    dateInterval: '06/2023 - Current',
    description: 'descrição das minhas atividades como mobile',
    icons: ['simple-icons:kotlin', 'simple-icons:androidstudio', 'simple-icons:android']
  },
  {
    company: {
      name: 'Iza Pay',
      img: ''
    },
    office: 'Front-End Developer',
    dateInterval: '10/2023 - Current',
    description: 'descrição das minhas atividades',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript']
  }, {
    company: {
      name: 'Iza Content',
      img: ''
    },
    office: 'Front-End Developer',
    dateInterval: '02/2024 - Current',
    description: 'descrição das minhas atividades',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript']
  }]

definePageMeta({
  pageTransition: true
})

useSeoMeta({
  title: 'Projects'
})
</script>

<style></style>