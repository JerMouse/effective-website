<template>
    <div>
        homepage
        <router-link to="/teacher_team">teacher</router-link>
    </div>
</template>

<script>
  export default {
    name: "Index",
    created() {
      console.log(this.$store.getters.avatar, this.$store.state)
    }
  }
</script>

<style scoped>

</style>
