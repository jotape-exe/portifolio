<template>
  <div class="my-projects">
    <div class="stacks-header">
      <h1>Projetos</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <ProjectsList :data="projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MyProjects } from '~/constants/my-projects.constant';

const projects = MyProjects
</script>

<style lang="css" scoped>
.stacks-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
}

.my-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  margin-top: 1.8rem;
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

.empty-card {
  width: 40rem;
  height: 20rem;
  border-radius: 1rem;
}

@media (max-width: 768px) {
  .hero-container {
    margin-top: 2rem;
  }

  .my-projects {
    padding: 0.4rem;
  }

}
</style>