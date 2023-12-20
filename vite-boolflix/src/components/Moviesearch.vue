<template>
    <section id="movie-search">
        <div class="container">
            <input v-model="searchQuery" @input="searchMovies" placeholder="Cerca film">
            <ul>
                <li v-for="movie in movies" :key="movie.id" @click="showMovieDetails(movie.id)">
                    {{ movie.title }}
                </li>
            </ul>

            <Movieinfo :movieDetails="selectedMovieDetails" />
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';
import Movieinfo from './Movieinfo.vue';

export default {
    name: 'Moviesearch',
    components: {
        Movieinfo,
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
                    console.error('Errore nella ricerca film:', error);
                });
        },
        showMovieDetails(movieID) {
            const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
            const url = `https://api.themoviedb.org/3/movie/${movieID}`;

            axios
                .get(url, {
                    params: {
                        api_key: apiKey,
                    },
                })
                .then((response) => {
                    this.selectedMovieDetails = response.data;
                })
                .catch((error) => {
                    console.error('Errore nel recupero dei dettagli del film:', error);
                });
        },
    },
};
</script>
  
<style scoped>
input {
    width: 20rem;
    height: 2.5rem;
    padding-left: .5rem;
    color: white;
    background: linear-gradient(90deg, #830000, black);
    border-radius: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    margin-top: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
        color: white;
        list-style-type: none;
        margin-bottom: .8rem;
        height: 2rem;
        padding-top: 7px;
        width: 100%;
        border-radius: 20px;
        border-color: white;
        background-color: #830000;
        text-align: center;
    }
}
</style>
  