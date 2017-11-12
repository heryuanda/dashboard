<template>
  <div id="app">    
    <div class="fixed-nav" id="page-top">
      <router-view name="navbar"></router-view>      
      <div class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        <router-view name="footer"></router-view>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log('lol', this.$route)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
