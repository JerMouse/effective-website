<template>
    <div ref="scrollTarget" class="test-scroll"  style="height: 100px;overflow: hidden">
        <div style="height: 10000px; width: 100%">
            scoll to see the backtop button
            <el-backtop target=".test-scroll">
                <span>test_up_text</span>
            </el-backtop>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
