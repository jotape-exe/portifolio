<template>
  <component>
    <div class="p-1 rounded-lg shadow-2xl flex flex-col  justify-between">
    <div>
      <h1 class="text-base font-bold p-1 bg-zinc-100 dark:bg-zinc-800 custom-radius shadow-sm">
        {{ project.office }}
      </h1>
      <div
        class="flex justify-between py-[1.9px] px-2 mb-3 space-x-3 items-center w-full bg-zinc-700 dark:bg-zinc-700 shadow-sm dark:text-zinc-900 custom-radius-bottom dark:bg-opacity-70 bg-opacity-80">
        <h2 class="text-md text-white ">
          {{ project.company.name }}
        </h2>
        <p class="text-sm text-zinc-50 font-thin opacity-70">{{ project.dateInterval }}</p>
      </div>
    </div>


    <div class=" flex flex-col">
      <p class="p-1 text-sm" :class="expanded ? '' : 'line-clamp-2'">{{ project.description }}</p>
      <Button @click="toggleExpanded" variant="simple" rounded="xl" class="pr-2">
        <template #text>
         <span class=" text-xs" >{{ expanded ? 'Menos' : 'Mais' }}</span> <Icon class="text-md" :class="expanded ? 'rotate-180' : ''" name="uil:angle-double-down" />
        </template>
      </Button>
    </div>
    <div class=" space-x-2 p-1">
      <strong class=" text-xs font-extrabold " v-for="tag in project.tags" :key="tag">#{{ tag }}</strong>
    </div>

    <div
      class="flex space-x-3 text-xl py-2 dark:bg-zinc-900  border-t-2 items-center custom-radius-bottom bg-zinc-100 justify-between border-zinc-300 pl-2">
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
        <NuxtLink v-if="project.github" :to="project.github" target="_blank">
          <Button variant="black" rounded="xl" class="pr-2">
            <template #text>
              <Icon class="text-xl" name="uil:github" />
            </template>
          </Button>
        </NuxtLink>
      </div>

    </div>
  </div>
  </component>
</template>

<script lang="ts" setup>


const props = defineProps(["project"])
const expanded = ref(false)

const toggleExpanded = () => {
  expanded.value =!expanded.value
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