<template>
  <div>Main
    <h2>이메일: {{ this.$route.params.email}}</h2>
    <h2>패스워드: {{ this.$route.params.pw }}</h2>
  </div>
  
</template>



<script>
export default {
  name: 'Main',
   created() {
    console.log(this.$route.params.email);
    console.log(this.$route.params.pw);
  }
}
</script>

<style>

</style>
