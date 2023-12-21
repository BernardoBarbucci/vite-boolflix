<template>
    <main>
        <Moviesearch @showMovieDetails="showMovieDetails" />
        <!-- includo movieinfo e passo selectedmovie come prop -->
        <!-- <Movieinfo :movieID="selectedMovieID" /> -->
        <Movieinfo ref="movieInfo" :movieID="selectedMovieID" />
    </main>
</template>
  
<script>
import Moviesearch from './Moviesearch.vue';
import Movieinfo from './Movieinfo.vue';

import { ref } from 'vue';
// Importare la funzione callAPI
import { callAPI } from './api';

export default {
    name: 'Appmain',
    components: {
        Moviesearch,
        Movieinfo,
    },
    data() {
        return {
            selectedMovieID: null,
        };
    },
    methods: {
        // funzione generica per fare le chiamate api
        async callAPI(endpoint, params = {}) {
            try {
                const response = await callAPI(endpoint, params);
                return response.data;
            } catch (error) {
                console.error('Errore nella chiamata API:', error);
                throw error;
            }
        },
        // funzione specifica per cercare i film
        async callAPIForSearch(params) {
            return this.callAPI('search/movie', { ...params });
        },
        // gestisco l'evento showmoviedetails che parte da moviesearch
        showMovieDetails(movieID) {
            console.log('Evento ricevuto da Moviesearch:', movieID);
            this.selectedMovieID = movieID;

            // Chiamare fetchMovieDetails direttamente qui nel componente Appmain
            this.$refs.movieInfo.fetchMovieDetails();
        },
    }
};
</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->