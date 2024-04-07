<template>
  <div class="main">
    <el-carousel height="400px" motion-blur>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="8" :offset="0">
                <div class="box">
                    <mytitle label="相关介绍"></mytitle>
                    <br>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                    <div class="dialog">心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估心脑血管病风险评估</div>
                </div>
            </el-col>
            <el-col :span="16" :offset="0">
                <div class="box">
                    <mytitle label="心脑血管病风险评估"></mytitle>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">01</div>
                            <div class="form-label">性别</div>
                        </div>
                        <div class="form-r">
                            <el-radio-group v-model="sex">
                                <el-radio :label='0'>男</el-radio>
                                <el-radio :label='1'>女</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">02</div>
                            <div class="form-label">年龄(岁)</div>
                        </div>
                        <div class="form-r">
                            <el-input v-model="age" style="width: 240px" placeholder="20-85" />
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script setup>
import mytitle from '../components/mytitle.vue';
let sex = ref(0); // 性别
let age = ref(null); // 年龄
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: calc(100vh - 87px - 40px - 246px);
    overflow-y: scroll;
    overflow-x: hidden;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.content {
    padding: 10px;
    background: #f0f0f0;
}
.box {
    padding-bottom: 10px;
    border-radius: 4px;
    background: #fff;
}
.dialog {
    padding: 0 15px;
    margin: 10px 0;
    width: fit-content;
    font-size: 17px;
    line-height: 25px;
    text-indent: 32px;
}
.form {
    box-sizing: border-box;
    width: 98%;
    margin: 0 auto;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: flex-start;
    &-index {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
        color: #da2b2b;
        line-height: 32px;
    }
    &-label {
        font-size: 15px;
        font-weight: bold;
        color: #333;
        line-height: 32px;
    }
}
.stripe {
    background: #f0f0f0;
}
</style>
