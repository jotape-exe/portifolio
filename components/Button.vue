<template>
    <div>
        <button :class="`${variant ? variants[variant] : variants.default} ${rounded ? roundedOPTS[rounded] : 'rounded-xl'} ${size ? sizeOPTS[size] : 'py-2 px-2'}`"
            class="
            flex items-center justify-between
            font-semibold py-2 px-2 border  rounded-full transition duration-300 ease-in-out">
            <slot class="mr-6 pr-4" name="first-icon" />
            <slot class="mr-5" name="text" />
        </button>
        <slot name="last-icon" />
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(["rounded", "size", "variant"])

const roundedOPTS = {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-md',
    'xl': 'rounded-xl'
}

const sizeOPTS = {
    'sm': 'py-1 px-1',
    'md': 'py-3 px-3',
    'lg': 'py-4 px-4'
}

const variants = {
    default : 'default',
    black: 'black-btn',
    simple: 'simple'
}
</script>

<style>
.default{
    background-color: #fff;
    color: #000;
    border: solid 1px #000;

}

.default:hover{
    transition-delay: 50ms;
    cursor: pointer;
    color: #fff;
    background-color: #000;
}

.dark .default{
    background-color: #000;
    color: #fff;
    border: solid 1px #fff;

}

.dark .default:hover{
    transition-delay: 50ms;
    cursor: pointer;
    color: #000;
    background-color: #fff;
}

.simple{
    background-color: #00000000;
    color: #000;
    border: none
}

.dark .simple{
    background-color: #00000000;
    color: #fff;
    border: none
}

.simple:hover{
    transition-delay: 50ms;
    cursor: pointer;
    color: #000000;
    background-color: #2727273d;
}

.black-btn{
    background-color: #000;
    color: #fff;
    border: solid 1px #000000;
}

.black-btn:hover{
    transition-delay: 50ms;
    cursor: pointer;
    color: #000000;
    background-color: #ffffff;
}

.dark .black-btn{
    background-color: #ffffff;
    color: #000000;
    border: solid 1px #000000;
}

.dark .black-btn:hover{
    transition-delay: 50ms;
    cursor: pointer;
    color: #ffffff;
    background-color: #000000;
}

</style>