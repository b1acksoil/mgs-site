<template>
  <div id="news-view" class="page-view">
    <div id="news-detail" v-if="isInNews">
      <h1 id="news-title">{{ newsTitle }}</h1>
      <p id="news-info">#{{ newsId }}&emsp;-&emsp;{{ newsDate }}</p>
      <hr>

      <div class="md-body" v-html="newsContent" />
    </div>

    <div id="news-list" v-else>
      <h1 class="page-title">新闻</h1>
      <hr>

      <router-link
        class="news-item"
        v-for="(news, index) in newsList.reverse()"
        :key="index"
        :to="'/news/' + news.id"
      >
        <p class="news-item-title">{{ news.title }}</p>
        <p class="news-item-date">{{ news.date }}</p>
        <span class="news-item-id">#{{ news.id }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import marked from 'marked'

export default defineComponent({
  name: 'NewsView',
  components: {  },
  setup() {
    const route = useRoute()
    const isInNews = ref(route.params.newsId != undefined)
    const newsList = ref([])
    const newsTitle = ref('')
    const newsId = ref('')
    const newsDate = ref('')
    const newsContent = ref(null)

    const getNews = (res) => {
      if (isInNews.value) {
        let news = res.data.find(item => item.id === route.params.newsId)

        if (news) {
          axios.get(news.path)
            .then((mdRes) => {
              newsTitle.value = news.title
              newsId.value = news.id
              newsDate.value = news.date
              newsContent.value = marked(mdRes.data)
            }).catch((err) => {
              console.error(err)
            })
        } else {
          newsContent.value = marked('## 404 Not Found')
        }
      }
    }

    axios.get('/data/news/index.json')
      .then((res) => {
        newsList.value = res.data

        getNews(res)

        watch(() => route.params, (newParams) => {
          console.log(newParams)
          isInNews.value = (newParams.newsId != undefined)
          getNews(res)
        })

      }).catch((err) => {
        console.error(err)
      })

    

    return {
      isInNews,
      newsList,
      newsTitle,
      newsId,
      newsDate,
      newsContent,
    }
  }
})
</script>

<style lang="scss">
@import '../assets/scss/markdown.scss';

#news-list {
  width: 100%;

  .news-item {
    position: relative;
    box-sizing: border-box;
    margin-top: 20px;
    display: block;
    // height: 100px;
    width: 100%;
    padding: 20px;
    text-decoration: none;
    color: #fff;
    border-radius: 10px;
    border: 3px #333 solid;
    transition: border 0.3s;

    &:hover {
      border: 3px #bbb solid;
    }

    p {
      margin: 0;
    }

    .news-item-title {
      font-size: 20px;
      font-weight: 900;
    }

    .news-item-date {
      margin-top: 7px;
    }

    .news-item-id {
      position: absolute;
      bottom: 20px;
      right: 20px;
      color: #aaa;
    }
  }
}

#news-detail {
  #news-title, #news-info {
    text-align: center;
  }
}
</style>