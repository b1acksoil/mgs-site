<template>
  <div id="about-view" class="page-view">
    <h1 class="page-title">关于</h1>
    <hr>

    <div id="about-content">
      <p>音游人何尝不是越共？</p>
      <p>想找人一起玩，可又只有孤身一人，无可奈何。</p>
      <p>结伴打歌，目害椰叶，喊您工具人...</p>
      <p>在音游部，这一切都不再是幻想！</p>
      <p>我们，不再是孤身一人——</p>
      <p>「全三中音游人联合起来！」</p>

      <p id="contact-info">QQ群 / 953863576</p>
    </div>

    <hr>

    <h2 style="text-align: center;">更新日志</h2>
    <div id="changelog-list">
      <div class="changelog-item"
        v-for="(changelog, index) in changelogs"
        :key="index"
        :class="{ expanded: changelog.expanded }"
        @click="changelog.expanded = !changelog.expanded"
      >
        <h2 class="changelog-item-title">{{ changelog.date }}</h2>
        <div class="changelog-item-content md-body" v-html="changelog.contentHTML"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import marked from 'marked'

export default defineComponent({
  name: 'AboutView',
  components: {  },
  setup() {
    const changelogs = ref([])
    const changelogsTemp = []

    axios.get('/data/changelog/index.json')
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          axios.get(`/data/changelog/${res.data[i]}.md`)
            .then((mdRes) => {
              changelogsTemp.push({
                date: res.data[i],
                contentHTML: marked(mdRes.data),
                expanded: false
              })

              if (i === res.data.length - 1) {
                // 最后一次循环
                changelogs.value = changelogsTemp
              }
            })
        }
      })

    return {
      changelogs
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/markdown.scss';

#about-content {
  text-align: center;

  #contact-info {
    margin-top: 50px;
  }
}

#changelog-list {
  .changelog-item {
    box-sizing: border-box;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 3px #333 solid;
    transition: border 0.3s;
    cursor: pointer;

    &:hover {
      border: 3px #aaa solid;
    }
  }

  .changelog-item-title {
    position: relative;
    // cursor: pointer;

    &::after {
      content: "+";
      position: absolute;
      right: 10px;
    }
  }

  .changelog-item-content {
    // max-height: 0;
    overflow: hidden;
    // transition: max-height 0.5s;
    height: 0;
  }

  .expanded .changelog-item-content {
    // max-height: 500px;
    height: auto;
  }
}
</style>