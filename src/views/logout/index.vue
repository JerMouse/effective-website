<template>
    <div class="logout-container">
        <h1>个人中心</h1>
        <el-card class="user-card-container" shadow="hover">
            <template #header>
                <div class="clearfix user-card-header">
                    <span style="float: left">
                    <el-icon class="el-icon-user"></el-icon>
                    我的信息
                    </span>
                    <el-tooltip>
                        <el-avatar :src="$store.state.user.avatar" style="float: right"/>
                    </el-tooltip>

                </div>
            </template>
            <table class="user-card-content">
                <tbody>
                <tr>
                    <td>账户&nbsp;&nbsp;:</td>
                    <el-input is="el-input" disabled :value="userInfo.userId"></el-input>
                </tr>
                <tr>
                    <td>姓名&nbsp;&nbsp;:</td>
                    <el-input disabled :value="userInfo.username"></el-input>
                </tr>
                <tr>
                    <td>角色&nbsp;&nbsp;:</td>
                    <el-input disabled :value="userInfo.role"></el-input>
                </tr>
                </tbody>
            </table>
            <el-link href="/change_pwd" style="float: right">修改密码</el-link>
        </el-card>
        <el-button type="danger"
                   style="display: block;margin: 48px auto 0;width:15%"
                   round
                   icon="el-icon-s-promotion"
                   @click.native="logout"
        >
            退出
        </el-button>
    </div>

</template>

<script>
  import {deepClone} from "../../utils";

  export default {
    name: "index",
    data() {
      return {
        userInfo: deepClone(this.$store.state.user)
      }
    },
    methods: {
      logout() {
        // TODO: clear userInfo in store tree and navigate to the home page
        this.$store.commit('user/LOGOUT')
        this.$router.push('/home')
      }
    },
  }
</script>

<style lang="scss" scoped>

    .logout-container {
        overflow: hidden;
        height: inherit;
        margin-top: 20px;
        text-align: center;


        .user-card-container {
            width: 600px;
            margin: 24px auto 0;
            padding: 20px 100px;

            ::v-deep.el-card__header {

                padding: 6px 20px;
            }

            .user-card-header {
                line-height: 40px;
            }

            .user-card-content {
                width: 100%;
                font-size: 14px;
                border-collapse: separate;
                border-spacing: 6px;
            }
        }
    }

    .logout-button {
        margin-top: 24px;
        border-radius: 30px
    }
</style>
