<template>
  <div class="main">
    <div class="content">
      <div class="box">
        <mytitle label="健康指导"></mytitle>
        <div class="title">原发性肝癌诊疗指南(2022年版)</div>
        <div class="tips">背景</div>
        <div class="dialog">
            原发性肝癌是目前我国第4位常见恶性肿瘤及第2位肿瘤致死病因，严重威胁我国人民的生命和健康。原发性肝癌主要包括肝细胞癌( hepatocellular carcinoma，HCC)、肝内胆管癌( intrahepatic cholangiocarcinoma，ICC)和混合型肝细胞癌－胆管癌( combined hepatocellular － cholangiocarcinoma，cHCC－CCA)三种不同病理学类型，三者在发病机制、生物学行为、病理组织学、治疗方法以及预后等方面差异较大，其中HCC占75% ～ 85%。本指南中的“肝癌”仅指HCC。自《原发性肝癌诊疗规范(2019年版)》发布，国内、外在肝癌的诊断、分期及治疗方面出现了许多符合循证医学原则的高级别证据，尤其是适应中国国情的研究成果相继问世。为此，国家卫生健康委委托中华医学会肿瘤学分会联合中国抗癌协会肝癌专业委员会、中华医学会超声医学分会、中国医师协会外科医师分会和中国医师协会介入医师分会等组织全国肝癌领域的多学科专家，结合肝癌临床诊治和研究的最新实践，再次修订并更新形成《原发性肝癌诊疗指南(2022年版)》，旨在推动落实并达成《“健康中国2030”规划纲要》中总体癌症5年生存率提高15%的目标。
        </div>
        <div class="tips">指南亮点</div>
        <div class="tips">1、筛查和诊断</div>
        <div class="dialog">
            （1）借助肝脏超声显像联合血清甲胎蛋白（AFP）进行肝癌早期筛查，建议高危人群至少每隔6个月进行1次检查。
        </div>
        <div class="dialog">
            （2）动态增强CT、多参数MRI扫描是肝脏超声显像和/或血清AFP筛查异常者明确诊断的首选影像学检查方法。
        </div>
        <div class="dialog">
            （3）肝癌影像学诊断依据主要根据“快进快出”的强化方式。
        </div>
        <div class="dialog">
            （4）肝脏多参数MRI检查是肝癌临床诊断、分期和疗效评价的优选影像技术。
        </div>
        <div class="dialog">
            （5）PET-CT扫描有助于对肝癌进行分期及疗效评价。
        </div>
        <div class="dialog">
            （6）血清AFP是诊断肝癌和疗效监测常用且重要的指标。对血清AFP阴性人群，可以借助PIVKAⅡ、miRNA检测试剂盒、AFP-L3和类GALAD模型进行早期诊断。
        </div>
        <div class="dialog">
            （7）具有典型肝癌影像学特征的肝占位性病变，符合肝癌临床诊断标准的患者，通常不需要以诊断为目的的肝病灶穿刺活检。
        </div>
        <div class="tips">2、治疗</div>
        <div class="dialog">
            （1）外科治疗：肝癌的外科治疗是肝癌患者获得长期生存的重要手段，主要包括肝切除术和肝移植术。
        </div>
        <div class="dialog">
            （2）消融治疗：消融治疗适用于单个肿瘤、直径≤5cm；或2~3个肿瘤、最大直径≤3cm。对于不能手术切除的直径3~7cm的单发肿瘤或多发肿瘤，可以联合TACE治疗。
        </div>
        <div class="dialog">
          （3）经动脉化疗栓塞：TACE是肝癌常用的非手术治疗方法，主要适用于CNLC Ⅱb、Ⅲa和部分Ⅲb 期肝癌患者。
        </div>
        <div class="dialog">
          （4）放射治疗：对于不能手术切除者，可以行姑息性放射治疗，或放射治疗与TACE等联合治疗，延长患者生存。部分患者可以通过放射治疗转化获得手术切除机会。
        </div>
        <div class="dialog">
          （5）系统抗肿瘤治疗：一线抗肿瘤治疗方案可以选择阿替利珠单抗联合贝伐珠单抗、信迪利单抗联合贝伐珠单抗类似物、多纳非尼、仑伐替尼、索拉非尼或者含奥沙利铂的系统化疗。二线抗肿瘤治疗方案，在我国可以选择瑞戈非尼、 阿帕替尼、卡瑞利珠单抗或替雷利珠单抗。
        </div>
        <div class="dialog">
            本文摘自：中华医学会肿瘤学分会, 中国抗癌协会肝癌专业委员会, 中华医学会超声医学分会, 等. 原发性肝癌诊疗指南（2022年版）. 中华人民共和国国家卫生健康委员会官网.
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script setup>
import myfooter from "../components/footer.vue";
import mytitle from "../components/mytitle.vue";
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
.tips{
  margin: 20px;
  font-size: 17px;
  line-height: 25px;
  font-weight: bold;
}
</style>
