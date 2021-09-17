<template>
  <div id="nav-bar-mobile">
    <a href="/"><img src="../../assets/img/logo/logo.png" alt="Home"></a>

    <button
      @click="isMenuOpen = !isMenuOpen"
      @blur="isMenuOpen = !isMenuOpen"
    ><fa-icon icon="bars"></fa-icon></button>

    <transition name="menu">
    <div id="nav-menu-mobile" v-if="isMenuOpen">
      <router-link
        class="nav-menu-mobile-link"
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path" 
        replace>
        <fa-icon :icon="link.icon"></fa-icon>&nbsp;&nbsp;{{ link.name }}
      </router-link>
    </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref, inject } from 'vue'

// import  from ''

export default defineComponent({
  name: 'NavBarMobile',
  components: {  },
  setup() {
    const isMenuOpen = ref(false)
    const navLinks = inject('navLinks')

    return {
      isMenuOpen,
      navLinks
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars.scss';

#nav-bar-mobile {
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  height: $nav-bar-mobile-height;
  width: 100%;

  img {
    height: $nav-bar-mobile-height - 20px;
    width: auto;
  }

  #nav-menu-mobile {
    position: absolute;
    width: 100%;
    top: $nav-bar-mobile-height;
    left: 0;
    background: #303030;
    overflow: hidden;
    box-shadow: 0 6px 20px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.1) inset;

    .nav-menu-mobile-link {
      display: block;
      padding: 0 1em;
      height: $nav-menu-mobile-link-height;
      line-height: $nav-menu-mobile-link-height;
      text-decoration: none;
      color: #fff;
      font-size: 15px;

      svg {
        width: 1.2em;
      }

      &.router-link-active {
        background-color: #222;
      }
    }
  }
  
  button {
    cursor: pointer;
    position: absolute;
    right: 20px;
    background: transparent;
    border: 0;
    color: #fff;

    svg {
      height: $nav-bar-mobile-height - 48px;
      width: auto;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: height 0.4s;
}

.menu-enter-from, .menu-leave-to {
  height: 0px;
  box-shadow: 0;
}

.menu-enter-to, .menu-leave-from {
  height: 5 * $nav-menu-mobile-link-height;
}
</style>