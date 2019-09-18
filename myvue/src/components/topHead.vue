<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
    
    >
      <el-menu-item index="1" class="mylogo">
        <img src="../assets/logo.png" alt />
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" class="mes">消息中心</el-menu-item>
      <el-menu-item index="4" class="mes">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
        <el-menu-item index="7" class="myrz">我要入驻</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-menu--horizontal>.mylogo{
    margin-left:150px;
    margin-top: -3px;
}


.el-submenu__title,.el-menu-item{
    font-size: 12px;
    padding: 0;
    margin-left: 30px;
}
.el-menu--horizontal>.mes{
    margin-left: 30px;
}
.el-menu--horizontal>.myrz{
    font-size: 14px;
    float: right;
    margin-right: 150px;
}

</style>