<template>
  <div id="nav-bar" :style="navBarStyle">
    <div id="nav-menu">
      <a href="/"><img src="../assets/img/logo/logo.png" alt="Home"></a>
      <router-link class="router-link" to="/home" replace>
        <fa-icon icon="home"></fa-icon>&nbsp;&nbsp;首页
      </router-link>
      <router-link class="router-link" to="/news" replace>
        <fa-icon icon="newspaper"></fa-icon>&nbsp;&nbsp;新闻
      </router-link>
      <router-link class="router-link" to="/members" replace>
        <fa-icon icon="user"></fa-icon>&nbsp;&nbsp;成员
      </router-link>
      <router-link class="router-link" to="/about" replace>
        <fa-icon icon="heart"></fa-icon>&nbsp;&nbsp;关于
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavMenu',
  components: {  },
  setup() {
    const navBarStyle = ref({})

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navBarStyle.value = { backgroundColor: '#333333' }
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

#nav-bar {
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: background-color 0.4s;

  #nav-menu {
    box-sizing: border-box;
    height: $nav-menu-height;
    width: $page-width;
    display: flex;
    align-items: center;

    img {
      margin: 15px 30px 15px 0;
      height: $nav-menu-height - 20px;
      width: auto;
    }

    .router-link {
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