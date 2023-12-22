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

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=5b64bb8553442712f5b4d63bfbe74199&query=' + searchElement)
                .then((response) => {
                    // handle success
                    console.log(response);
                    this.moviesList = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
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


<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->