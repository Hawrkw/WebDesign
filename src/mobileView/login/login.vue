<template>
  <div class="login">
    <el-card class="cardStyle transparent">
      <div style="max-height: 50px" slot="header">
        <p style="text-align: center">你的背包</p>
      </div>
      <el-tabs type="border-card" v-model="activeName" class="tabStyle transparent">
        <el-tab-pane label="密码登录" name="password">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="手机号" prop="number">
              <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
              <p style="padding: 0px; margin: 0px; float: right; color: red;" @click="toRegister">立即注册</p>
            </el-form-item>
            <el-form-item>
              <el-button style="float: right; width: 100%" height="60px" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="VRFCC">
          <el-form ref="form" :model="form">
            <el-form-item label="手机号">
              <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input placeholder="请输入验证码" v-model="VRFCC" class="input-with-select">
                <el-button @click="sendVRFCC" v-model="buttonINFO" slot="append">{{buttonINFO}}</el-button>
              </el-input>
              <p style="padding: 0px; margin: 0px; float: right; color: red;" @click="toRegister">立即注册</p>
            </el-form-item>
            <el-form-item>
              <el-button style="float: right; width: 100%" height="60px" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>

</template>

<script>
  import {loginApi} from './login-api';

  export default {
    name: "login",
    data: function () {
      return {
        VRFCC: '',
        buttonINFO: '发送验证码',
        sendTime: '发送验证码',
        way: "usePWD",
        form: {
          number: '',
          password: ''
        },
        visible: false,
        time: 60,
        activeName: "password",
        rules: {
          number: [
            {required: true, message: '请输入手机号', trigger: 'change'},
            {min: 11, max: 11, message: '手机号格式错误', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},

          ]
        },
      }
    },
    methods: {
      onSubmit() {
        this.$refs['form'].validate((valid) => {
          if (!this.form.number)
            this.$message({message: "请先填写信息", type: "success"});
          if (valid) {

            loginApi.login(this.form).then((re) => {
              console.log(re)
              if (!re.data.data.name) {
                this.$message({message: "请先注册", type: "success"});
              }
              else {
                this.$message({message: "欢迎," + re.data.data.name + "!", type: "success"});
                this.$router.push({path: '/mobileView/business/chooseBusiness', query: {id: re.data.data.id}})
              }
            }).catch((error) => {
              this.$message({message: error, type: "error"});
            })
          }
          else {

          }
        });
      },
      sendVRFCC() {
        this.$message({message: '验证码已发送', type: "success"});
        let me = this;
        let interval = window.setInterval(function () {
          me.buttonINFO = +me.time + 's';
          --me.time;
          if (me.time < 0) {
            me.buttonINFO = "重新发送";
            me.time = 60;
            window.clearInterval(interval);
          }
        }, 1000);
      },
      toRegister() {
        this.$router.push({path: '/register'})
      }
    }
  }
</script>

<style scoped>
</style>
<style>
  .login .cardStyle {
    width: 80%;
    margin: auto;
  }

  .login .transparent {
    background: hsla(0, 0%, 100%, .7);
  }

  .login {
    margin: 0px;
    min-height: 100%;
    min-width: 100%;
    background: url('../../assets/login.jpg');
    background-size: cover;
  }

  .login .el-card__header {
    padding: 0px;
  }

  .login .el-tabs__nav {
    width: 100%
  }

  /*.login .el-tabs__item is-top {*/
  /*width: 56% !important;*/
  /*}*/
  .login #tab-password {
    width: 51% !important;
  }

  .login #tab-VRFCC {
    width: 51% !important;
  }
</style>
