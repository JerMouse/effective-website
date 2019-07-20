<template>
    <section>
        <transition>
            <keep-alive>
                <router-view :key="key"/>
            </keep-alive>
        </transition>
    </section>
</template>

<script>


  export default {};
</script>
<style lang='scss' scoped>
    .my-button::v-deep.el-button {
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
</style>
