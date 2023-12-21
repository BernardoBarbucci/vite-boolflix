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

};
</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->