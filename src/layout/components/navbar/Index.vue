<template>
    <div>
        <!--        <el-scrollbar wrap-class="scrollbar-wrapper">-->
        <!--            <el-menu>-->
        <!--                <navbar-item v-for="route in permission_routes"-->
        <!--                              :key="route.path"-->
        <!--                              :item="route"-->
        <!--                              :base-path="route.path"/>-->
        <!--            </el-menu>-->
        <!--        </el-scrollbar>-->
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  // import NavbarItem from './NavbarItem'

  export default {
    // components: {NavbarItem},
    computed: {
      ...mapGetters([
        'permission_routes'
      ]),
      activeMenu() {
        const route = this.$route;
        const {meta, path} = route;
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      }
    }
  }
</script>
