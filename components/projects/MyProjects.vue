<template>
  <div class="my-stack">
    <div class="stacks-header">
      <h1>My Projects</h1>
      <AppDivider />
    </div>
    <div class="hero-container">
      <div class="card empty-card"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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

.empty-card {
  width: 40rem;
  height: 20rem;
  border-radius: 1rem;
}
</style>