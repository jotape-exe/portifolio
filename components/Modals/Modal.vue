<template>
  <div v-if="isVisible">
    <div class="fixed inset-0 z-50 flex justify-center items-center">
      <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white">
        <div class="p-5">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-semibold">Modal Header</h3>
            <Button class="flex text-xl" @click="$emit('cancel')">
              <template #text>
                <Icon class="ml-2 text-xl" name="ph:x" />
              </template>
            </Button>
          </div>
        </div>
        <div class="p-6">
          <p>This is a modal body content. Let's make this line a bit longer to see the width.</p>
        </div>
        <div class="p-6 flex justify-end items-center">
          <button class="btn-outline" @click="$emit('cancel')">Cancel</button>
          <button class="btn ml-2" @click="$emit('confirm')">Confirm</button>
        </div>
      </div>
      <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['cancel', 'confirm'])

</script>