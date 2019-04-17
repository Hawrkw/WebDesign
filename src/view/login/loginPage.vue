<template>
  <div class="mh-login">
    <div class="form">
      <img src="../../assets/images/合成1.png"/>
      <el-form v-if="login" :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px"
               class="login-container">
        <div class="head">
          <el-form-item prop="phone" style="margin-bottom: 45px">
            <el-input
              type="text"
              v-model="loginForm.phone"
              ref="input"
              auto-complete="off"
              placeholder="电话">
              <i slot="prefix" class="icon icon-userName"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" style="margin-bottom: 45px">
            <el-input
              type="password"
              v-model="loginForm.password"
              auto-complete="off"
              placeholder="密码"
            >
              <i slot="prefix" class="icon icon-password"></i>
            </el-input>
          </el-form-item>
        </div>
        <div v-if="hasVertify">
          <el-form-item prop="captcha">
            <div class="wrapper">
              <el-input
                type="text"
                v-model="loginForm.captcha"
                auto-complete="off"
                placeholder="验证码"
                style="width: 45%"
              ></el-input>
              <img :src=src style="width: 45%;" @click="changeCaptcha"/>
            </div>
          </el-form-item>
          <el-form-item label="">
            <div class="wrapper">
              <el-checkbox
                label="记住我" name="type" v-model="loginForm.remember">
              </el-checkbox>
              <span @click="changeCaptcha">看不清楚，换一张</span>
            </div>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button
            class="btn"
            type="primary"
            @click.native.prevent="submitForm"
            :loading="loading"
          >登录
          </el-button>
        </el-form-item>
        <el-form-item>
          <div class="wrapper">
            <span>忘记密码?</span>
            <span @click="goEmpRegiste()">去注册</span>
          </div>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
    export default {
      name: "loginPage",
      data(){
        return{
          login:true,

        }
      }
    }
</script>

<style scoped>

</style>
