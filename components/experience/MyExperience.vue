<template>
  <div class="my-experience">
    <div class="stacks-header">
      <h1>Experiências</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <ExperienceList :data="experiences" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MyExperiences } from '~/constants/my-experiences.constant';

const experiences = MyExperiences
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

.my-experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    margin-top: 2.8rem;
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
}

.empty-card {
  width: 40rem;
  height: 20rem;
  border-radius: 1rem;
}


@media (max-width: 768px) {
  .my-experience {
    padding: 0.4rem;
  }

}
</style>