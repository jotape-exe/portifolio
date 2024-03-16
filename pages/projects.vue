<template>
  <div class="h-full">
    <div class="grid-cols-1 grid md:grid-cols-3 gap-3">
      <CardProject v-for="project in projects" :key="project.office" :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();
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
    tags: ['VUE', 'PINIA', 'CSS NINJA', 'BULMA'],
    link: 'https://izapay.com.br/',
    icons: ['simple-icons:vuedotjs', 'simple-icons:javascript', 'simple-icons:bulma']
  }, {
    company: {
      name: 'Iza Content',
      img: ''
    },
    office: t("frontend"),
    dateInterval: t("projectsData.content.dateInterval"),
    description: t("projectsData.content.description"),
    tags: ['NUXT', 'PINIA', 'NUXT UI', 'TAILWIND'],
    link: 'https://izacontent.netlify.app/',
    icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
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
      tags: ['VUE', 'PINIA', 'CSS NINJA', 'BULMA'],
      link: 'https://izapay.com.br/',
      icons: ['simple-icons:vuedotjs', 'simple-icons:javascript', 'simple-icons:bulma']
    }, {
      company: {
        name: 'Iza Content',
        img: ''
      },
      office: t("frontend"),
      dateInterval: t("projectsData.content.dateInterval"),
      description: t("projectsData.content.description"),
      tags: ['NUXT', 'PINIA', 'NUXT UI', 'TAILWIND'],
      link: 'https://izacontent.netlify.app/',
      icons: ['simple-icons:vuedotjs', 'simple-icons:nuxtdotjs', 'simple-icons:javascript', 'simple-icons:tailwindcss']
    }]
})



definePageMeta({
  pageTransition: true
})

useSeoMeta({
  title: 'Projects'
})
</script>

<style></style>