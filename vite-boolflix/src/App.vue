<template>
    <div>
        <Appheader />
        <Moviesearch />
        <Appmain />
    </div>
</template>
  
<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue'
import Moviesearch from './components/Moviesearch.vue';
import axios from 'axios'

export default {
    name: 'App',
    components: {
        Appheader,
        Appmain,
        Moviesearch,
    }
}
</script>
  
<style lang="scss">
@use './components/style/main.scss' as *;
</style>
