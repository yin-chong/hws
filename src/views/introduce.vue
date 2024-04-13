<template>
    <div class="main">
        <div class="content">
            <div class="box">
                <mytitle label="项目介绍"></mytitle>
                <div class="title">缺乏有效的早期诊断是肝癌患者预后差的关键因素</div>
                <div class="dialog">
                    肝细胞癌（Hepatocellular carcinoma, HCC, 简称肝癌）在世界许多地区造成沉重的疾病负担，2020年统计结果显示，肝癌相关死亡数占全球癌症相关死亡数的8.3%，约为83万例，仅次于肺癌和结肠癌。肝癌的主要危险因素包括慢性乙型或丙型肝炎病毒感染以及酒精性和非酒精性脂肪肝，其他肝癌危险因素包括肥胖、糖尿病、黄曲霉毒素和马兜铃酸等。乙型肝炎病毒感染是我国肝癌发生发展的重要危险因素之一，约85%的HCC患者为慢性乙肝感染。我国是肝癌大国，肝癌严重威胁我国人民的生命和健康，给我国带来了沉重的疾病负担和社会经济负担。因此，预防和控制乙肝相关肝癌是实现我国全面健康的关键之一。
                </div>
                <div class="dialog">手术切除、肝移植和局部消融是早期HCC推荐的根治性治疗方案。手术治疗后，早期HCC的5年生存率约为70-80%。然而，早期HCC难以监测且通常无症状。HCC的高死亡率在很大程度上是由于缺乏有效的早期诊断技术。大多数HCC病例在初步诊断时已进展到中期或晚期。此时，肿瘤已经发生肝内或肝外转移，使得HCC患者不再适合根治性治疗疗法，患者预后差。</div>
                <div class="row imgs">
                    <img src="../assets/image/introduce1.png" alt="" class="icon" >
                    <img src="../assets/image/introduce2.png" alt="" class="icon">
                </div>
                <div class="dialog" style="margin: 0 auto;">Llovet, J.M., Kelley, R.K., Villanueva, A. et al. Nat Rev Dis Primers 7, 6 (2021)</div>
                <div class="title">肝癌传统监测和诊断方法的局限性和血浆微小RNA（microRNA）用于诊断肝癌的优势</div>
                <div class="dialog">当前的肝癌临床指南建议使用超声检查结合或不结合血清甲胎蛋白（AFP）对肝癌进行监测。同时结合计算机断层扫描和磁共振成像来对肝癌进行确诊。组织病理活检是肝癌诊断的金标准。然而，它具有采样错误、主观解释偏差、高成本、侵入性和并发症等诸多局限性。大多数HCC具有特征性的影像学特征，但约10%的HCC肿瘤（高达30%的小肿瘤肝癌）具有不典型的影像学表现，仍需要活检或随访进行确认。这表明成像技术在诊断小肿瘤方面相对不准确。AFP作为传统的肝癌血清学生物标志物，在临床实践中存在了敏感性不足的缺点。据报道，在20 ng/mL的临界值下，AFP对HCC的敏感性范围为40%至65%。AFP在检测早期HCC患者方面效果更差，具有更低的敏感性和特异性。因此，迫切需要改进HCC诊断，尤其是HCC的早期诊断。</div>
                <div class="dialog">微小RNA (miRNA)是细胞内参与各种生物过程的小分子非编码RNA。细胞内的miRNA可以通过被动释放、与脂蛋白复合物结合或被称为细胞外囊泡（特别是外泌体）的纳米颗粒包裹释放到血液循环中。因此，血液中的miRNA可以提供疾病的相关信息，并作为出现临床症状前早期HCC患者的一种潜在新型诊断方法。基于血液miRNA标志物对肝癌进行诊断属于液体活检技术，具有以下优势：血液中可测量的生物标志物比传统监测手段（肝活检、超声、CT或MRI）更适用于常规临床评估和人群研究，因为此类测试从全身角度提供有关整个肝脏状态的信息，是非侵入性的，性价比和重现性高。检测血浆miRNA仅需200μL血浆。血浆miRNA检测的技术条件，如血浆采集、RNA提取和定量PCR，已经是在临床检验中常规使用的技术，且检测结果易于理解。因此，基于血浆miRNA分析对HCC进行监测和诊断在临床实践中是可行且极具应用前景的。</div>
                <div class="row imgs">
                    <img src="../assets/image/introduce3.png" alt="" class="icon" >
                    <img src="../assets/image/introduce4.png" alt="" class="icon">
                </div>
                <div class="dialog" style="margin: 0 auto;">Yang JD, Heimbach JK. BMJ (Clinical research ed.). (2020)</div>
                <div class="dialog" style="margin: 0 auto;">von Felden J, Garcia-Lezana T, Schulze K, et al. Gut (2020)</div>
                <div class="title">本项目建立了预警和诊断肝癌的血清miRNA分类器模型</div>
                <div class="dialog">如上所述，医学科技在不断发展，但肝癌早期诊断一直是医学领域的一个重要难题。液体活检是通过分析体液中可检测分子的变化来诊断疾病的一种非侵入性检测方法，具有无创、简便、安全，可重复等优势，是突破肝癌早期诊断瓶颈的重要途径之一。近年来，人工智能和机器学习等技术快速发展，将这些技术应用于肝癌早期诊断是一种巨大的创新。本项目聚焦于液体活检中的血液miRNA，通过分析肝癌患者和非肝癌患者血浆的检测数据，挖掘出血浆中的miRNA-15a和miRNA-16可以作为早期诊断肝癌的潜在标志物，通过机器学习模型将这两个miRNA和临床检测指标有效融合，建立了一种可靠的基于血浆miR-15a/16的肝癌早期诊断分类器模型，进一步拓展了早期诊断肝癌的方法和手段，这不仅有利于解决肝癌早期诊断领域中存在的瓶颈问题，而且为未来开展进一步的临床应用研究提供科学依据。</div>
                <div class="row imgs">
                    <img src="../assets/image/introduce5.png" alt="" class="icon" >
                </div>
                <div class="dialog">我们基于以上研究成果，开发了肝癌风险评估工具，这是一款针对肝癌发病风险进行评估和健康指导的实用工具。</div>
                <div class="dialog">本工具能够根据用户输入的年龄、性别、转氨酶、乙肝感染史，血浆miRNA检测结果等信息，准确评估个体未来发生肝癌的风险，给出发病风险（%），并告知用户其肝癌危险的高低，有助于识别肝癌高危个体，并提早采取生活方式干预或临床治疗。 </div>
                <div class="dialog">本工具适用于20岁及以上，想要进行肝癌风险评估的人群，尤其是高风险人群，如长期饮酒、患有乙肝等人群，根据用户信息，提供基本的健康指导，预防肝癌的发生。 </div>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script setup>
import myfooter from '../components/footer.vue';
import mytitle from '../components/mytitle.vue';
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
    padding-bottom: 10px;
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
.imgs {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}
.icon {
    margin: 20px 0;
}
@media screen and (max-width: 1400px) {
    img {
        width: calc(80vw);
    }
}
</style>