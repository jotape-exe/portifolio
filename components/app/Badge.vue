<template>
  <span class="badge" :class="[
    `badge--${color}`,
    `badge--${variant}`,
    `badge--${size}`
  ]">
    <slot />
  </span>
</template>

<script setup lang="ts">

export type BadgeColors = 'primary'
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'indigo'
  | 'purple'
  | 'pink'

withDefaults(
  defineProps<{
    color?: BadgeColors
    variant?: 'solid' | 'outline' | 'soft'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'primary',
    variant: 'solid',
    size: 'md'
  }
)
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
}

/* SIZES */
.badge--sm {
  font-size: 0.7rem;
  padding: 0.15rem 0.4rem;
}

.badge--md {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
}

.badge--lg {
  font-size: 0.9rem;
  padding: 0.25rem 0.6rem;
}

/* SOLID */
.badge--primary.badge--solid {
  background: var(--primary-600);
  color: white;
}

.badge--gray.badge--solid {
  background: var(--gray-600);
  color: white;
}

.badge--blue.badge--solid {
  background: var(--blue-600);
  color: white;
}

.badge--red.badge--solid {
  background: var(--red-600);
  color: white;
}

.badge--orange.badge--solid {
  background: var(--orange-600);
  color: white;
}

.badge--yellow.badge--solid {
  background: var(--yellow-500);
  color: white;
}

.badge--green.badge--solid {
  background: var(--green-600);
  color: white;
}

.badge--teal.badge--solid {
  background: var(--teal-600);
  color: white;
}

.badge--indigo.badge--solid {
  background: var(--indigo-600);
  color: white;
}

.badge--purple.badge--solid {
  background: var(--purple-600);
  color: white;
}

.badge--pink.badge--solid {
  background: var(--pink-600);
  color: white;
}

/* OUTLINE */
.badge--primary.badge--outline {
  border: 1px solid var(--primary-600);
  color: var(--primary-600);
}

.badge--gray.badge--outline {
  border: 1px solid var(--gray-600);
  color: var(--gray-600);
}

.badge--blue.badge--outline {
  border: 1px solid var(--blue-600);
  color: var(--blue-600);
}

.badge--red.badge--outline {
  border: 1px solid var(--red-600);
  color: var(--red-600);
}

.badge--orange.badge--outline {
  border: 1px solid var(--orange-600);
  color: var(--orange-600);
}

.badge--yellow.badge--outline {
  border: 1px solid var(--yellow-500);
  color: var(--yellow-500);
}

.badge--green.badge--outline {
  border: 1px solid var(--green-600);
  color: var(--green-600);
}

.badge--teal.badge--outline {
  border: 1px solid var(--teal-600);
  color: var(--teal-600);
}

.badge--indigo.badge--outline {
  border: 1px solid var(--indigo-600);
  color: var(--indigo-600);
}

.badge--purple.badge--outline {
  border: 1px solid var(--purple-600);
  color: var(--purple-600);
}

.badge--pink.badge--outline {
  border: 1px solid var(--pink-600);
  color: var(--pink-600);
}

/* SOFT */
.badge--primary.badge--soft {
  background: var(--primary-100);
  color: var(--primary-700);
}

.badge--gray.badge--soft {
  background: var(--gray-100);
  color: var(--gray-700);
}

.badge--blue.badge--soft {
  background: var(--blue-100);
  color: var(--blue-700);
}

.badge--red.badge--soft {
  background: var(--red-100);
  color: var(--red-700);
}

.badge--orange.badge--soft {
  background: var(--orange-100);
  color: var(--orange-700);
}

.badge--yellow.badge--soft {
  background: var(--yellow-100);
  color: var(--yellow-700);
}

.badge--green.badge--soft {
  background: var(--green-100);
  color: var(--green-700);
}

.badge--teal.badge--soft {
  background: var(--teal-100);
  color: var(--teal-700);
}

.badge--indigo.badge--soft {
  background: var(--indigo-100);
  color: var(--indigo-700);
}

.badge--purple.badge--soft {
  background: var(--purple-100);
  color: var(--purple-700);
}

.badge--pink.badge--soft {
  background: var(--pink-100);
  color: var(--pink-700);
}
</style>
