<template>
  <div id="app">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="stars4"></div>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { theme, setTheme } = useTheme();

onBeforeMount(() => {
  document.documentElement.classList.add(theme.value);
});
</script>

<style lang="css" scoped>
#stars,
#stars2,
#stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 700px 700px var(--text-title), 1400px 2000px var(--text-title), 600px 900px var(--text-title);
  animation: animStar 50s linear infinite;
}

#stars::after {
  content: "";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 700px 700px var(--text-title), 1400px 2000px var(--text-title), 600px 900px var(--text-title);
}

#stars4 {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 700px 700px var(--text-title), 1400px 2000px var(--text-title), 600px 900px var(--text-title);
  animation: animStar 50s linear infinite;
}

#stars4::after {
  content: "";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 700px 700px var(--text-title), 1400px 2000px var(--text-title), 600px 900px var(--text-title);
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 200px 800px var(--text-title), 300px 1000px var(--text-title), 100px 400px var(--text-title);
  animation: animStar 100s linear infinite;
}

#stars2::after {
  content: "";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 200px 800px var(--text-title), 300px 1000px var(--text-title), 100px 400px var(--text-title);
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 100px 200px var(--text-title), 500px 700px var(--text-title), 300px 600px var(--text-title);
  animation: animStar 150s linear infinite;
}

#stars3::after {
  content: "";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 100px 200px var(--text-title), 500px 700px var(--text-title), 300px 600px var(--text-title);
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  color: var(--text-title);
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
}

#title span {
  background: linear-gradient(var(--text-title), #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }
}
</style>