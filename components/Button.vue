<template>
    <div>
        <button class="bg-transparent
        dark:text-white
         hover:bg-black text-black 
         hover:text-white 
         flex items-center justify-between
         font-semibold py-2 px-4 border border-black dark:border-white rounded-full transition duration-300 ease-in-out">
            <slot class="mr-6 pr-4" name="first-icon" />
            <slot class="mr-5" name="text" />
        </button>
        <slot name="last-icon" />
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>