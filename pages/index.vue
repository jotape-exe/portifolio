<template>
  <div >
    <HeroSection />
    <div class="w-full mb-7 flex p-7 items-center justify-center">
      <NuxtLink to="/projects">
        <Button size="lg" class="flex text-xl">
          <template #text>
            Ver Projetos
            <Icon class="ml-2 text-xl" name="ph:arrow-right" />
          </template>
        </Button>
      </NuxtLink>
    </div>
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