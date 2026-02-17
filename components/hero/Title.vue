<template>
    <div class="hero">
        <motion.div class="hero-title" :initial="{ opacity: 0, x: -50 }" :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }">
            <h1 class="title">JOÃO</h1>
            <p class="subtitle">PEDRO</p>
        </motion.div>

        <AppDivider height="1px" color="var(--text-title)" />

        <motion.span class="developer-title anton-regular" :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.8, delay: 0.4, ease: 'easeOut' }">
            SOFTWARE DEVELOPER
        </motion.span>
    </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

</script>

<style scoped lang="css">
.hero-title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
}

.developer-title {
    font-size: 4rem;
}

.hero {
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 7rem;
    font-weight: bold;
    line-height: 1.8rem;
    margin: 0;
    color: var(--text-title);
    text-align: end;
}

.subtitle {
    font-size: 7rem;
    font-weight: bold;
    margin: 0;
    color: var(--text-action);
    text-align: end;
}

@media (max-width: 768px) {

    .hero-title {
        align-items:center;
    }

    .title {
        font-size: 4rem;
        line-height: 1.8rem;

    }

    .subtitle {
        font-size: 4rem;
    }

    .developer-title {
        font-size: 2rem;
    }
}
</style>
