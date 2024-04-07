<template>
  <div class="main">
    <div class="content">
        <el-carousel motion-blur>
          <el-carousel-item v-for="item in carousels" :key="item">
            <el-image :src="item" alt="" style="width: 100%; height: 380px;"> </el-image>
            <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          </el-carousel-item>
        </el-carousel>
        <el-row :gutter="20">
            <el-col :span="8" :offset="0">
                <div class="box">
                    <mytitle label="相关介绍"></mytitle>
                    <br>
                    <div class="dialog">肝细胞癌风险评估工具是一款基于液体活检技术的机器学习模型，可用于对个体患肝细胞癌的风险进行评估。该工具通过血浆miRNA检测，结合个人相关临床指标和机器学习算法，快速、准确地评估肝细胞癌的患病风险，并提供相应的预防和管理建议。</div>
                    <div class="dialog">适用人群：该工具适用于想要进行肝细胞癌风险评估的人群，尤其是高风险人群，如长期饮酒、患有乙肝等人群。</div>
                    <div class="dialog">使用方法：用户只需在医院或检测机构完成血样采集，并填写个人基本信息，将血样送至实验室进行检测。然后，在评估表格中输入检测结果。本工具将根据用户的检测结果生成肝细胞癌风险评估报告。报告将提供患病风险评估结果，以及疾病预防和管理建议。</div>
                    <div class="dialog">优点：与传统肝细胞癌风险评估方法相比，该工具具有以下优点：</div>
                    <div class="dialog">1.非侵入性：只需进行血液检测，无需进行其他复杂的检查和操作，用户使用更加方便和舒适。</div>
                    <div class="dialog">2.快速：检测过程时间短，快速反馈用户个人的肝细胞癌风险评估结果。</div>
                    <div class="dialog">3.准确：该工具基于肝癌特异的miRNA标志物和机器学习算法，对肝细胞癌风险评估具有更高的准确性和精度。</div>
                    <div class="dialog">本工具基于机器学习模型研发，详见“项目介绍”部分。</div>
                    <!-- <div class="dialog">参考文献</div>
                    <div class="dialog">1.Circulation,2016,134(19):1430-1440.</div>
                    <div class="dialog">2.Science Bulletin,2018,63(12):779-787.</div>
                    <div class="dialog">3.Chronic Diseases and Translational</div>
                    <div class="dialog">Medicine,2016,2(2):102-109.</div> -->
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
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">03</div>
                            <div class="form-label">是否饮酒</div>
                        </div>
                        <div class="form-r">
                            <el-radio-group v-model="sex">
                                <el-radio :label='0'>是</el-radio>
                                <el-radio :label='1'>否</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">04</div>
                            <div class="form-label">是否有慢性乙肝感染</div>
                        </div>
                        <div class="form-r">
                            <el-radio-group v-model="sex">
                                <el-radio :label='0'>是</el-radio>
                                <el-radio :label='1'>否</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">05</div>
                            <div class="form-label">乙肝病毒DNA（HBV-DNA）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="IU/ml" />
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">06</div>
                            <div class="form-label">谷丙转氨酶（ALT）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="U/L" />
                        </div>
                    </div>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">07</div>
                            <div class="form-label">谷草转氨酶（AST）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="U/L" />
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">08</div>
                            <div class="form-label">白蛋白（ALB</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="g/L" />
                        </div>
                    </div>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">09</div>
                            <div class="form-label">总胆红素（TBIL）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="umol/L" />
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">10</div>
                            <div class="form-label">血小板计数（PLT）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="x10^9/L" />
                        </div>
                    </div>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">11</div>
                            <div class="form-label">甲胎蛋白（AFP）</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" placeholder="ng/mL" />
                        </div>
                    </div>
                    <div class="form row stripe">
                        <div class="row form-l">
                            <div class="form-index">12</div>
                            <div class="form-label">MiRNA-15a</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" />
                        </div>
                    </div>
                    <div class="form row">
                        <div class="row form-l">
                            <div class="form-index">13</div>
                            <div class="form-label">MiRNA-16</div>
                        </div>
                        <div class="form-r row">
                            <el-input v-model="age" style="width: 240px" />
                        </div>
                    </div>
                    <div class="row" style="justify-content: center; padding: 10px 0 30px;">
                        <el-button type="primary" size="default">提交</el-button>
                    </div>
                    <div class="tips" style="text-align: center;">温馨提示：本工具仅用于肝细胞癌风险的初步评估，不能代替临床诊断，具体治疗措施请咨询专业医师。</div>
                </div>
            </el-col>
        </el-row>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script setup>
import myfooter from '../components/footer.vue';
import mytitle from '../components/mytitle.vue';
let sex = ref(0); // 性别
let age = ref(null); // 年龄
const carousels = reactive([
    'https://cvdrisk.com.cn/uploadedImage/20220725035012235.jpg',
    'https://cvdrisk.com.cn/uploadedImage/20220725035022420.jpg',
])
</script>

<style lang="scss" scoped>
.main {
    height: calc(100vh - 87px - 40px);
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f0f0f0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px 10px;
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
.tips {
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-bottom: 10px;
}
</style>
