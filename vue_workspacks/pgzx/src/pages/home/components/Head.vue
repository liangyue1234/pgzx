<template>
  <div class="logo">
    <div class="region">
      <a href="#">EN</a>
      <span>|</span>
      <a href="#">繁體</a>
      <span>|</span>
      <a href="#">简体</a>
      <span>|</span>
      <a href="#">公众号</a>
      <span>|</span>
      <a href="#">QQ</a>
      <span>|</span>
      <a href="#">微信</a>
    </div>
    <img src="../../../assets/photo/logo.jpg">
    <div class="tel">
        <div class="hour">
          联系电话

            <img src="../../../assets/photo/tel.jpg">

        </div>
      <div class="number">010-012-9527</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
 .logo{
  text-align: left;
   margin-top: -30px;
 }
  .region{
    text-align: right;
    clear: both;
    margin-top: -50px;
    font-size: 15px;
    margin-right: 20px;
  }
  a{
    color: black;
  }
  .tel{
    float: right;
  }
  .hour{
   height: 40px;
    margin-top: 20px;
    padding-right: 130px;
    font-size: 17px;
  }
  .number{
    color: #94A8D1;
    font-size: 25px;
    }
</style>
