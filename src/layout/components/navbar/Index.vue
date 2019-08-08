<template>
    <el-menu class="nav-container" v-if="this.$route.meta.isShow" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="navRoute of routes"  :key="navRoute.path" :index="navRoute.path">{{navRoute.title}}
        </el-menu-item>
    </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        navPathList: []
      }
    },
    computed: {
      ...mapGetters([
        'permission_routes'
      ]),
      routes() {
        // all routes should be listed in the header(teacher,student)
        const navList = ['home', 'introduction', 'teaching_resource', 'teacher_team', 'login', 'correct', '/404', '/homework']
        // routes (title) that the role can access
        let accessRoutesTitle = [];
        console.log(this.permission_routes)
        for (const route of this.permission_routes) {
          // static routes
          if (route.children && route.children.length > 0) {
            for (const route of route.children) {
              if (navList.indexOf(route.path) !== -1) {
                const obj = Object.create({
                  path: route.path,
                  title: route.meta.name
                })
                accessRoutesTitle.push(obj)
              }
            }
          }
          // routes that add dynamically
          else {
            if (navList.indexOf(route.path) !== -1) {
              const obj = Object.create({
                path: route.path,
                title: route.meta.name
              });
              accessRoutesTitle.push(obj)
            }
          }
        }
        console.log(accessRoutesTitle)
        return accessRoutesTitle
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss" scoped>
    img {
        padding: 30px 10px;
    }

    .nav-container {
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
</style>
