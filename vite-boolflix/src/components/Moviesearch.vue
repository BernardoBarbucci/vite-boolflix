<template lang="">
  <div>
    <input v-model="searchQuery" @input="searchMovies" placeholder="Cerca film">
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>
<script>

import axios from 'axios';

export default {
    name: 'Moviesearch',
    data() {
        return {
            searchQuery: '',
            movies: [],
        };
    },
    methods: {
        searchMovies() {
            const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
            const url = 'https://api.themoviedb.org/3/search/movie';

            axios
                .get(url, {
                    params: {
                        query: this.searchQuery,
                        api_key: apiKey,
                    },
                })
                .then((response) => {
                    this.movies = response.data.results;
                })
                .catch((error) => {
                    console.error('Errore nella ricerca film:', error);
                });
        },
    },
}
</script>

<style lang="">
    
</style>