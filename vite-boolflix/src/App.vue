<template>
    <div>
        <Appheader />
        <Moviesearch @search="searchMovies" />
        <Appmain :movies="moviesList" @selectMovie="showMovieDetails" />
        <Card :movie="selectedMovie" v-if="selectedMovie" />
    </div>
</template>
  
<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue'
import Moviesearch from './components/Moviesearch.vue';
import Card from './components/Card.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Appheader,
        Appmain,
        Moviesearch,
        Card,
    },
    data() {
        return {
            moviesList: [],
            selectedMovie: null,
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
                });
        },
        showMovieDetails(movie) {
            // Visualizza i dettagli del film senza fare una seconda chiamata API
            this.selectedMovie = movie;

        },
    },
    created() {
        console.log('created funziona');
    }
};
</script>
  
<style lang="scss">
@use './components/style/main.scss' as *;
</style>


<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->