<template>
  <div id="members-view" class="page-view">
    <h1 class="page-title">成员</h1>
    <hr>
    <p id="members-count">总计 {{ presentMembers.length + historyMembers.length }} 人</p>

    <h2>现任成员</h2>
    <p>总计 {{ presentMembers.length }} 人</p>
    <div id="present-members-list" class="members-list">
      <div
        class="member-item"
        v-for="(member, index) in presentMembers"
        :key="index"
      >
        <p class="member-name">{{ member.name }}</p>
        <p class="member-grade">{{ member.grade }} 届 {{ member.class }} 班</p>
      </div>
    </div>

    <br>

    <h2>历史成员</h2>
    <p>总计 {{ historyMembers.length }} 人</p>
    <div id="history-members-list" class="members-list">
      <div
        class="member-item"
        v-for="(member, index) in historyMembers"
        :key="index"
      >
        <p class="member-name">{{ member.name }}</p>
        <p class="member-grade">{{ member.grade }} 届 {{ member.class }} 班</p>
      </div>
    </div>

    <p>注：若已为音游部成员但没有录入进成员名单，请在群内 @ 音游部部长或发起私聊，附上自己的班级和姓名（如 2020届3班 陈家乐）</p>

    <p id="rank-notice">*排名不分先后</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'MembersView',
  components: {  },
  setup() {
    const presentMembers = ref([])
    const historyMembers = ref([])

    axios.get('/data/members/present.json')
      .then((res1) => {
        axios.get('/data/members/history.json')
          .then((res2) => {
            presentMembers.value = res1.data
            historyMembers.value = res2.data
          })
      })

    return {
      presentMembers,
      historyMembers
    }
  }
})
</script>

<style lang="scss" scoped>
#members-count {
  text-align: center;
}

.members-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .member-item {
    box-sizing: border-box;
    margin: 5px 0 25px 0;
    padding: 16px;
    width: 28%;
    height: 80px;
    border: 3px #333 solid;
    border-radius: 7px;
    transition: border 0.3s;

    &:hover {
      border: 3px #aaa solid;
    }

    p {
      margin: 0 0 5px 0;
    }
  }
}

#rank-notice {
  margin-top: 100px;
  text-align: center;
  font-style: italic;
}

@media screen and (max-width: 768px) {
  .member-item {
    width: 100% !important;
    margin: 5px 0 !important;
  }
}
</style>