<template>
  <div>
  <div>About</div>
  <button type="button" @click="childFunc" ref="btn">click</button>
  </div>
</template>

<script>
export default {
  childFunc() {
     console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
   }
}
</script>

<style>
</style>