<template>
    <div>
        <Appheader />
        <Moviesearch @search="searchMovies" />
        <Appmain :movies="moviesList" />
    </div>
</template>
  
<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue'
import Moviesearch from './components/Moviesearch.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Appheader,
        Appmain,
        Moviesearch,
    },
    data() {
        return {
            moviesList: [],
        }
    },
    methods: {
        searchMovies(searchElement) {
            console.log(searchElement);
        }
    },
    created() {
        console.log('created funziona');
        this.searchMovies();
    }


}
</script>
  
<style lang="scss">
@use './components/style/main.scss' as *;
</style>
