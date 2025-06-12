<template>
    <div class="hero">
        <div class="hero-title">
            <h1 class="title">João</h1>
            <p class="subtitle">Pedro</p>
        </div>

        <button class="btn-primary">
            <span>Get Started</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="css" scoped>
.hero-title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: 2rem;
    gap: 0rem;
}

.hero {
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
    color: var(--text-title);
    line-height: 2rem;
    text-align: end;
}

.subtitle {
    font-size: 4.5rem;
    font-weight: bold;
    text-align: end;
    margin: 0;
    color: var(--text-action);
}
</style>
