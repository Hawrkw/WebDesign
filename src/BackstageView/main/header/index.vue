<template>
  <div class="nav-right">
    <div class="btn-fullscreen" @click="handleFullScreen">
      <el-tooltip effect="dark" :content="fullScreen ? `取消全屏`:`全屏`" placement="bottom">
        <i style="font-size: 21px;" class="el-icon-rank"></i>
      </el-tooltip>
    </div>
    <div class="nav-quanp">
    </div>
    <el-dropdown @menu-item-click="click">
      <span class="nav-user">{{userInfo.userName}}<i class="el-icon-caret-bottom"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="edit">修改密码</el-dropdown-item>
        <el-dropdown-item command="out">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import screenfull from 'screenfull'

  export default {
    name: 'comp-bread',
    data() {
      return {
        chalk: '', // content of theme-chalk css
        fullScreen:false
      }
    },
    computed: mapState({
      userInfo: state => state.user.userInfo,
    }),
    props: {},
    methods: {
      handleFullScreen() {
       this.fullScreen= this.toggleFullScreen(document.documentElement)
      },
      click(type) {

        if (type === 'out') {
          this.$confirm('', '您确定要退出吗?', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$store.dispatch('accountLogoutSubmit').then(() => {
              window.location.reload()
            })
          }).catch(() => {
            // todo
          });
        } else {
          this.$emit('openEditorPwd')
        }
      },
      handFullClick() {
        if (!screenfull.enabled) {
          return false
        }
        screenfull.toggle()
      },
    },
  }
</script>
<style scoped lang="scss">
  .nav-right {
    float: right;
    display: flex;
    align-items: center;
    > div {
      margin: 0 8px;
      display: flex;
    }
  }

  .nav-quanp {
    cursor: pointer;
    i {
      font-size: 22px;
    }
  }

  .nav-user {
    cursor: pointer;
  }
</style>
