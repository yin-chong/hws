<template>
  <div class="page">
    <div class="row head">
      <div style="margin-left: 1em;">
       <img src="../assets/image/logo.png" alt="" style="width: 200px;">
       <img src="../assets/image/sub-logo.png" alt="" style="width: 65px; margin-left: 20px;">
      </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick($event)" stretch>
      <el-tab-pane label="风险评估" name="risk"></el-tab-pane>
      <el-tab-pane label="健康建议" name="advice" :flag="flag"></el-tab-pane>
      <el-tab-pane label="项目介绍" name="introduce"></el-tab-pane>
      <el-tab-pane label="健康指导" name="health"></el-tab-pane>
      <!-- <el-tab-pane label="相关研究" name="research"> <research></research> </el-tab-pane> -->
      <el-tab-pane label="关于我们" name="about"></el-tab-pane>
      <!-- <el-tab-pane label="登录|注册" name="login"> <login></login> </el-tab-pane> -->
    </el-tabs>
    <component :is="obj[activeName]" :flag="flag" @handleClick="handleClick"></component>
  </div>
</template>

<script setup>
let obj = reactive({
  'risk': defineAsyncComponent(() => import('./risk.vue')),
  'advice': defineAsyncComponent(() => import('./advice.vue')),
  'introduce': defineAsyncComponent(() => import('./introduce.vue')),
  'health': defineAsyncComponent(() => import('./health.vue')),
  'about': defineAsyncComponent(() => import('./about.vue')),
})
let activeName = ref('risk');
let flag = ref(null);
const handleClick = (name, f = null) => {
  console.log(name, f)
  activeName.value = name;
  flag.value = f;
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  :deep(.el-tabs) {
    --el-tabs-header-height: 55px;
  }
  :deep(.el-tabs__item.is-active) {
    color: rgb(231, 71, 71);
  }
  :deep(.el-tabs__active-bar) {
    background: rgb(231, 71, 71);
  }
  :deep(.el-tabs__header) {
    margin: 0;
  }
  :deep(.el-tabs__item) {
    font-size: 16px;
    line-height: 55px;
  }
}
.head {
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  &-title {
    font-size: 20px;
    font-weight: bold;
    color: rgb(231, 71, 71);
    line-height: 25px;
    &_bottom {
      font-size: 18px;
      color: rgb(235, 110, 110);
      line-height: 22px;
    }
  }
}
</style>
