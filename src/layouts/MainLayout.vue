<template>
  <div id="main-layout">
    <div id="nav-bg" v-if="isDesktop"></div>
    <NavBar v-if="isDesktop" />
    
    <NavBarMobile v-else />

    <div id="page-view">
      <router-view />
    </div>

    <Footer v-if="isDesktop" />
  </div>

  <div id="footer-copyright">
    &copy; 南昌三中手极社音游部 2021
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import NavBar from '../components/NavBar.vue'
import NavBarMobile from '../components/Mobile/NavBarMobile.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavBar, NavBarMobile,
    Footer
  },
  setup() {
    const navLinks = [
      {
        path: '/home',
        name: '首页',
        icon: 'home',
      },
      {
        path: '/news',
        name: '新闻',
        icon: 'newspaper',
      },
      {
        path: '/videos',
        name: '手元',
        icon: 'video',
      },
      {
        path: '/members',
        name: '成员',
        icon: 'user',
      },
      {
        path: '/about',
        name: '关于',
        icon: 'heart',
      },
    ]

    let isDesktop = ref(window.screen.width >= 768)

    window.addEventListener('resize', () => {
      isDesktop.value = (window.screen.width >= 768)
    })
    
    provide('navLinks', navLinks)
    provide('isDesktop', isDesktop)

    return {
      isDesktop
    }
  },
})
</script>

<style lang="scss">
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
  background: url('https://cdn.jsdelivr.net/gh/b1acksoil/mgs-site-assets@master/img/nav-bg.jpg');
}

#page-view {
  margin-top: $nav-bar-height + 25px;
  width: calc(100% - 40px);
  min-height: 900px;
  background-color: #292929;
}

.page-view {
  box-sizing: border-box;
  color: #fff;
  padding: 40px 60px;

}

.page-title {
  text-align: center;
}

#footer-copyright {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background: url('https://cdn.jsdelivr.net/gh/b1acksoil/mgs-site-assets@master/img/nav-bg.jpg');
  color: white;
}

@media screen and (max-width: 768px) {
  #main-layout {
    width: 100%;
  }

  #page-view {
    margin-top: 100px;
    // width: 100%;
  }

  .page-view {
    padding: 20px;
    position: relative;
  }
}
</style>
