<template>
  <div class="main">
    <div class="content row">
      <div class="box">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="登录" name="login">
            <div class="form" style="padding-top: 50px;">
              <el-input v-model="username" placeholder="用户名" class="form-item"  size="large"></el-input>
              <el-input v-model="password" placeholder="密码" class="form-item"  size="large"></el-input>
              <el-button type="primary" style="margin-top: 40px; width: 80%;" color="#79063f">登录</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <div class="form">
              <el-input v-model="username" placeholder="用户名" class="form-item"></el-input>
              <el-input v-model="password" placeholder="密码" class="form-item"></el-input>
              <el-input v-model="password" placeholder="确认密码" class="form-item"></el-input>
              <el-input v-model="phone" placeholder="手机" class="form-item"></el-input>
              <el-input v-model="phone" placeholder="手机验证码" class="form-item"><template #append>手机验证码</template></el-input>
              <el-input v-model="email" placeholder="邮箱" class="form-item"></el-input>
              <el-button type="primary" style="margin-top: 20px; width: 80%;" color="#79063f">注册</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <img src="https://cvdrisk.com.cn/Content/Areas/ASCVD/rightpic.png" style="width: 783px; height: 430px;" alt="">
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script setup>
import myfooter from "../components/footer.vue";
const activeName = ref('login');
const username = ref('');
const password = ref('');
const phone = ref('');
const email = ref('');
</script>

<style lang="scss" scoped>
.main {
  background: #f0f0f0;
}
.content {
  padding: 20px 0;
  max-width: 1400px;
  margin: 0 auto;
}
.box {
  flex: 1;
  min-width: 396px;
  background: #fff;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-item {
  width: 80%;
  margin: 20px 0 0;
}
</style>
