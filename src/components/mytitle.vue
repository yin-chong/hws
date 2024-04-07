<template>
    <div class="title">
        <div class="row title-content">
            <div class="title-label">{{ label }}</div>
            <slot></slot>
        </div>
        <div class="line"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
})
</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    &-content {
        justify-content: space-between;
        padding: 0 20px;
    }
    &-label {
        position: relative;
        font-size: 18px;
        line-height: 46px;
        color: rgb(231, 71, 71);
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: -webkit-fill-available;
            height: 1px;
            background: rgb(231, 71, 71);
        }
    }
    .line {
        width: 100%;
        height: 1px;
        background: #f0f0f0;
    }
}
</style>