<template>
    <div class="login-container">
        <transition name="slide-up" appear>
            <el-form class="login-form" ref="loginForm" :model="loginForm">
                <div class="title-container">
                    <h2 class="title" style="text-align: center;padding-bottom: 20px">3D模型教学网站</h2>
                </div>
                <el-tooltip
                        v-model="isValid"
                        content="无效的邮箱"
                        placement="right"
                        manual
                        style="margin-top: 40px"
                >
                    <el-form-item>
                        <el-input v-model="loginForm.userId"
                                  placeholder="请输入账号"
                                  autofocus="true"
                                  prefix-icon="el-icon-user"
                                  @blur="isValidId"
                                  @focus="isValid=false"
                        >
                        </el-input>
                    </el-form-item>
                </el-tooltip>

                <el-tooltip
                        v-model="isCaps"
                        content="大写锁定开启了～"
                        placement="right"
                        manual
                        style="margin-top: 40px"
                >
                    <el-form-item>
                        <el-input
                                v-model="loginForm.password"
                                type="password"
                                placeholder="请输入密码"
                                show-password
                                @keyup.native="checkCapsLock"
                                @blur="isCaps = false"
                                @keyup.enter.native="handleLogin"
                                prefix-icon="el-icon-lock"
                        >
                        </el-input>
                    </el-form-item>

                </el-tooltip>
                <router-link to="forget_password" style="float: right;color: #8590a6">忘记密码</router-link>
                <el-button
                        type="primary"
                        style="display: block;margin: 60px auto 0;width:35%"
                        round
                        icon="el-icon-s-promotion"
                        :loading="loading"
                        @click.native="handleLogin"
                >登录
                </el-button>
            </el-form>
        </transition>


    </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex';
  import {validEmail} from "../../utils/validate";

  const {mapActions} = createNamespacedHelpers('user/');
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          userId: '',
          password: ''
        },
        loginRules: {},
        isCaps: false,
        isValid: false,
        loading: false
      }
    },
    methods: {
      // 检测是否大小写
      checkCapsLock({shiftKey, key} = {}) {
        if (key && key.length === 1) {
          this.isCaps = shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z');
        }
        if (key === 'CapsLock' && this.isCaps === true) {
          this.isCaps = false
        }
      },
      handleLogin() {
        this.loading = true;
        this.login(this.loginForm).then((suc) => {
          this.loading = false;
          this.$message({
            type: 'success',
            message: suc,
            showClose: true
          });
          this.$router.push('/home');
        }).catch((reason) => {
          this.loading = false;
          this.$message.error(reason.toString())
        })
      },
      isValidId() {
        if (!validEmail(this.loginForm.userId)) {
          this.isValid = true
        }
      },
      ...mapActions(['login'])
    },
  }
</script>

<style lang="scss" scoped>
    .login-container {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-image: url("~@/assets/img/jpg/login.jpg");
        background-size: contain;

        .login-form {
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }
    }
</style>
