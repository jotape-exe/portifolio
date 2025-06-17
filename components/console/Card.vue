<template>
  <div class="console-card">
    <div class="console-line">
      <span class="console-symbol">$</span>
      <span class="console-text">
        <span>{{ text }}</span>
        <span class="console-cursor"></span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>

const {text} = defineProps<{ text: string }>();



</script>

<style scoped lang="css">
.console-card {
  background-color: var(--gray-900);
  color: var(--gray-50);
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  padding: 1rem;
  max-width: 32.5rem;
  border-radius: var(--radius-small);
  border: 1px solid var(--gray-700);
  overflow: hidden;
}

.console-line {
  display: flex;
  align-items: start;
}

.console-symbol {
  color: var(--green-400);
  margin-right: 0.5rem;
}

.console-text {
  display: inline-block;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-all;
}

.console-cursor {
  display: inline-block;
  background-color: var(--gray-50);
  width: 0.2rem;
  height: 1rem;
  margin-left: 0.1rem;
  opacity: 1;
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
