<template>
  <div>
    <top-head></top-head>
    <div class="main">
      <div class="info">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">特色民宿</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-for="(e,index) in meg" :key="index">{{e.pname}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="address">
        <ul v-for="(a,index) in meg" :key="index" class="myul">
           <li>{{a.pname}}</li>
           <li>{{a.address}}</li>
        </ul>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meg: [],
      src:''
    };
  },
  created() {
    this.axios
      .post("http://localhost:8806/Home/getinfo")
      .then(response => {
        this.meg = response.data;
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.main {
  width: 100%;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
  justify-content: space-between;
}
.info {
  width: 80%;
  /* height: 40px; */
  margin: 0 auto;

  line-height: 40px;
}
.myul{
   width: 80%;
  margin: 0 auto;
  height: 70px;
  padding: 20px 0;
  display: flex;
}
.myul>li{
 text-align: center;
  margin-right: 35px;
}
.myul>li:nth-child(1){
  font-size: 24px;
}
.myul>li:nth-child(2){
  padding-top: 8px;
  font-size: 16px;
}
</style>