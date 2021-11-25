<template>
  <div id="app">
  <div id="basic-event" v-if="aa == false">
  <b-button @click="aa == false" variant="success">Button</b-button>
</div>



    <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
  <input type="text" v-model="inpEmail02" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-name">이름</span>
  <input type="text" v-model="name" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-age">나이</span>
  <input type="text" v-model="age" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-size">비번</span>
  <input type="text" v-model="pw" class="form-control" > <b-button variant="success">Button</b-button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
    
   <div class="form-floating mb-3">
  <input type="email" v-model="inpEmail" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" v-model="inPsw" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<div > {{message}} </div>

<b-button variant="success" @click="getData">Button</b-button>
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
      uri:'www.naver.com'
    }
  },
  methods: {
    getData () {
      //alert('이메일 : ' + this.inpEmail + '\n password : ' + this.inPsw)
      var conf = confirm("로그인 하시겠습니까?")
      if(conf){
          this.inpEmail02 =  this.inpEmail  // 이메일
          this.name =  'hanhi7'             // 이름
          this.age =  42                    // 나이
          this.pw =  this.inPsw             // 비번
      }
    }
  },
  mounted(){
    console.log("화면 onload");
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


