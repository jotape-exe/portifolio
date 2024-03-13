<template>
  <div>
    <div class="grid-cols-1 grid md:grid-cols-3 gap-3">
      <CardProject v-for="i in 20" :key="i" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

definePageMeta({
  pageTransition: true
})

useSeoMeta({
  title: 'Projects'
})
</script>

<style></style>