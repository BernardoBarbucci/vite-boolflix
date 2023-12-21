<template>
    <section id="movie-search">
        <div class="container">
            <input v-model="searchQuery" @input="searchMovies" placeholder="Cerca film">
            <ul>
                <li v-for="movie in movies" :key="movie.id" @click="showMovieDetails(movie.id)">
                    {{ movie.title }}
                </li>
            </ul>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';
import { callAPI } from './api';

export default {
    name: 'Moviesearch',
    data() {
        return {
            searchQuery: '',
            movies: [],
        };
    },
    methods: {
        async searchMovies() {
            console.log('Query:', this.searchQuery);
            try {
                const response = await callAPI('search/movie', { query: this.searchQuery });
                this.movies = response.results;
            } catch (error) {
                console.error('Errore nella ricerca film:', error);
            }
        },
        // $emit
        showMovieDetails(movieID) {
            this.$emit('update:selectedMovieID', movieID);
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
    border: none;
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
