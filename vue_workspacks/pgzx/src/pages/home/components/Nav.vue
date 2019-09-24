<template>
  <div>
<div class="line"></div>
<el-menu :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#F56C6C"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">专业服务</template>
    <el-menu-item index="2-1">系统与软件产品验收</el-menu-item>
    <el-menu-item index="2-2">科研项目验收</el-menu-item>
    <el-menu-item index="2-3">性能测试</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">中心介绍</template>
    <el-menu-item index="3-1">检测资质</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">成功案例</template>
    <el-menu-item index="4-1">类案智能推送</el-menu-item>
    <el-menu-item index="4-2">法智问答</el-menu-item>
    <el-menu-item index="4-3">老干局</el-menu-item>
    <el-menu-item index="4-4">智审</el-menu-item>
  </el-submenu>
  <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">下载中心</a></el-menu-item>
  <el-submenu index="6">
    <template slot="title">咨询动态</template>
    <el-menu-item index="6-1">中心公告</el-menu-item>
    <el-menu-item index="6-2">中心动态</el-menu-item>
    <el-menu-item index="7-3">相关文章</el-menu-item>
  </el-submenu>

 </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-menu{
  /*padding-left: 200px;*/
  text-indent: 70px;
  font-size: 30px;
  text-align: center;

}

</style>
