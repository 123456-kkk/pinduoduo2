<template>
  <div id="app">
    <router-view/>
   
  </div>
</template>

<script>

export default {
  name: 'App',
   
}
</script>

<style>
html,body,#app{
    width: 100%;
    height: 100%;
    touch-action: pan-y;
}

.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main{
    flex: 1;
    overflow: auto;
    font-size: 15px
}
</style>
