<template>
  <div class="page">
    <div class="row head">
      <div style="margin-left: 1em;">
        <div class="head-title">心脑血管病风险评估</div>
        <div class="head-title_bottom">PREDICTION FOR ASCVD RISK</div>
      </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
      <el-tab-pane label="风险评估" name="risk"><risk></risk></el-tab-pane>
      <el-tab-pane label="项目介绍" name="introduce">Config</el-tab-pane>
      <el-tab-pane label="健康指导" name="health">Role</el-tab-pane>
      <el-tab-pane label="相关研究" name="research">Task</el-tab-pane>
      <el-tab-pane label="关于我们" name="about">Task</el-tab-pane>
      <el-tab-pane label="登录|注册" name="login">Task</el-tab-pane>
    </el-tabs>
    <myfooter></myfooter>
  </div>
</template>

<script setup>
// import router from '../router/index';
import myfooter from '../components/footer.vue';
import risk from './risk.vue';
let activeName = ref('risk')
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  :deep(.el-tabs__item.is-active) {
    color: rgb(231, 71, 71);
  }
  :deep(.el-tabs__active-bar) {
    background: rgb(231, 71, 71);
  }
  :deep(.el-tabs__header) {
    margin: 0;
  }
}
.head {
  width: 100%;
  padding: 20px;
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
