<template>
  <div class="p-1 rounded-lg shadow-md">
    <h1 class="text-2xl p-4 bg-zinc-100 dark:bg-zinc-600 custom-radius shadow-sm">
      {{ project.office }}
    </h1>
    <h2
      class="text-lg font-bold pl-4 py-2 bg-zinc-700 text-white custom-radius-bottom  dark:bg-zinc-400 shadow-sm mb-3 ">
      {{ project.company.name }}
    </h2>

    <p class="pl-2 text-lg">{{ project.dateInterval }}</p>
    <!--<Icon name="uil:github" color="black" />-->
    <p class="p-2"><strong class="text-lg">Resposavél por:</strong>{{ project.description }}</p>
    <div
      class="flex space-x-3 text-xl py-2 dark:bg-zinc-600  border-t-2 items-center custom-radius-bottom bg-zinc-100 justify-between border-zinc-300 pl-2">
      <span class="flex space-x-3 text-xl py-2">
        <Icon v-for="icon in project.icons" :key="icon" :name="icon" />
      </span>
      <NuxtLink :to="project.link" target="_blank">
        <Button class="pr-2">
          <template #text>
            <Icon name="uil:arrow-right" />
          </template>
        </Button>
      </NuxtLink>

      <!--<Icon name="simple-icons:javascript" />
        <Icon name="simple-icons:kotlin" />-->
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