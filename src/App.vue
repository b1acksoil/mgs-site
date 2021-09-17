<template>
  <router-view />
</template>

<style lang="scss">
@import 'assets/scss/vars.scss';

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap');

@font-face {
  font-family: 'Harmony OS Sans';
  src: url('assets/font/HarmonyOS_Sans.ttf');
}

* {
  font-family: 'Rubik', 'Harmony OS Sans', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.2);
}

body {
  background: #222;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>