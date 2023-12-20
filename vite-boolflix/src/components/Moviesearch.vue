<template>
    <div>
        <input v-model="searchQuery" @input="searchMovies" placeholder="Cerca film">
        <ul>
            <li v-for="movie in movies" :key="movie.id" @click="showMovieDetails(movie.id)">{{ movie.title }}</li>
        </ul>
    </div>
</template>
<script>

import axios from 'axios';
import Movieinfo from './Movieinfo.vue';

export default {
    name: 'Moviesearch',
    components: {
        Movieinfos,
    },
    data() {
        return {
            searchQuery: '',
            movies: [],
            selectedMovieDetails: null,
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
                    console.error('Mistake in the Movie searchlist:', error);
                });
        },
        showMovieDetails(movieID) {
            const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
            const url = `https://api.themoviedb.org/3/movie/${movieID}`;
        }
    },
}
</script>

<style lang="scss">
input {
    color: white;
}

ul {
    color: white;

    li {
        color: white;
    }
}
</style>