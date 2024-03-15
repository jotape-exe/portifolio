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
      name: 'Vince',
      img: ''
    },
    office: 'Mobile Developer',
    dateInterval: '06/2023 - Current',
    description: 'descrição das minhas atividades como mobile',
    link: 'https://play.google.com/store/apps/details?id=com.company.ourfinances',
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
    link: 'https://izapay.com.br/',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript']
  }, {
    company: {
      name: 'Iza Content',
      img: ''
    },
    office: 'Front-End Developer',
    dateInterval: '02/2024 - Current',
    description: 'descrição das minhas atividades',
    link: 'https://izacontent.netlify.app/',
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