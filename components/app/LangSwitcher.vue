<template>
  <div class="lang-switcher">
    <button class="btn-icon" @click="dropdownOpen = !dropdownOpen">
      <component :is="currentFlag" class="flag-icon" />
    </button>

    <motion.div v-if="dropdownOpen" class="dropdown-menu" :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }" :exit="{ opacity: 0, scale: 0.9 }" :transition="{ duration: 0.1 }">
      <div class="option-lang" v-for="option in languages" :key="option.code" @click="setLanguage(option.code)">
        <span>{{ option.code }}</span>
        <component :is="option.flag" class="flag-icon" />
      </div>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import FlagBrazil from '@/components/flag/Brazil.vue';
import FlagSpain from '@/components/flag/Spain.vue';
import FlagUSA from '@/components/flag/USA.vue';
import { motion } from 'motion-v';
import { useI18n } from 'vue-i18n';


const { locale } = useI18n();
const dropdownOpen = ref(false);

const languages = [
  { code: 'pt', flag: FlagBrazil },
  { code: 'es', flag: FlagSpain },
  { code: 'en', flag: FlagUSA },
];

const currentFlag = computed(() => {
  const lang = languages.find((l) => l.code === locale.value);
  return lang ? lang.flag : FlagBrazil;
});

const setLanguage = (lang: string) => {
  locale.value = lang;
  dropdownOpen.value = false;
};
</script>

<style scoped lang="css">
.lang-switcher {
  position: relative;
}

.flag-icon {
  width: 1.7rem;
  height: 1.3rem;
}

.lang-code {
  font-size: 0.9rem;
  font-weight: bold;
}

.option-lang{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  width: 100%;
  padding:  0.1rem 0.5rem;
  width: max-content;
  cursor: pointer;
  border-radius: 0.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.123);;
  }

  span{
    text-transform: uppercase;
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--background);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  padding: 0.2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}


</style>
