<template>
  <footer class="hero-footer">
    <h2>Entre em contato</h2>
    <div class="buttons-footer">
      <a href="https://www.linkedin.com/in/joao-psv/" target="_blank">
        <button class="btn-icon btn-action-footer">
          <Icon name="lucide:linkedin" />
        </button>
      </a>
      <a href="mailto:joaoxstone@gmail.com" target="_blank">
        <button class="btn-icon btn-action-footer">
          <Icon name="lucide:mail" />
        </button>
      </a>

      <a href="https://github.com/jotape-exe" target="_blank">
        <button class="btn-icon btn-action-footer">
          <Icon name="lucide:github" />
        </button>
      </a>

    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style>
.hero-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin-top: 4rem;
  background-color: var(--background-secondary);
  color: var(--text-title);
}

.hero-footer h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.hero-footer p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.hero-footer a {
  color: var(--text-link);
  text-decoration: none;
}

.hero-footer a:hover {
  text-decoration: underline;
}

.buttons-footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.btn-action-footer {
  font-size: 1.9rem;
  margin: 2.5rem 0;
}

@media (max-width: 768px) {
  .hero-footer h2 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  .btn-action-footer {
    font-size: 1rem;
    margin: 1.5rem 0;
  }
}
</style>