<template>
  <div id="app">
    <router-link :to="{name: 'Login'}">로그인</router-link>
    <router-link :to="{name: 'App'}">로그아웃</router-link>
    <router-link :to="{name: 'Info'}">회원정보( {{ this.$route.params.email}} )</router-link>
    <router-link :to="{name: 'Info', Info: {email: this.$route.params.email, pw:this.$route.params.pw}}">회원정보( {{ this.$route.params.email}} )</router-link>
    <router-view></router-view>
  </div>
  
 

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inpEmail: '',
      inPsw: '',
      inpEmail02: '',
      name: '',
      age: '',
      pw: '',
      aa:'속성',
      uri:'www.naver.com',
      logOut:false
    }
  },
  methods: {
    getData () {
      alert(this.isShowing)
     
    }
  },
  mounted(){
    console.log("화면 onload");
    
  },
  toggleShow() {
      
      this.logOut = !this.logOut;
    },
  // unmounted(){
  //   console.log("11111");
  // },
  computed:{
    message(){
      console.log("반환하는 데이터를 기억해 두어 그 데이터를 다시 반환");
    }
    
  }
}
</script>

<style>
#app {
  margin: 10px;
}
</style>


