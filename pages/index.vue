<script setup>
import { useVoteStore } from '~/stores/vote';

// const store =https://vue-lessons-api.vercel.app/vote/list
const store = useVoteStore();
const testStore = useTestStore();
await useAsyncData('vote', async ()=>{
  const data = await $fetch('https://vue-lessons-api.vercel.app/vote/list');

  store.setVoteData(data);
  return data;
});
//RuntimeConfig
// const config = useRuntimeConfig();
// console.log(config.public);
// //只在server階段被執行
// if (process.server) {
//  console.log("server token:", config.token);
// }
//在server設定環境變數，refresh看不到
const config = useRuntimeConfig();
const { data,refresh } = await useFetch(`${config.public.apiUrl}/api/banner`, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
});
//不用runtimeConfig(翻新專案)
console.log("ENV=>", process.env.ENV);
console.log("WEB_URL=>", process.env.WEB_URL);
</script>

<template>
  {{ testStore.voteToTestData }}
  <div class="vote_app">
    <h1>投票列表</h1>
    <div class="box_list">
      <VoteCard />
      <SvgIcon name="icon-community" color="#000"/>
      <SvgIcon name="icon-documentation" color="#000"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vote_app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }
}
.box_list {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  width: 140px;
  height: 200px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
