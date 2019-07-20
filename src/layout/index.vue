<!--  -->
<template>
  <div>
    <nav-bar :item="item"/>
    <app-main />
  </div>
</template>

<script>
import { NavBar, AppMain } from "./components";

export default {
  data() {
    return {};
  },
  props:{
    item:{
      firstName: 'hongjie',
      lastName: 'Gan',
      sex: 'man',
      age: 20
    }
  },
  components: {
    NavBar,
    AppMain
  }
};
</script>
