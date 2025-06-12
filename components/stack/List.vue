<template>
  <div class="stack-card-list-grid">
    <StackCard v-for="(stack, index) in stacks" :title="stack.title" :key="index"
      :class="{ 'animate-visible': visibleItems.includes(index) }" :style="{ transitionDelay: `${index * 100}ms` }"
      ref="cards">
      <template #icon>
        <img v-if="stack?.icon" class="stack-icon" :src="stack.icon" />
      </template>
    </StackCard>
  </div>
</template>

<script lang="ts" setup>

const { stacks } = defineProps(['stacks']);
const visibleItems = ref<number[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting && !visibleItems.value.includes(index)) {
          visibleItems.value.push(index);
        }
      });
    },
    { threshold: 0.1 }
  );

  const cards = document.querySelectorAll('.stack-card');
  cards.forEach((card, index) => {
    card.setAttribute('data-index', index.toString());
    observer.observe(card);
  });
});
</script>

<style scoped lang="css">
.stack-card-list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: flex-end;
  justify-content: end;
}

.stack-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.stack-card.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.stack-icon {
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 0.2rem;
}

@media (max-width: 768px) {
  .stack-card-list-grid {
    grid-template-columns: repeat(2, 1fr);
    justify-content: end;
    /* Garante alinhamento à direita no layout de 2 colunas */
  }
}

@media (max-width: 480px) {
  .stack-card-list-grid {
    grid-template-columns: 1fr;
    justify-content: end;
    /* Garante alinhamento à direita no layout de 1 coluna */
  }
}
</style>
