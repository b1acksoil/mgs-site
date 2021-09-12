<template>
  <div id="main-layout">
    <div id="nav-bg"></div>
    <NavMenu />

    <div id="page-view">
      <router-view />
    </div>

    <Footer />
  </div>

  <div id="footer-copyright">
    &copy; 南昌三中手极社音游部 2021
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavMenu from '../components/NavMenu.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { NavMenu, Footer },
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
      navBarStyle,
    }
  },
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

.page-view {
  box-sizing: border-box;
  color: #fff;
  padding: 40px 60px;
}

#footer-copyright {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background: url('../assets/img/nav-bg.jpg');
  color: white;
}
</style>
