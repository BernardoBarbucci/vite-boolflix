<template>
    <div>
        <Appheader />
        <Appmain />
        <Appfooter.vue />
    </div>
</template>
  
<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue';

export default {
    name: 'App',
    components: {
        Appheader,
        Appmain
    }
}
</script>
  
<style lang="scss">
@use './components/style/main.scss' as *;
</style>
