<template>
    <div ref="scrollTarget" class="test-scroll"  style="height: 100px;overflow: hidden">

        <model-obj src="/tree.obj"></model-obj>
    </div>
</template>

<script>
  import {ModelObj} from "@/components/model";


  export default {
    name: "index",
    components:{
      ModelObj
    }
  }
</script>

<style scoped>

</style>
