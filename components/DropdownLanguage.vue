<template>
  <div>
    <div>
      <button @click="dropdownOpen = !dropdownOpen"
        class="dropdown-toggle flex items-center px-2 py-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
        type="button" aria-expanded="false" aria-haspopup="true">
        <BR v-if="locale === 'pt-BR'" class="w-5 h-5" />
        <ES v-else-if="locale === 'es-ES'" class="w-5 h-5" />
        <US v-else-if="locale === 'en-US'" class="w-5 h-5" />
        <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>

      <div v-show="dropdownOpen"
        class="dropdown-menu absolute transition-all duration-100 ease-out mt-1 origin-top-right rounded-md shadow-sm bg-white dark:bg-zinc-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
        aria-labelledby="dropdownMenuButton1">
        <div @click="setlagunage('pt-BR')"
          class="block cursor-pointer px-2 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-400" role="menuitem"
          tabindex="-1" id="dropdownLink1">
          <BR class="w-5 h-5" />
        </div>
        <div @click="setlagunage('es-ES')"
          class="block cursor-pointer px-2 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-400" role="menuitem"
          tabindex="-1" id="dropdownLink2">
          <ES class="w-5 h-5" />
        </div>
        <div @click="setlagunage('en-US')"
          class="block cursor-pointer px-2 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-400" role="menuitem"
          tabindex="-1" id="dropdownLink3">
          <US class="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import BR from '@/components/BR.vue';
import US from '@/components/US.vue';
import ES from '@/components/ES.vue';


const { locale } = useI18n()

const dropdownOpen = ref(false)

const setlagunage = (lang: string) => {
  locale.value = lang
  dropdownOpen.value = false
}
</script>

<style></style>