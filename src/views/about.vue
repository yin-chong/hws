<template>
    <div class="main">
        <div class="content">
            <div class="box">
                <mytitle label="团队介绍"></mytitle>
                <div class="list row">
                    <img src="https://cvdrisk.com.cn/uploadedImage/20220311112737122.jpg" alt="" class="list-icon" />
                    <div class="list-content">
                        <div class="list-title">团队</div>
                        <div class="list-info">团队带头人黄月华博士，中山大学“百人计划”引进，中山大学附属第三医院研究员、博士生导师，现任中山大学肝脏病医院院长助理。团队的主要研究方向包括：（1）新型肝癌早期诊断、预后预测指标以及抗肿瘤靶点探索；（2）新型肝癌相关分子的生物学功能与机制研究；（3）免疫治疗肝脏疾病新策略的基础及临床研究。近五年，团队获得了多项国家级及省部级科研项目资助，总科研经费超过1000万元。在Theranostics、Cell Death Disease、Aging-US等国际高水平学术期刊发表多篇SCI论文，发现了CACYBP、KIF4A、ANLN等一批新的肝癌相关调控分子，并阐明其在肝癌中的作用和分子机制，为研发新型肝癌诊疗手段提供了强有力的理论依据；证实了NK细胞活性、sPD-1等一系列免疫因素与慢乙肝疾病状态的相关性，为乙肝免疫治疗策略提供了新的思路。在此基础上，黄月华教授已获得专利授权2项，申请中的专利2项。团队也非常注重国际学术交流，在黄月华教授的指导下，团队成员多次获得会议资助并受邀出席国际学术会议，不断拓宽团队及院校的学术影响力。</div>
                        <div class="list-link">详细 > ></div>
                    </div>
                </div>
            </div>
            <div class="box">
                <mytitle label="联系我们"></mytitle>
                <img src="https://cvdrisk.com.cn/Content/Areas/ASCVD/map_img.png" alt="" class="icon">
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
.icon {
    position: relative;
    margin: 20px 0 20px calc(50% - 441px);
    width: 883px;
    height: 284px;
}
.list {
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 40px;
  border-bottom: 1px solid #f0f0f0;
  &-icon {
    flex-shrink: 0;
    width: 260px;
    height: 195px;
  }
  &-content {
    padding-left: 20px;
  }
  &-title {
    font-size: 16px;
    color: #79063f;
    line-height: 30px;
  }
  &-date {
    font-size: 14px;
    color: #aaa;
    line-height: 30px;
  }
  &-info {
    font-size: 14px;
    color: #000;
    line-height: 150%;
    text-indent: 30px;
  }
  &-link {
    font-size: 16px;
    color: #79063f;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>