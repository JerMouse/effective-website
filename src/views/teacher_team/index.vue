<template>
    <h1>
        这里是team团队啦～～～
        <router-link to="/home">home</router-link>
    </h1>
</template>

<script>
  export default {
    name: "index",
    created() {
      console.log(this.$store.getters)
    }
  }
</script>

<style scoped>

</style>
