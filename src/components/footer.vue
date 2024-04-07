<template>
    <div class="footer">
        <el-row :gutter="20" style="padding-left: 20px;">
            <el-col :span="6" :offset="0">
                <div class="row">
                    <Position style="width: 2em; height: 2em; margin-right: 8px; color: #fff;" />
                    <div>
                        <div class="title">单位地址</div>
                        <div class="info">广州市天河区天河路600号</div>
                        <div class="info">广州市肝病重点实验室</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="0">
                <div class="row">
                    <Phone style="width: 2em; height: 2em; margin-right: 8px; color: #fff;" />
                    <div>
                        <div class="title">联系方式</div>
                        <div class="info">电话: 010-60866572</div>
                        <div class="info">邮箱: leeljx@hotmail.com</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="0">
                <div class="row">
                    <Message style="width: 2em; height: 2em; margin-right: 8px; color: #fff;" />
                    <div>
                        <div class="title">邮政编码</div>
                        <div class="info">102300</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="0">
                <div class="row">
                    <!-- <Message style="width: 1em; height: 1em; margin-right: 8px" /> -->
                    <div>
                        <div class="title">下载APP</div>
                        <div class="info">扫描二维码</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="descs">
            <div class="desc">工信部ICP备案号码: 京ICP被12002951号-5</div>
            <div class="desc">Copyright @2010 by FUWAI Hospital 版权所有: 阜外医院(本网站所有内容未经许可, 不得以任何形式进行转载)</div>
            <div class="desc">本网站已被访问 742727次</div>
        </div>
    </div>
</template>

<script setup>
import { Position, Message, Phone } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.footer {
    // position: fixed;
    // bottom: 0;
    // left: 0;
    width: 100%;
    padding: 40px 0;
    background: #272727;
}
.title {
    font-size: 16px;
    color: #fff;
    line-height: 25px;
}
.info {
    font-size: 14px;
    color: #c2bebe;
    line-height: 18px;
}
.descs {
    padding-top: 30px;
}
.desc {
    font-size: 14px;
    color: #fff;
    line-height: 25px;
    text-align: center;
}
</style>