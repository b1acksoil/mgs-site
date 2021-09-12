<template>
  <div id="main-layout">
    <div id="nav-bg"></div>
    <NavMenu />
    <div id="page-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavMenu from '../components/NavMenu.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { NavMenu },
  setup() {
    const navBarStyle = ref({})

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navBarStyle.value = { backgroundColor: '#eee' }
      } else {
        navBarStyle.value = {}
      }
    })

    return {
      navBarStyle
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

#main-layout {
  width: $page-width;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav-bg {
  z-index: -1;
  position: absolute;
  left: 0;
  width: 100%;
  height: $nav-bg-height;
  background: url('../assets/img/nav-bg.jpg');
}

#page-view {
  margin-top: $nav-menu-height + 25px;
  width: calc(100% - 40px);
  min-height: 900px;
  background-color: #292929;
}
</style>