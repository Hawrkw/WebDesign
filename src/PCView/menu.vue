<template>
  <div class="menu">
    <el-menu
      class="headerStyle"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="headerStyle" index="1">处理中心</el-menu-item>
    </el-menu>
    <el-col class="colStyle" :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="2" @click="setPath('storage')" style="padding: 0px; margin: auto">
          <i class="el-icon-menu"></i>
          <span slot="title">存储信息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="setPath('sending')" style="padding: 0px; margin: auto">
          <i class="el-icon-sort"></i>
          <span slot="title">寄送信息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="setPath('adminInfo')" style="padding: 0px; margin: auto">
          <i class="el-icon-service"></i>
          <span slot="title">人员信息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="setPath('userFeedback')" style="padding: 0px; margin: auto">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">反馈信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <router-view style="margin: 10px" ></router-view>
    </el-col>
  </div>

</template>

<script>
    export default {
        name: "login",
      data() {
        return {
          activeIndex: '1'
        }
      },
      methods: {
        handleSelect() {

        },
        handleOpen(key, keyPath) {
        },
        handleClose() {

        },
        setPath(path) {
          this.$router.push({path: '/PCView/' + path})
        }
      }
    }
</script>

<style scoped>
</style>
<style>
  .menu body{
    background: white;
  }
  .menu {
    height: 100%;
    background: white;
  }
  .menu .headerStyle {
    width: 100%;
  }
  .menu .colStyle {
    height: 97%;
    text-align: center;
  }
  .menu .el-menu-vertical-demo {
    height: 100%;
  }
</style>
