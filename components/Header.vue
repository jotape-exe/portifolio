<template>
  <div>
    <header
      class="fixed custom-bg top-0 left-0 border-b-2 border-zinc-900 dark:border-zinc-50 w-full bg-transparent bg-opacity-30 backdrop-blur-lg py-1 px-6 shadow-md z-50">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex flex-col active:bg-slate-200  active:bg-opacity-20 rounded-lg p-3">
          <div class="flex items-center justify-center">
            <Icon class="mr-2 text-4xl dark:text-white" name="ph:terminal-window" />
            <h1 class="text-xl dark:text-white">Hello World</h1>
          </div>
          <div class="bg-slate-400 dark:bg-slate-50 h-0.5 w-28 mt-3"></div>
        </NuxtLink>
        

        <button @click="toggleActive = !toggleActive" data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center md:hidden bg-zinc-50  dark:bg-zinc-900  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-500 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <Icon v-if="!toggleActive" class="text-2xl" name="ph:list" />
          <Icon v-else class="text-2xl" name="ph:x" />
        </button>


        <div class="hidden md:flex">

          <NuxtLink to="/" class="mr-2">
            <Button class="flex items-center justify-center rounded-sm">
              <template #first-icon>
                <Icon class="text-2xl" name="ph:house-fill" />
              </template>
            </Button>
          </NuxtLink>


          <NuxtLink to="/projects">
            <Button rounded="xl" class="flex items-center justify-center">
              <template #first-icon>
                <Icon class="text-2xl mr-3" name="ph:layout-fill" />
              </template>
              <template #text>
                {{ $t('projects') }}
              </template>

            </Button>
          </NuxtLink>
          <div class=" flex items-center justify-center space-x-2">
          <button
            class="ml-5 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-200 justify-center bg-gray-100 p-2 rounded-md shadow-md dark:bg-zinc-900"
            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50"
              viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <DropdownLanguage />
          </div>
        </div>

      </div>
    </header>
    <div v-if="toggleActive" :class="{ 'slide-in-down': toggleActive, 'slide-out-up': !toggleActive }"
      class="bg-zinc-50 md:hidden mt-24 fixed top-0 right-0 left-0 rounded-sm shadow-md dark:bg-zinc-600 m-5 p-3 flex flex-col">
      <ul class="text-xl  w-full  flex items-center justify-center flex-col space-y-4 font-bold">
        <li @click="$router.push('/')"
          class=" hover:bg-zinc-300 hover:text-black  w-full text-center cursor-pointer p-2 rounded-md">
          {{ $t('home').toUpperCase() }}
        </li>
        <li @click="$router.push('/projects')"
          class=" hover:bg-zinc-300 hover:text-black w-full text-center  cursor-pointer p-2 rounded-md">
          {{ $t('projects').toUpperCase() }}
        </li>

        <li class="flex">
          <button
            class="flex items-center  focus:outline-none focus:ring-2 focus:ring-gray-200 justify-center bg-gray-100 p-2 rounded-md shadow-md dark:bg-zinc-900"
            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50"
              viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
        <li>
          <DropdownLanguage />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

const toggleActive = ref(false)

type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

</script>

<style>
.custom-bg {
  background-color: rgba(255, 255, 255, 0.075);
}

.slide-in-down {
  animation: slideInDown 0.5s ease forwards;
}

.slide-out-up {
  animation: slideOutUp 0.5s ease forwards;
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOutUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>