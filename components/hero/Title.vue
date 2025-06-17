<template>
    <div class="hero">
        <div class="hero-title">
            <h1 class="title">JOÃO</h1>
            <p class="subtitle">PEDRO</p>
        </div>
        <AppDivider height="1px" color="var(--text-title)" />
        <span class="developer-title anton-regular">FULLSTACK DEVELOPER</span>
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
    gap: 0rem;
}

.developer-title{
    font-size: 4rem;
}

.hero {
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 7rem;
    font-weight: bold;
    margin: 0;
    color: var(--text-title);
    line-height: 1.8rem;
    text-align: end;
}

.subtitle {
    font-size: 7rem;
    font-weight: bold;
    text-align: end;
    margin: 0;
    color: var(--text-action);
}
</style>
