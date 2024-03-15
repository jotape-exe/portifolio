<template>
  <section class="font-mono flex rounded-xl items-center flex-col justify-start mb-3 p-4 shadow-xl">
    <img src="/images/joao.jpg" class="w-24 shadow-lg mb-2 rounded-full h-24" />
    <h1 class="text-2xl mb-4 sm:text-6xl  text-center font-extrabold">joaoXstone</h1>
    <div class="console">
      <pre><span class="blink-caret">$</span> Sou um desenvolvedor de software apaixonado por criar soluções utéis e poderosas que cabem na palma da sua mão!
        <pre><span class="blink-caret">$</span> Comecei minha carreira em 2021, desde então coleciono experiências, habilidades e conexões! Utilizo principalmente Kotlin, VUE e NUXT em meus projetos</pre>
      </pre>
    </div>

  </section>
</template>

<script setup>

</script>

<style>
.console {
  background-color: #0f111a;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
  overflow-x: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.console pre {
  white-space: pre-wrap;
  word-break: break-all;
}

@keyframes blink-caret {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.blink-caret {
  animation: blink-caret 0.75s step-end infinite;
}

/* Example animations */
</style>