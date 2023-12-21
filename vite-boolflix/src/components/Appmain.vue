<template>
    <main>
        <Moviesearch :callAPI="callAPIForSearch" />
        <Movieinfo :callAPI="callAPI" :movieID="selectedMovieID" />
    </main>
</template>
  
<script>
import Moviesearch from './Moviesearch.vue';
import Movieinfo from './Movieinfo.vue';

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
        // Funzione per chiamate API generiche
        callAPI(endpoint, params = {

        }) {
            // Aggiungi qui la tua logica per le chiamate API generiche
        },
        // Funzione specifica per la ricerca di film
        callAPIForSearch(params) {
            return this.callAPI('search/movie', { ...params });
        },
        // Funzione per visualizzare i dettagli del film
        showMovieDetails(movieID) {
            this.selectedMovieID = movieID;
        },
    },
};
</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->