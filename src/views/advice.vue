<template>
    <div class="main">
        <div class="content">
            <div class="box">
                <mytitle label="健康建议"></mytitle>
                <el-alert v-if="!!flag" style="width: 80%; margin: 0 auto;" :title="`根据当前模型测评，您属于肝癌${ flag == '0' ? '低' : '高' }风险人群!`" type="warning" effect="dark" :closable=false />
                <div v-if="flag != '0'">
                    <div class="title">肝癌高风险人群</div>
                    <div class="dialog">
                        1. 定期体检：如果你属于肝癌高风险人群，例如有肝炎病史、酗酒史等，建议每6个月进行一次身体检查，包括肝功检查，甲胎蛋白和肝超声等相关检查，以便及早发现肝癌。
                    </div>
                    <div class="dialog">
                        2. 遵从医生建议：如果你已被诊断为肝炎病毒感染或肝硬化等高风险因素，一定要遵从医生的建议及时进行治疗和随访。
                    </div>
                    <div class="dialog">
                        3. 疫苗接种：如果你是乙肝易感人群，包括新生儿、婴幼儿、15岁以下未免疫人群和成年高危人群，建议接种乙肝疫苗。
                    </div>
                    <div class="dialog">
                        4. 生活方式调整：减少饮酒、戒烟、控制体重、避免暴饮暴食和高脂高热量食物，保持健康的生活方式，可以降低患肝癌的风险。
                    </div>
                    <div class="dialog">
                        5. 保持充足的睡眠和减轻压力：长期睡眠不足和过度的压力会增加患肝癌的风险。建议保持充足的睡眠和寻找有效的方式减轻压力。
                    </div>
                </div>
                <div v-if="flag != '1'">
                    <div class="title">肝癌低风险人群</div>
                    <div class="dialog">
                        1. 定期体检：尽管你不属于肝癌高风险人群，但是建议每年进行一次身体检查，包括肝功检查和肝超声等相关检查，以确认肝功能和形态正常。
                    </div>
                    <div class="dialog">
                        2. 疫苗接种：如果你还没有接种肝炎疫苗，建议进行肝炎疫苗接种，以有效预防肝炎病毒感染。
                    </div>
                    <div class="dialog">
                        3. 健康生活方式：保持健康的生活方式，包括健康饮食、戒烟限酒、进行适量的体育锻炼等。
                    </div>
                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script setup>
import myfooter from '../components/footer.vue';
import mytitle from '../components/mytitle.vue';
const props =  defineProps({
  flag: {
    type: [String, null],
    default: null
  }
});
</script>

<style lang="scss" scoped>
.main {
    height: calc(100vh - 87px - 40px);
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f0f0f0;
}
.content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px 10px;
}
.box {
    box-sizing: border-box;
    padding-bottom: 10px;
    min-height: calc(100vh - 420px);
    border-radius: 4px;
    background: #fff;
}
.title {
    margin: 20px 0;
    font-size: 25px;
    line-height: 40px;
    font-weight: bold;
    text-align: center;
}
.dialog {
    padding: 0 15px;
    margin: 20px 0;
    width: fit-content;
    font-size: 17px;
    line-height: 25px;
    text-indent: 32px;
}
</style>