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
    dateInterval: '06/2023 - Atualmente',
    description: 'Esta aplicação tem o intuito de ajudar o usuário a controlar suas finanças de maneira descomplicada, e segura. Criei uma Iiterface intuitiva para facilitar o gerenciamento de transações usando recursos do Android MDC.',
    tags: ['MVVM', 'ROOM', 'SQLITE', 'KOTLIN'],
    link: 'https://play.google.com/store/apps/details?id=com.company.ourfinances',
    icons: ['simple-icons:kotlin', 'simple-icons:androidstudio', 'simple-icons:android', 'simple-icons:materialdesign']
  },
  {
    company: {
      name: 'Iza Pay',
      img: ''
    },
    office: 'Front-End Developer',
    dateInterval: '10/2023 - Current',
    description: 'Responsável pela criação telas de gerenciamento de operações financeiras e admnistrativas, como geração de pix com QR Code e tempo de expiração, tabelas complexas com dados transacionais e tratamento de multiplas requisições simultâneas.',
    tags: ['VUE', 'PINIA', 'CSS NINJA', 'BULMA'],
    link: 'https://izapay.com.br/',
    icons: ['simple-icons:vuedotjs', 'simple-icons:javascript', 'simple-icons:bulma']
  }, {
    company: {
      name: 'Iza Content',
      img: ''
    },
    office: 'Front-End Developer',
    dateInterval: '02/2024 - Current',
    description: 'Desenvolvi a UI de uma plataforma de conteúdos markdown/yaml, contanto também com um sistema de aquisição dos conteúdos de formas simples, rápida e segura por meio de planos de assinatura, onde utilizei composables do NUXT 3 para garantir a segurança em cada acesso a plataforma.',
    tags: ['NUXT', 'PINIA', 'NUXT UI', 'TAILWIND'],
    link: 'https://izacontent.netlify.app/',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
  }]

definePageMeta({
  pageTransition: true
})

useSeoMeta({
  title: 'Projects'
})
</script>

<style></style>