<template>
  <section class="font-mono flex rounded-xl items-center flex-col justify-start  p-4 shadow-xl">
    <img src="/images/joao.jpg" class="w-24 shadow-lg mb-2 rounded-full h-24" />
    <h1 class="text-2xl sm:text-5xl mb-1 text-center font-extrabold">João Pedro</h1>
    <div class="mb-4 flex space-x-2">
      <NuxtLink to="https://github.com/jotape-exe" target="_blank">
        <Icon
          class="text-4xl p-1 cursor-pointer bg-slate-500 bg-opacity-55 rounded-full hover:text-white hover:bg-slate-700"
          name="mdi:github" />
      </NuxtLink>
      <NuxtLink to="mailto:joaoxstone@gmail.com" target="_blank">
        <Icon
          class="text-4xl p-1 cursor-pointer bg-slate-500 bg-opacity-55 rounded-full hover:text-white hover:bg-slate-700"
          name="ph:envelope" />
      </NuxtLink>
    </div>
    <div class="console">
      <pre><span class="blink-caret text-rose-300">$</span> Sou um desenvolvedor de software apaixonado por criar soluções utéis e poderosas que cabem na palma da sua mão!
      </pre>
      <pre><span class="blink-caret text-rose-300">$</span> Comecei minha carreira em 2021, desde então coleciono experiências, habilidades e conexões! Utilizo principalmente Kotlin, VUE e NUXT em meus projetos.
      </pre>
      <pre><span class="blink-caret text-rose-300">$</span> Exploro novas tecnologias, mas também prezo muito pelos conhecimentos solidos na comunidade, como Clean Architecture, S.O.L.I.D e Padrões de Projetos.
      </pre>
      <pre><span class="blink-caret text-rose-300">$</span> Livros que me ajudaram ❤️:
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634/ref=sr_1_1?crid=2WA4HGZ59DW1H&dib=eyJ2IjoiMSJ9.2bcGWnm39oy1cLyMccaaYvGetXLzklT3uhHg1TDOEA-uUr6e5BRB0nIyShMWTkjlJ4ApinE6XaTApX_-vZoDpaUtC0Ay0HVs02BJcsjJTOcyGvpRv4VPQv_0SllacB6JS6q7HYI8gZPrco9XrX5pf2FepUbXgkBWA4lHEIjQ9og1RcNMeXhg053lkL6VbjI2vbxmbWnbLi7CFbX6aGaxx5MNCsnU1-R-lVWvQ1G6VyI.a_vk0pPbdhPKivZqwYpFx3mEA-wQh6_qQkhTbGLKoGU&dib_tag=se&keywords=entendendo+algoritmos&qid=1710607689&s=books&sprefix=entend%2Cstripbooks%2C159&sr=1-1">Entendendo Algoritmos</NuxtLink>
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/m%C3%ADtico-homem-m%C3%AAs-ensaios-engenharia-software/dp/8550802530">O mítico homem-mês</NuxtLink>
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/Ultra-aprendizado-habilidades-valiosas-competi%C3%A7%C3%A3o-carreira/dp/6555110058/ref=sr_1_1?adgrpid=110121468434&dib=eyJ2IjoiMSJ9.dpRZ7e5S-54PFf8wRSPWhTUg-SZ0S-BDNBFWovNcYwi2bS95AjHdZfmvqsKhpZ3u0XUo3VfoGpnaSTsxuFQ9Oq5ByVGJu3sEoBSKG665Skt6R6_w0qZc7hCdjKUilt7gjQaaqUHRSQRnQxqTlzNXQaLozKEeI_yAj808NKYpGBoVhP3PItU4iutzO94fzL8Ft9zxS9-_9sTBCFcqML_Xepei7zDMp6d_kYUmAb1Kp0KuVTapuYSA5NHUcBtkZqOptRdgRpUneEewl14svBuEBcOb43bP46zdw0PTxffIrlI.i8nS5fWazoG5KSX8dLVXQJbfPX80N1XuA3Iarvcjn3M&dib_tag=se&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojQj0trTQBA60db8nozlgDk5RsNNsohLnDrw7_amCjVqpcD_v1-2XwaAsDsEALw_wcB&hvadid=457998955394&hvdev=c&hvlocphy=1001506&hvnetw=g&hvqmt=e&hvrand=9526570931415262295&hvtargid=kwd-1184109887750&hydadcr=5627_11235151&keywords=ultra-aprendizado&qid=1710607434&sr=8-1">Ultra Aprendizado</NuxtLink>
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2WT1EE3NG4UBZ&dib=eyJ2IjoiMSJ9.iH0LT2ck-dvNG8mbu4U6P-dO2tNhH2XKYtpQE30riWrmxfBDqitA4BhT5xNfv68bFhJhPreoAELKnp3yp-hdIcgynod9I7YWy5uaE5quVvJ-MWiVwEkpfVQLSZnDV5orfaRIEBuIq08VVbJzxHsoyqvCPSnIzK1rL8CL3-X77PcttlQ81vU7cNDDGXAilHaSy3PXAlvUYcB7GzKv-P_PZKtRLYS5qKIJg0Kx-iCA-BPrPYtIUXY-iNjgdhUcTc1gEPsO6PAYCl794cBN1GWVsFlQy-B-NSZVkOXPE6cdnaw.IwRX6VRS08b963zTJjQVewUyfbyjCyGkN9L97aB3l2M&dib_tag=se&keywords=padr%C3%B5es+do+projeto&qid=1710607475&sprefix=padr%C3%B5es+do+projeto%2Caps%2C153&sr=8-4&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d">Padrões de Projeto</NuxtLink>
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=asc_df_8576082675/?tag=googleshopp00-20&linkCode=df0&hvadid=379792215563&hvpos=&hvnetw=g&hvrand=2234968430641181494&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001506&hvtargid=pla-398225630878&psc=1&mcid=2b0fb83a4146383497d27512de9c9086" >Código Limpo</NuxtLink>
   - <NuxtLink class="border-b-2" to="https://www.amazon.com.br/Arquitetura-Limpa-Artes%C3%A3o-Estrutura-Software/dp/8550804606/ref=asc_df_8550804606/?tag=googleshopp00-20&linkCode=df0&hvadid=379787347388&hvpos=&hvnetw=g&hvrand=2234968430641181494&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001506&hvtargid=pla-809227152896&psc=1&mcid=91d281a60b4d3356b3d2e7d03d346a73">Arquitetura Limpa</NuxtLink>
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
  max-width: 700px;
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