<template>
  <div>
    <HeroSection style="height: 70dvh;"  />
    <AboutSection style="height: 70dvh;" />
    <!--<SkillsSection />-->
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

definePageMeta({
  pageTransition: true
})


useSeoMeta({
  title: 'Home'
})
onMounted(() => {
  console.log(route.fullPath);

})
</script>

<style></style>