<template>
  <div id="home-view" class="page-view">
    <img id="banner-img" src="../assets/img/home-banner.png" alt="">

    <h1>欢迎来到南昌三中手极社音游部</h1>

    <p id="main-info">
      截至 <span>{{ nowDate }}</span> ,
      音游部共有 <span>{{ info.presentMembers }}</span> 名现任成员 ,
      <span>{{ info.allMembers }}</span> 名历史成员 ,
      和 <span>{{ info.videoCount }}</span> 个手元视频。
    </p>

    <p>我们致力于为三中音游爱好者提供一个和谐有爱（目害）的交流氛围</p>

    <p id="contact-info">QQ群 / 953863576</p>

    <p id="motto">「全三中音游人联合起来！」</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HomeView',
  components: {  },
  setup() {
    const date = new Date();
    const nowDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    const presentMembers = ref()
    const allMembers = ref()

    axios.get('/data/members/present.json')
      .then((res1) => {
        axios.get('/data/members/history.json')
          .then((res2) => {
            presentMembers.value = res1.data.length
            allMembers.value = res1.data.length + res2.data.length
          })
      })

    const info = {
      presentMembers,
      allMembers,
      videoCount: 0
    }

    return {
      nowDate,
      info
    }
  }
})
</script>

<style lang="scss" scoped>
#home-view {
  text-align: center;
}

#banner-img {
  margin: 20px 0;
  height: auto;
  width: 100%;
}

p#main-info {
  span {
    color: rgb(140, 180, 255);
  }
}

p#contact-info {
  margin-top: 40px;
}

p#motto {
  margin-top: 70px;
  font-style: italic;
  font-weight: 900;
}

@media screen and (max-width: 768px) {
  #banner-img {
    margin: 0;
  }
}
</style>