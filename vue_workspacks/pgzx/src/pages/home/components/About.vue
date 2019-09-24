<template>
<div class="leftindex">
  <div class="aboutindex">
    <div class="aboutbt">
      <p>关于我们</p>
      <span><a href="#">更多>></a></span>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
.leftindex{
  width: 690px;
  float: left;
  margin-left: 70px;
}
.aboutindex {
  width: 100%;
  float: left;
}
.aboutbt  {
  width: 100%;
  float: left;
  padding-bottom: 8px;
  border-bottom: 1px #ccc solid;
  margin-top: -15px;
}
.aboutbt p {
  float: left;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 1px;
  color: #BE0509;
}
.aboutbt span {
  float: right;
  font-size: 15px;
  margin-top: 20px;
  font-weight: bold;
}
.aboutbt a {
  color: #666666;
  text-decoration: none;
}
</style>
