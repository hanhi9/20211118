<template>
  <div>Main
    <h2>이메일: {{ this.$route.params.email}}</h2>
    <h2>패스워드: {{ this.$route.params.pw }}</h2>
  </div>
  
</template>



<script>
export default {
        name: 'Login',
        props: {
            email: {
                type: String,
                default : ''
            },
            pw: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style>

</style>
