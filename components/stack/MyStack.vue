<template>
  <div class="my-stack">
    <div class="stacks-header">
      <h1>My Stacks</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <h3 class="title-stack ">frontend</h3>
      <StackList :stacks="frontend" />
    </div>
    <div class="hero-container">
      <h3 class="title-stack ">backend</h3>
      <StackList :stacks="backend" />
    </div>
    <div class="hero-container">
      <h3 class="title-stack ">database</h3>
      <StackList :stacks="database" />
    </div>
    <div class="hero-container">
      <h3 class="title-stack ">tools</h3>
      <StackList :stacks="tools" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const frontend = [
  { title: 'Javascript', icon: 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor' },
  { title: 'Typescript', icon: 'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor' },
  { title: 'Vue.js', icon: 'https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor' },
  { title: 'Pinia', icon: 'https://cdn.worldvectorlogo.com/logos/pinia-1.svg' },
  { title: 'Nuxt.js', icon: 'https://devicon-website.vercel.app/api/nuxtjs/original.svg' },
  { title: 'React', icon: 'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor' },
  { title: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
  { title: 'Tailwind CSS', icon: 'https://devicon-website.vercel.app/api/tailwindcss/plain.svg' }
];

const backend = [
  { title: 'Java', icon: 'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor' },
  { title: 'Hyberbate', icon: 'https://cdn.worldvectorlogo.com/logos/hibernate.svg' },
  { title: 'Kotlin', icon: 'https://cdn.worldvectorlogo.com/logos/kotlin-2.svg' },
  { title: 'Spring', icon: 'https://devicon-website.vercel.app/api/spring/original.svg' },
  { title: 'Junit', icon: 'https://junit.org/junit5/assets/img/junit5-logo.png' }
]

const database = [
  { title: 'PostgreSQL', icon: 'https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor' },
  { title: 'MySQL', icon: 'https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor' },
  { title: 'MongoDB', icon: 'https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor' }
]

const tools = [
  { title: 'Git', icon: 'https://icongr.am/devicon/git-original.svg?size=128&color=currentColor' },
  { title: 'Docker', icon: 'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor' },
  { title: 'Netlify', icon: 'https://cdn.worldvectorlogo.com/logos/netlify.svg' }

]
</script>

<style lang="css" scoped>
.stacks-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin-bottom: 2rem;
}

.my-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
}

.title-stack {
  font-size: 4rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.hero-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  background-color: var(--background);
  margin-top: 5rem;
}
</style>