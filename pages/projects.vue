<template>
  <div class="h-full lg:px-24 p-2">
    <div class="grid-cols-1 grid md:grid-cols-3 gap-8">
      <CardProject v-for="project in projects" :key="project.office" :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useI18n } from '#imports';

const { t, locale } = useI18n()
const projects = ref<any[]>([
  {
    company: {
      name: 'Vince',
      img: ''
    },
    office: t("mobile"),
    dateInterval: t("projectsData.vince.dateInterval"),
    description: t("projectsData.vince.description"),
    tags: ['MVVM', 'ROOM', 'SQLITE', 'KOTLIN'],
    link: 'https://play.google.com/store/apps/details?id=com.company.ourfinances',
    icons: ['simple-icons:kotlin', 'simple-icons:androidstudio', 'simple-icons:android', 'simple-icons:materialdesign'],
  },
  {
    company: {
      name: 'Iza Pay',
      img: ''
    },
    office: t("frontend"),
    dateInterval: t("projectsData.izapay.dateInterval"),
    description: t("projectsData.izapay.description"),
    tags: ['NUXT', 'PINIA', 'NUXT UI', 'TAILWIND'],
    link: 'https://iza.tec.br/pay',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
  }, {
    company: {
      name: 'Iza Content',
      img: ''
    },
    office: t("frontend"),
    dateInterval: t("projectsData.content.dateInterval"),
    description: t("projectsData.content.description"),
    tags: ['NUXT', 'PINIA', 'NUXT UI', 'TAILWIND'],
    link: 'https://iza.tec.br/content',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
  }, {
    company: {
      name: 'Stone Royale',
      img: ''
    },
    office: t("mobile"),
    dateInterval: t("projectsData.stoneroyale.dateInterval", locale.value),
    description: t("projectsData.stoneroyale.description", locale.value),
    tags: ['JETPACK COMPOSE', 'KOTLIN', 'RETROFIT', 'REST'],
    github: 'https://github.com/jotape-exe/stone-royale',
    icons: ['simple-icons:kotlin', 'simple-icons:android', 'simple-icons:jetpackcompose']
  }])

watch(locale, () => {
  projects.value = [
    {
      company: {
        name: 'Vince',
        img: ''
      },
      office: t("mobile", locale.value),
      dateInterval: t("projectsData.vince.dateInterval", locale.value),
      description: t("projectsData.vince.description", locale.value),
      tags: ['MVVM', 'ROOM', 'SQLITE', 'KOTLIN'],
      link: 'https://play.google.com/store/apps/details?id=com.company.ourfinances',
      icons: ['simple-icons:kotlin', 'simple-icons:androidstudio', 'simple-icons:android', 'simple-icons:materialdesign']
    },
    {
      company: {
        name: 'Iza Pay',
        img: ''
      },
      office: t("frontend"),
      dateInterval: t("projectsData.izapay.dateInterval"),
      description: t("projectsData.izapay.description"),
      tags: ['VUE', 'PINIA', 'CSSNINJA', 'BULMA'],
      link: 'https://iza.tec.br/pay',
      icons: ['simple-icons:vuedotjs', 'simple-icons:javascript', 'simple-icons:bulma']
    },
    {
      company: {
        name: 'Iza Content',
        img: ''
      },
      office: t("frontend"),
      dateInterval: t("projectsData.content.dateInterval"),
      description: t("projectsData.content.description"),
      tags: ['NUXT', 'PINIA', 'NUXTUI', 'TAILWIND'],
      link: 'https://iza.tec.br/content',
      icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
    }, {
      company: {
        name: 'Stone Royale',
        img: ''
      },
      office: t("mobile"),
      dateInterval: t("projectsData.stoneroyale.dateInterval", locale.value),
      description: t("projectsData.stoneroyale.description", locale.value),
      tags: ['JETPACK COMPOSE', 'KOTLIN', 'RETROFIT', 'REST'],
      github: 'https://github.com/jotape-exe/stone-royale',
      icons: ['simple-icons:kotlin', 'simple-icons:android', 'simple-icons:jetpackcompose']
    }]
})


definePageMeta({
  pageTransition: true
})

useSeoMeta({
  title: `João Pedro • ${t('projects')}`
})
</script>

<style></style>