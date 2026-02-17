<template>
  <div class="experience-card">
    <div class="header">
      <div class="logo-wrapper" v-if="logo">
        <img :src="logo" :alt="company" class="logo" />
      </div>

      <div class="title-group">
        <div class="company-row">
          <p class="company">{{ company }}</p>
          <AppBadge v-if="current" color="green" size="sm">
            Atual
          </AppBadge>
        </div>

        <h3 class="position">{{ t(positionKey) }}</h3>
        <span class="date">{{ t(dateKey) }}</span> 
      </div>
    </div>

    <p v-if="descriptionKey" class="description">
      {{ t(descriptionKey) }}
    </p>

    <div v-if="stacks?.length" class="stacks">
      <AppBadge v-for="(s, i) in stacks" :key="i" variant="soft" color="primary" size="sm">
        {{ s }}
      </AppBadge>
    </div>
  </div>
</template>

<script lang="ts" setup>


export interface CardExperienceProps {
  company: string
  positionKey: string
  dateKey: string
  descriptionKey?: string
  stacks?: string[]
  logo?: string
  current?: boolean
  periodKey: string
}

defineProps<CardExperienceProps>()

const { t } = useI18n()

</script>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1rem;
  border-radius: var(--radius-large);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  position: relative;
  width: 100%;
  overflow: visible;
  cursor: default;
  transition: transform 0.25s ease;
}

.experience-card::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg,
      rgb(63, 131, 248) 0%,
      rgba(63, 131, 248, 0.048) 100%);
  opacity: 0.18;
  transition: width 0.35s ease;
  z-index: 0;
}

.experience-card:hover::before {
  width: 100%;
}

.experience-card:hover {
  transform: translateY(-2px);
}

.header,
.description,
.stacks {
  position: relative;
  z-index: 1;
}

.header {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.logo-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.logo {
  width: 80%;
  height: 80%;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.experience-card:hover .logo {
  transform: scale(1.08);
}

.title-group {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.company-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.company {
  font-size: 0.9rem;
  color: var(--text-subtitle);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.position {
  font-size: 1.15rem;
  margin: 0;
  color: var(--text-title);
  line-height: 1.2;
}

.date {
  font-size: 0.75rem;
  color: var(--text-caption);
}

.description {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.45;
}

.stacks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

@media (max-width: 768px) {
  .experience-card {
    padding: 0.7rem;
    gap: 0.45rem;
  }

  .logo-wrapper {
    width: 34px;
    height: 34px;
  }

  .position {
    font-size: 0.95rem;
  }

  .company {
    font-size: 0.75rem;
  }

  .date {
    font-size: 0.65rem;
  }

  .description {
    font-size: 0.75rem;
  }
}
</style>
