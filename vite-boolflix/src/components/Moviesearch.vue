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
import Movieinfo from './Movieinfo.vue';

// const per api generiche
const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
const apiUrl = 'https://api.themoviedb.org/3';

export default {
    name: 'Moviesearch',
}
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
  