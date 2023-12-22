<template>
    <main>
        <Moviesearch @showMovieDetails="showMovieDetails" />
        <Movieinfo ref="movieInfo" :movieID="selectedMovieID" @movieInfoMounted="handleMovieInfoMounted" />
    </main>
</template>
  
<script>
import Moviesearch from './Moviesearch.vue';
import Movieinfo from './Movieinfo.vue';

import { ref } from 'vue';
import { callAPI } from './api';

export default {
    name: 'Appmain',
    components: {
        Moviesearch,
        Movieinfo,
    },
    data() {
        return {
            moviesList
        }
    },
    methods: {
        searchMovies(searchElement) {

        }
    },
    created() {
        console.log('created funziona');
        this.searchMovies();
    }


};
// data() {
//     return {
//         selectedMovieID: null,
//     };
// },
// methods: {
//     // funzione generica per fare le chiamate api
//     async callAPI(endpoint, params = {}) {
//         try {
//             const response = await callAPI(endpoint, params);
//             return response.data;
//         } catch (error) {
//             console.error('Errore nella chiamata API:', error);
//             throw error;
//         }
//     },
//     // funzione specifica per cercare i film
//     async callAPIForSearch(params) {
//         return this.callAPI('search/movie', { ...params });
//     },
//     // gestisco l'evento showmoviedetails che parte da moviesearch
//     showMovieDetails(movieID) {
//         console.log('evento ricevuto coorettamente dal film numero:', movieID);
//         this.selectedMovieID = movieID;
//     },
//     // gestisco l'evento movieInfoMounted emesso da Movieinfo
//     async handleMovieInfoMounted() {
//         // Chiamare fetchMovieDetails direttamente qui nel componente Appmain
//         await this.fetchMovieDetails();
//     },
//     // fetchMovieDetails spostato qua da Moviesearch
//     async fetchMovieDetails() {
//         if (this.selectedMovieID) {
//             try {
//                 const response = await this.callAPI(`movie/${this.selectedMovieID}`);
//                 // Aggiorna i dettagli del film nel componente Appmain
//                 this.$refs.movieInfo.movieDetails = response.data;
//             } catch (error) {
//                 console.error('Errore nel recupero dei dettagli del film:', error);
//             }
//         }
//     },
// },

</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->