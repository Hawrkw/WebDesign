<template>
  <div class="sotageMMT">
    <el-card>
      <div slot="header" class="cardStyle">
        <span>存储信息</span>
      </div>

      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="开始日期"
          width="200">
        </el-table-column>
        <el-table-column
          prop="endingTime"
          label="结束日期"
          width="200">
        </el-table-column>
        <el-table-column
          prop="storageType"
          label="存储类型"
          width="200">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
   import {storageApi} from './admin-api';
    export default {
        name: "storage",
        data: function () {
          return {
            tableData:[],
            form:{
              adminId:1
            }
          }
        },
      created(){
          this.init();
      },
      methods:{
          init(){
            storageApi.getStorage(this.form).then((re) => {
                this.tableData = re.data.data;
              })
            }
      }
    }
</script>

<style scoped>

</style>
<style>
  .sotageMMT .el-card__header {
    text-align: left;
  }
</style>
