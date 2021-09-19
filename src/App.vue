<template>
  <router-view />
</template>

<script>
export default {
  setup() {
    console.log(String.raw
`

 __  __   _____   _____  _ 
|  \/  | / ____| / ____|| |
| \  / || |  __ | (___  | |
| |\/| || | |_ | \___ \ | |
| |  | || |__| | ____) ||_|
|_|  |_| \_____||_____/ (_)

Welcome to Music Game Section Offical Site!

`
    )
  },
}
</script>

<style lang="scss">
@import 'assets/scss/vars.scss';

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap');

@font-face {
  font-family: 'Harmony OS Sans';
  src: url('https://cdn.jsdelivr.net/gh/b1acksoil/mgs-site-assets@master/fonts/HarmonyOS_Sans.ttf');
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