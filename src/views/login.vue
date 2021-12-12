<template>
  <div id="app">
    <h3>{{title}}</h3>
   <div class="form-floating mb-3">
  <input type="email" v-model="inpEmail" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" v-model="inPsw" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<div > {{message}} </div>
    <router-link :to="{name: 'Main', params: {email: this.inpEmail, pw:this.inPsw}}">
      확인
      </router-link>
       <router-view></router-view>
  </div>
  
 

</template>

<script>
// export default {
//   name: 'Login',
//   data () {
//     return {
//       inpEmail: '',
//       inPsw: ''
//     }
//   },
//   created() {
//     console.log(this.$route.params.email);
//     console.log(this.$route.params.pw);
//   }
// }

export default {
        name: 'Login',
        props: {
            name: {
                type: String,
                default : ''
            },
            age: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style>
</style>