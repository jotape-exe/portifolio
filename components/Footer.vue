<template>
  <div class="bottom-0 self-end right-0 left-0 justify-end mt-20">
    <footer class="bg-zinc-200 py-8 dark:bg-zinc-800  w-full px-10 shadow-md z-50">
      <h3 class="mb-4 text-2xl border-b-2 border-zinc-900 dark:border-zinc-200 w-20">{{ $t('contact') }}</h3>
      <div class="flex items-center justify-between w-full">
        <NuxtLink to="https://github.com/jotape-exe" target="_blank">
          <Icon
            class="text-4xl p-1 cursor-pointer bg-slate-500 bg-opacity-55 rounded-full hover:text-white hover:bg-slate-700"
            name="mdi:github" />
        </NuxtLink>
        <div class="flex space-x-2">
          <NuxtLink to="https://www.instagram.com/joaoxstone" target="_blank">
            <Icon
              class="text-4xl p-1 cursor-pointer bg-rose-600 bg-opacity-55 text-white rounded-full  hover:bg-rose-900"
              name="mdi:instagram" />
          </NuxtLink>

          <NuxtLink to="https://www.linkedin.com/in/joao-psv/" target="_blank">
            <Icon
              class="text-4xl p-1 cursor-pointer bg-blue-500 bg-opacity-55 rounded-full text-white hover:bg-blue-700"
              name="mdi:linkedin" />
          </NuxtLink>

        </div>
      </div>

    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>