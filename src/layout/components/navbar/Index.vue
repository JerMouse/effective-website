<template>
    <el-row class="nav-container" v-if="this.$route.meta.isShow" type="flex" align="middle">
        <el-col :offset="2" :span="7">
            <img src="@/assets/img/png/nchu-logo.png" alt="nchu-logo">
        </el-col>
        <el-col class="nav-container-left" :pull="2" >
            <el-menu mode="horizontal" @select="handleSelect" background-color="#0077f3" text-color="#fff"
                     active-text-color="#fff">
                <el-menu-item v-for="navRoute of routes" :key="navRoute.path" :index="navRoute.path">{{navRoute.title}}
                </el-menu-item>
            </el-menu>
            <!--            如果登入了，tooltip则失效否则提示需要登入-->
            <el-tooltip :disabled="!!role" :content="role?'':'点我登入'" placement="right">
                <el-avatar :src="this.avatar" icon="el-icon-user-solid" alt="user center" @click.native="jumpTo">
                    <template v-if="!role">
                        登录
                    </template>
                </el-avatar>
            </el-tooltip>
        </el-col>
    </el-row>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        cc: '1'
      }
    },
    computed: {
      ...mapGetters([
        'role',
        'avatar'
      ]),
      routes() {
        const studentRoutes = [{path: '/homework', title: '作业'}];
        const teacherRoutes = [{path: '/correct', title: '批改'}];
        // all routes should be listed in the header(teacher,student)
        let navList = [
          {path: '/home', title: '主页'},
          {path: '/introduction', title: '介绍'},
          {path: '/teaching_resource', title: '教学资源'},
          {path: '/teacher_team', title: '师资力量'},
          {path: '/forum/index', title: '论坛'},
        ];
        if (this.role === 'student') {
          for (const studentRoute of studentRoutes) {
            navList.push(studentRoute)
          }
        } else if (this.role === 'teacher') {
          for (const teacherRoute of teacherRoutes) {
            navList.push(teacherRoute)
          }
        }
        return navList;
        // routes (title) that the role can access
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push(key)
      },
      jumpTo() {
        if (this.role) {
          this.$router.push('/logout')
        } else {
          this.$router.push('/login')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
    .nav-container {
        padding: 8px 0;
        background-color: #0077f3;

        .nav-container-left {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        /*重置element-ui css样式*/
        /*设置菜单的字体大小并且将边框去掉*/
        ::v-deep.el-menu {
            border: none;

            .el-menu-item {
                border: none;
                font-size: 16px;
            }
        }

        /*被选中菜单的颜色*/
        ::v-deep.el-menu-item:not(.is-disabled):hover {
            background-color: #8dc5ff;
        }
    }

</style>
