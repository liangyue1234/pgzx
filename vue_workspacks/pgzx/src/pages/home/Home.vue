<template>
  <div>
    <home-head></home-head>
    <home-nav></home-nav>
    <home-carousel></home-carousel>
    <home-about></home-about>
  </div>
</template>

<script>
import HomeHead from './components/Head'
import HomeNav from './components/Nav'
import HomeCarousel from './components/Carousel'
import HomeAbout from './components/About'
import axios from 'axios'
    export default {
        name: "Home",
      components:{
          HomeHead,
          HomeNav,
          HomeCarousel,
          HomeAbout
      },
      methods:{
        getHomeInfo(){
          axios.get('http://106.13.110.70:8090/proservice/getCount')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
          console.log(res)
        }
      },
      mounted(){
        this.getHomeInfo()
      }
    }
</script>

<style scoped>

</style>
