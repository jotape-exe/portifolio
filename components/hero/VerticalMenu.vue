<template>
  <nav class="vertical-menu">
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
      <li><a href="#section4">Section 4</a></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="css">
.vertical-menu {
  position: fixed;
  right: 0;
  width: 200px;
  background-color: var(--background);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li{
    a{
      text-decoration: none;
      color: var(--text-action);
      padding: 0.5rem 1rem;
      display: block;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--hover-background);
      }
    }
  }
}
</style>