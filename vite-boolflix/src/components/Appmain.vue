<template>
    <div>
        <Moviesearch :callAPI="'callAPIForSearch'" />
    </div>
</template>
  
<script>
import Moviesearch from './Moviesearch.vue';

export default {
    name: 'Appmain',
    components: {
        Moviesearch,
    },
    methods: {
        // Funzione per chiamate API generiche
        callAPI(endpoint, params = {}) {
            // Aggiungi qui la tua logica per le chiamate API generiche
        },
        // Funzione specifica per la ricerca di film
        callAPIForSearch(params) {
            return this.callAPI('search/movie', { ...params });
        },
    },
};
</script>

<style lang="scss">
h1 {
    color: white;
}
</style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->