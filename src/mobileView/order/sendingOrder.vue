<template>
    <div class="sending">
      <el-header>
        <div class="header-content">
          <p class="title">寄送信息填写</p>
        </div>
      </el-header>
      <el-card>
        <el-form ref="sendingForm" :model="sending">
          <el-form-item label="寄送类型" label-width="90px">
            <el-select clearable  v-model="sending.sendingType">
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="寄送地址" label-width="90px">
            <el-select clearable  v-model="sending.areaId">
              <el-option
                v-for="item in areas"
                :key="item.key"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目的地址" label-width="90px">
            <el-select clearable  v-model="sending.sending_addressId">
              <el-option
                v-for="item in areas"
                :key="item.key"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收件人姓名" label-width="90px">
            <el-input v-model="sending.addresseeName" style="max-width: 217px"></el-input>
          </el-form-item>
          <el-form-item label="收件人电话" label-width="90px">
            <el-input v-model="sending.addresseeTel" style="max-width: 217px"></el-input>
          </el-form-item>
          <el-form-item class="btn-item">
            <el-button type="primary" @click="submitSendingOrder">提交</el-button>
            <el-button type="primary" @click="resetSendingOrder">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
  import {orderApi} from "./order-api";

  export default {
  name: 'sendingOrder',
  data () {
    return {
      sending: {},
      areas: [],
      types: [{
        value: '普通',
        label: '普通'
      }, {
        value: '快件',
        label: '快件'
      }, {
        value: '加急',
        label: '加急'
      }]
    }
  },
    created: function(){
      this.sending.userId = this.$route.query.id;
      this.findAreas();
    },
  methods: {
    findAreas(){
      orderApi.findArea().then((res) => {
        console.log(res.data);
        for(let e of res.data){
          let area = {};
          area.label = e.address;
          area.value = e.id;
          console.log(area);
          this.areas.push(area);
        }
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `查询地域信息失败`
        })
      })
    },
    installParms(){

    },
    submitSendingOrder () {
      orderApi.saveSending(this.sending).then((res) => {
        this.$message({
          type: 'success',
          message: `寄送信息提交成功`
        })
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `寄送信息提交失败`
        })
      })
    },
    resetSendingOrder () {
      this.$router.push({
        path: '/mobileView/business/chooseBusiness',
        query: {
          id: this.sending.userId
        }
      })
    }
  }
}
</script>

<style scoped>
  .sending{
    margin: 0px;
    max-height: 975px;
    height: 100%;
    width: 100%;
    background: url('../../assets/login.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

  .sending .el-header{
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

  .el-card{
    background: hsla(0, 0%, 100%, .5);
  }

  .btn-item{
    text-align: right;
    width: 90%;
  }

  .el-button{
    width: 100px;
  }
</style>
