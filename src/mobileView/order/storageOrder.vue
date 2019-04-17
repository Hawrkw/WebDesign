<template>
  <div class="storage">
    <el-header>
      <div class="header-content">
        <p class="title">存储信息填写</p>
      </div>
    </el-header>
    <el-card>
      <el-form ref="storageForm" :model="storage" >
        <el-form-item label="存储类型" label-width="90px">
          <el-select clearable  v-model="storage.storageType">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="存储地域" label-width="90px">
          <el-select clearable  v-model="storage.areaId" @change="findPackage">
              <el-option
                      v-for="item in areas"
                      :key="item.key"
                      :label="item.label"
                      :value="item.value">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="背包编码" label-width="90px">
          <el-select clearable  v-model="storage.packageId">
            <el-option
              v-for="item in packages"
              :key="item.key"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结束时间" label-width="90px">
          <el-date-picker
            v-model="storage.endingTime"
            type="datetime"
            placeholder="结束时间"
            :start-date="startDate">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="btn-item">
          <el-button class="btn" type="primary" @click="submit">提交</el-button>
          <el-button class="btn" type="primary" @click="reset">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {orderApi} from "./order-api";

  export default {
  name: 'storageOrder',
  data () {
    return {
      storage: {},
      areas: [],
      packages: [],
      types: [{
        value: '普通',
        label: '普通'
      }, {
        value: '贵重',
        label: '贵重'
      }],
      startDate: new Date()
    }
  },
    created: function(){
      this.storage.userId = this.$route.query.id;
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
          this.areas.push(area);
        }
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `查询地域信息失败`
        })
      })
    },
    findPackage(){
      orderApi.findPackage({areaId: this.storage.areaId}).then((res) => {
        console.log(res.data);
        for(let e of res.data){
          let apackage = {};
          apackage.label = e.id;
          apackage.value = e.id;
          this.packages.push(apackage);
        }
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `查询背包信息失败`
        })
      })
    },
    installParms(){
      // this.storage.userId = 1;
      this.storage.startTime = new Date();
      this.storage.endingTime = new Date(this.storage.endingTime);
    },
    submit () {
      this.installParms();
      orderApi.saveStorage(this.storage).then((res) => {
        this.$message({
          type: 'success',
          message: `存储信息提交成功`
        })
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `存储信息提交失败`
        })
      })
    },
    reset () {
      this.$router.push({
        path: '/mobileView/business/chooseBusiness',
        query: {
          id: this.storage.userId
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
<style>
  .storage{
    margin: 0px;
    max-height: 975px;
    height: 100%;
    width: 100%;
    background: url('../../assets/login.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

  .storage .el-header{
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
