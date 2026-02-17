<template>
  <div class="console-card">
    <div class="console-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="console-title">bash</span>
    </div>

    <div class="console-body">
      <div class="console-line">
        <span class="console-prompt">joao@dev:~$</span>
        <span class="console-text">
          {{ $t('home.consoleText') }}
          <span class="console-cursor"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.console-card {
  margin-top: 3rem;
  background: #0d1117;
  color: #c9d1d9;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  border-radius: 10px;
  border: 1px solid #30363d;
  overflow: hidden;
  max-width: 520px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4),
    inset 0 0 40px rgba(0, 0, 0, 0.6);
}

.console-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
  position: relative;
}

.console-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: #8b949e;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red {
  background: #ff5f56;
}

.yellow {
  background: #ffbd2e;
}

.green {
  background: #27c93f;
}

.console-body {
  padding: 14px;
  line-height: 1.5;
  font-size: 0.95rem;
}

.console-line {
  display: flex;
  flex-wrap: wrap;
}

.console-prompt {
  color: #7ee787;
  margin-right: 8px;
}

.console-text {
  white-space: pre-wrap;
  word-break: break-word;
}

.console-cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  margin-left: 2px;
  background: #c9d1d9;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.console-card::after {
  content: "";
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(to bottom,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 3px);
  opacity: 0.15;
}
</style>
