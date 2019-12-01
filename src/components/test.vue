<template>
  <div @click="click">我是测试路由</div>
</template>

<script>
export default {
  methods: {
    click(){
      window.console.log( process.env.VUE_APP_BASEURL)
    }
  },
  
};
</script>

<style>
</style>