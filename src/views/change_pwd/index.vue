<template>
    <div>
        <el-page-header @back="homePage">
            <template #title>
                返回
            </template>
            <template #content>
                主页
            </template>
        </el-page-header>
        <el-card class="change-pwd-container">
            <template #header>
                修改密码
            </template>
            <template>
                <el-form class="change-pwd-content" :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                         label-width="100px">
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item style="float: right">
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </template>

        </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改成功!');
            this.$router.replace('/')
          } else {
            console.log('修改失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      homePage() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .change-pwd-container {
        width: 520px;
        max-width: 100%;
        padding: 18px 0;
        margin: 72px auto;
        overflow: hidden;
        text-align: center;

        .change-pwd-content {
            padding-top: 24px;
        }
    }
</style>
