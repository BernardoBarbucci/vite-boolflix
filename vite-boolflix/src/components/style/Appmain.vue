<template>
    <div>
        <input v-model="searchQuery" id="searchbar" @input="searchMovies" placeholder="Cerca film">
        <ul>
            <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: '',
            movies: [],
        };
    },
    methods: {
        searchMovies() {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/search/movie`,
                params: {
                    query: this.searchQuery,
                    include_adult: false,
                    language: 'en-US',
                    page: 1,
                    api_key: '5b64bb8553442712f5b4d63bfbe74199',
                },
            };

            axios
                .request(options)
                .then((response) => {
                    this.movies = response.data.results;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.searchMovies();
    }
};
</script>

<style class="scss" scoped>
#searchbar {
    color: white;
}
</style>
  