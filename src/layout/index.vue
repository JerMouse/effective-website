<template>
 <div>
            <nav-bar />
        <transition name="fade">
            <keep-alive>
            <app-main/>
            </keep-alive>
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
