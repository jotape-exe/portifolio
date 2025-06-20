<template>
  <div class="my-stack">
    <div class="stacks-header">
      <h1>Minha Stack</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">frontend</h3>
      </motion.div>
      <StackList :stacks="frontend" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">backend</h3>
      </motion.div>
      <StackList :stacks="backend" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">database</h3>
      </motion.div>
      <StackList :stacks="database" />
    </div>
    <div class="hero-container">
      <motion.div :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '0px', amount: 0.1 }" :transition="{ duration: 0.5, ease: 'easeOut' }">
        <h3 class="title-stack">tools</h3>
      </motion.div>
      <StackList :stacks="tools" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

const frontend = [
  { title: 'Javascript', icon: 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor' },
  { title: 'Typescript', icon: 'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor' },
  { title: 'Vue.js', icon: 'https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor' },
  { title: 'Pinia', icon: 'https://cdn.worldvectorlogo.com/logos/pinia-1.svg' },
  { title: 'Nuxt.js', icon: 'https://devicon-website.vercel.app/api/nuxtjs/original.svg' },
  { title: 'React', icon: 'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor' },
  /* { title: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
  { title: 'Tailwind CSS', icon: 'https://devicon-website.vercel.app/api/tailwindcss/plain.svg' }*/
];

const backend = [
  { title: 'Java', icon: 'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor' },
  { title: 'Kotlin', icon: 'https://cdn.worldvectorlogo.com/logos/kotlin-2.svg' },
  { title: 'Spring', icon: 'https://devicon-website.vercel.app/api/spring/original.svg' },
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
  margin-bottom: 1rem;
}

.my-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.8rem;
  width: 100%;
  padding: 2rem;
}

.title-stack {
  font-size: 3.2rem;
  font-weight: 500;
  text-transform: uppercase;
}

.hero-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  background-color: var(--background);
  margin-top: 5rem;
}

@media (max-width: 768px) {
  .title-stack {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .hero-container {
    margin-top: 2rem;
  }

  .my-stack {
    padding: 0.4rem;
  }
}
</style>