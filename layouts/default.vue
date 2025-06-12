<template>
  <div class="layout-default" >
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
.layout-default {
  padding: 1rem;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
}

</style>