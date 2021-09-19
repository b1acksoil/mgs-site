<template>
  <div id="footer">
    <div id="footer-links">

      <div class="footer-links-col">
        <p class="footer-title">实用工具</p>
        <a target="_blank" href="https://616.sb/">纯净音游下载站</a><br>
        <a target="_blank" href="https://map.bemanicn.com/">全国音游地图</a><br>
        <a target="_blank" href="https://taiko.bui.pm/">太鼓达人网页版 1</a><br>
        <a target="_blank" href="https://tg.lv5.ac/">太鼓达人网页版 2</a>
      </div>

      <div class="footer-links-col">
        <p class="footer-title">音游官网</p>
        <a target="_blank" href="https://pigeon-games.com/">Phigros</a><br>
        <a target="_blank" href="https://arcaea.lowiro.com/zh">Arcaea</a><br>
        <a target="_blank" href="https://osu.ppy.sh/home">osu!</a><br>
        <a target="_blank" href="http://www.peroperogames.com/">Muse Dash</a><br>
        <a target="_blank" href="http://m.mugzone.net/">Malody</a><br>
        <a target="_blank" href="https://cytoid.io/">Cytoid</a>
      </div>

      <div class="footer-links-col">
        <p class="footer-title">友情链接</p>
        <a target="_blank" href="http://www.jxncsz.cn/">南昌三中官网</a><br>
        <a target="_blank" href="https://tieba.baidu.com/f?ie=utf-8&kw=%E9%9F%B3%E6%B8%B8">音游吧</a><br>
      </div>

    </div>

    
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// import  from ''

export default defineComponent({
  name: 'Footer',
  components: {  },
  setup() {
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
#footer {
  box-sizing: border-box;
  width: 100%;
  margin: 60px 0;
  padding: 0 60px;
  color: #fff;

  #footer-links {
    display: flex;
    min-height: 200px;

    .footer-links-col {
      flex-grow: 1;
      padding: 0 30px;

      .footer-title {
        font-weight: 600;
      }

      a {
        font-size: 15px;
        line-height: 24px;
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>