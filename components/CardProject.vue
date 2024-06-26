<template>
  <div class="p-1 rounded-lg shadow-2xl flex flex-col  justify-between">
    <div>
      <h1 class="text-2xl p-4 bg-zinc-100 dark:bg-zinc-800 custom-radius shadow-sm">
        {{ project.office }}
      </h1>
      <h2
        class="text-lg font-bold pl-4 py-2 bg-zinc-700 text-white dark:text-zinc-900 custom-radius-bottom  dark:bg-zinc-200 shadow-sm mb-3 ">
        {{ project.company.name }}
      </h2>
    </div>

    <p class="pl-2 text-lg">{{ project.dateInterval }}</p>
    <!--<Icon name="uil:github" color="black" />-->
    <p class="p-2  text-base">{{ project.description }}</p>
    <div class=" space-x-2 p-1">
      <strong class=" text-xs font-extrabold " v-for="tag in project.tags" :key="tag">#{{ tag }}</strong>
    </div>

    <div
      class="flex space-x-3 text-xl py-2 dark:bg-zinc-600  border-t-2 items-center custom-radius-bottom bg-zinc-100 justify-between border-zinc-300 pl-2">
      <span class="flex space-x-3 text-xl py-2">
        <Icon v-for="icon in project.icons" :key="icon" :name="icon" />
      </span>
      <div class=" flex items-center justify-center">
        <NuxtLink v-if="project.link" :to="project.link" target="_blank">
          <Button class="pr-2">
            <template #text>
              <Icon name="uil:arrow-right" />
            </template>
          </Button>
        </NuxtLink>
        <NuxtLink v-if="project.github" :to="project.github"  target="_blank" >
          <Button variant="black" rounded="xl" class="pr-2">
            <template #text>
              <Icon class="text-xl" name="uil:github" />
            </template>
          </Button>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>


const props = defineProps(["project"])

function openLink(link: string) {
  window.open(link, '_blank')
}

</script>

<style>
.custom-radius {
  -webkit-border-top-left-radius: 8px;
  -webkit-border-top-right-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-topright: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.custom-radius-bottom {
  -webkit-border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>