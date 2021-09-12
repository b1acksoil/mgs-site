<template>
  <router-view />
</template>

<style lang="scss">
@import 'assets/scss/vars.scss';

* {
  font-family: sans-serif;
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