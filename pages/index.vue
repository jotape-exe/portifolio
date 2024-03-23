<template>
  <div>
    <HeroSection />

    <div class="w-full mb-7 flex p-7 items-center justify-center">
      <NuxtLink to="/projects">
        <Button size="lg" class="flex text-xl">
          <template #text>
            {{ $t('showProjects') }}
            <Icon class="ml-2 text-xl" name="ph:arrow-right" />
          </template>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  pageTransition: true
})



</script>

<style></style>