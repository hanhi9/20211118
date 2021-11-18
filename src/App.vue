<template>
  <div id="app">
  <div id="basic-event" v-if="aa == false">
  <b-button @click="aa == false" variant="success">Button</b-button>
</div>



    <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
  <input type="text" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-name">이름</span>
  <input type="text" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-age">나이</span>
  <input type="text" class="form-control" > 
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-size">사이즈</span>
  <input type="text" class="form-control" > <b-button variant="success">Button</b-button>
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
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>

<b-button variant="success" @click="showAlert">Button</b-button>

  </div>
  
 

</template>

<script>
export default {
  name: 'app',
  methods:{
    showAlert(){
      alert("han@nate.com \n 1234")
    }
  }

}
</script>

<style>
#app {
  margin: 10px;
}
</style>


