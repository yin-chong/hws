<template>
  <div class="page">
      <div class="form">
        <!-- <el-button type="primary" size="default" @click="login">Login</el-button> -->
        <el-form :model="form" label-width="auto" style="max-width: 500px">
          <el-form-item label="User Code">
            <el-input v-model="form.user_id" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.user_pwd" type="password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script setup>
import router from "../router/index";
const { proxy } = getCurrentInstance();
const form = reactive({
    user_pwd: '',
    user_id: ''
});
const passwd = ref("1231");
const login = async () => {
//   const params = form;
  const [err, res] = await proxy.$api.authenticate(form);
  if (res && res.code == 200) {
    router.replace({
      name: "home",
    });
  }
};
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    height: 100vh;
}
.form {
    position: relative;
    margin: 20% auto;
    width: 560px;
    // height: 400px;
    padding: 30px 40px;
    border: 1px solid #999;
    border-radius: 4px;
}
</style>
