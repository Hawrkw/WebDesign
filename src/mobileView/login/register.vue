<template>
  <div class="register">
    <el-card  class="cardStyle transparent">
      <div style="max-height: 50px" slot="header">
        <p style="text-align: center">你的背包</p>
      </div>
      <el-card  class="cardStyle transparent" style="width: 100%">
        <div style="max-height: 50px" slot="header">
          <p style="text-align: center">注册</p>
        </div>
          <el-form ref="form" :rules="rules" :model="form">
            <el-form-item label="手机号" prop="number">
              <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passwordA">
              <el-input type="password" v-model="form.passwordA"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="passwordB">
              <el-input type="password" v-model="form.passwordB"></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 20px">
              <el-button style="float: right; width: 100%" height="60px" type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
          </el-form>
      </el-card>
    </el-card>
  </div>

</template>

<script>
  import {loginApi} from './login-api';
  export default {
    name: "register",
    data: function() {
      return {
        form: {
          number: '',
          passwordA: '',
          passwordB: ''
        },
        rules: {
          number: [
            {required: true, message: '请输入手机号', trigger: 'change'},
            {min: 11, max: 11, message: '手机号格式错误', trigger: 'blur'}
          ],
          passwordA: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
          ],
          passwordB: [
            {required: true, message: '请确认密码', trigger: 'change'},
            {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      onSubmit() {
        this.$refs['form'].validate((valid) => {
          if(valid) {
            if(this.form.passwordA !== this.form.passwordB)
              this.$message({message: "两次密码输入不一致", type: "error"})
            let data = {
              number: this.form.number,
              password: this.form.passwordA
            }
            loginApi.register(data).then((re) => {
              this.$message({message: "注册成功", type: "success"})
              // if(re.data.data === undefined) {
              //   this.$message({message: "手机号已注册", type: "error"})
              //   this.$router.push({path: '/login'})
              // }
              // else {
              //   this.$router.push({path: '/storageOrder'})
              // }
            }).catch((error) => {
            })
          }
          else {
          }

        });
      },
    }
  }
</script>

<style scoped>
</style>
<style>
  .register .el-form-item {
    margin-bottom: 10px;
  }
  .register .cardStyle {
    width: 80%;
    margin: auto
  }
  .register .transparent {
    background: hsla(0,0%,100%,.7);
  }
  body {
    margin: 0px;
    max-height: 975px;
    height: 100%;
    width: 100%;
    background: url('../../assets/login.jpg');
    background-size:cover;
    background-attachment: fixed;
  }
  .register .el-card__header {
    padding: 0px;
  }
  .register .el-tabs__nav {
    width: 100%
  }

  /*.login .el-tabs__item is-top {*/
  /*width: 56% !important;*/
  /*}*/
  .register #tab-password {
    width: 51% !important;
  }
  .register #tab-VRFCC {
    width: 51% !important;
  }
</style>
