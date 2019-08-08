<template>
    <div class="app-container">
            <nav-bar />
        <transition name="fade">
            <app-main/>
        </transition>
        <footer-page></footer-page>
    </div>
</template>

<script>
  import {AppMain, FooterPage, NavBar} from "./components";

  export default {
    components: {
      NavBar,
      FooterPage,
      AppMain
    }
  };
</script>
<style lang="scss" scoped>
    .app-container{
        height: inherit
    }
</style>
