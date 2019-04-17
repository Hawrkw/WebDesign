<template>
    <div class="choose">
      <el-header>
        <div class="header-content">
          <p class="title">选择业务</p>
        </div>
      </el-header>
      <el-main>
        <el-card>
          <el-row>
            <el-button class="storageBtn el-icon-menu" type="primary" @click="toStorage">存储物品</el-button>
          </el-row>
          <el-row>
            <el-button class="sendingBtn el-icon-sort" type="success" @click="toSending">寄送物品</el-button>
          </el-row>
        </el-card>
      </el-main>
    </div>
</template>

<script>
    export default {
        name: "chooseBusiness",
      data() {
          return {
            id: ''
          }
      },
      // created: function() {
      //     this.id = this.$route.query.id;
      // },
      methods: {
          backToLogin(){
            this.$router.push({
              path: '/login'
            })
          },
        toStorage(){
            this.$router.push({
              path: '/mobileView/order/storageOrder',
              query: {
                id: this.$route.query.id
              }
            })
        },
        toSending(){
            this.$router.push({
              path: '/mobileView/order/sendingOrder',
              query: {
                id: this.$route.query.id
              }
            })
        }
      }
    }
</script>

<style scoped>
  .choose{
    margin: 0px;
    max-height: 975px;
    height: 100%;
    width: 100%;
    background: url('../../assets/login.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

  .choose .el-header{
    background-color: white;
    background: hsla(0, 0%, 100%, .7);
  }

  .header-content{
    line-height: 60px;
  }

  .title{
    margin: 0 auto;
    display: inline-block;
    text-align: center;
    width: 100%;
  }

  .choose .el-main{
    background: hsla(0, 0%, 100%, .7);
  }

  .el-card{
    background: hsla(0, 0%, 100%, .5);
  }

  .el-row{
    text-align: center;
    padding: 15px 0;
  }

  .el-button{

  }
</style>
