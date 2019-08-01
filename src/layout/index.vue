<!--  -->
<template>
    <div style="height: inherit">
        <!--    <nav-bar :item="item"/>-->
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
