<template>
  <div id="nav-bar" :style="navBarStyle">
    <div id="nav-menu">
      <a href="/home"><img src="../assets/img/logo/logo.png" alt="Home"/></a>
      <router-link
        class="nav-menu-link"
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path" 
        replace>
        <fa-icon :icon="link.icon"></fa-icon>&nbsp;&nbsp;{{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'NavMenu',
  components: {},
  setup() {
    const navLinks = inject('navLinks')

    const navBarStyle = ref({})

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navBarStyle.value = { backgroundColor: '#333333' }
      } else {
        navBarStyle.value = {}
      }
    })

    return {
      navLinks,
      navBarStyle,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

#nav-bar {
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: background-color 0.4s;

  #nav-menu {
    box-sizing: border-box;
    height: $nav-bar-height;
    width: $page-width;
    display: flex;
    align-items: center;

    img {
      margin: 15px 30px 15px 0;
      height: $nav-bar-height - 20px;
      width: auto;
    }

    .nav-menu-link {
      text-decoration: none;
      color: #fff;
      margin: 0 10px;
      padding: 3px 0;
      margin-right: 10px;
      border-bottom: 3px transparent solid;
      font-size: 15px;
    }

    .router-link-active {
      border-bottom: 3px rgb(87, 160, 255) solid;
    }
  }
}
</style>
