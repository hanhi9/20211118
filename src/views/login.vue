<template>
  <div id="app">
    
   <div class="form-floating mb-3">
  <input type="email" v-model="inpEmail" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" v-model="inPsw" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<div > {{message}} </div>
<router-link :to="{name: 'Params', params: {name: '1', email:'2'}}">
      확인
      </router-link>
       <router-view></router-view>
  </div>
  
 

</template>

<script>
export default {

}
</script>

<style>
</style>