<template>
  <div id="app">
     <h2>{{title}}</h2>
  <div class="row">   
    <div class="col-md-3"><router-link :to="{name: 'Login'}">로그인</router-link></div>
    <div class="col-md-3"><router-link :to="{name: 'Info'}">회원정보입력( {{title}} )</router-link></div>
    <div class="col-md-3"><router-link :to="{name: 'Info', Info: {email: this.$route.params.email, pw:this.$route.params.pw}}">회원정보( {{ this.$route.params.email}} )</router-link></div>
    <div class="col-md-3"><router-link :to="{name: 'App'}">로그아웃</router-link></div>
    <router-view></router-view>
    
  </div>  
  </div>
 

</template>

<script>
import Login from '@/views/Login.vue'
import Info from '@/views/Info.vue'

export default {
  name: 'App',
  components:{
      Login,
      Info
  },
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
      logOut:false,
      strTitle:''
    }
  },
  methods: {
    getData () {
      console.log('getData :::::::'+this.$route.params.email);
    }
  },
  mounted(){
    //console.log("화면 onload");
    console.log('mounted :::::::'+this.$route.email);
    this.$refs.About.$refs.btn.click();
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
  },
   props: {
    title: {
      type: String,
      default:'title'
    }
    ,
    email: {
      type: String,
      default:'<div> {{ $route.params.email }}</div>'
    }
    // ,
    // pw: {
    //   type: String,
    //   default:''
    // }
  }
//   ,
//   computed: {
//    title(){
//      return this.$route.params.email;
//    }
//  },
}
</script>

<style>
#app {
  margin: 10px;
}
</style>


