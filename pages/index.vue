<script setup lang="ts">

</script>

<template>
  <header class="header">
    <AppToggleTheme />
    <AppLangSwitcher />
  </header>
  <section class="hero-container">
    <HeroTitle />
    <div class="scroll-container">
      <ConsoleCard />
    </div>
  </section>
  <section>
    <StackMyStack />
    <ExperienceMyExperience />
    <ProjectsMyProjects />
  </section>

</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: start;
  justify-content: flex-end;
  width: 100%;
  gap: 0.5rem;
}

.scroll-container {

  flex-direction: column;
  overflow-x: auto;
  display: flex;

  align-items: center;
  justify-content: center;
}

.hero-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-color: var(--background);
  margin-top: 5rem;
}

.empty-card {
  width: 40rem;
  height: 20rem;
  border-radius: 1rem;
}
</style>
