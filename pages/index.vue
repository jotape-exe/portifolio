<script setup lang="ts">

const consoleText = `Desenvolvedor Fullstack especializado em criar interfaces responsivas e backends escaláveis, priorizando qualidade e desempenho.

Com uma abordagem orientada ao usuário e resultados, entrego soluções criativas que unem tecnologia e negócios para experiências fluidas e impactantes.`

</script>

<template>
  <header class="header">
    <AppToggleTheme />
  </header>
  <section class="hero-container">
    <HeroTitle />
    <div class="scroll-container">
      <ConsoleCard :text="consoleText" />
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
