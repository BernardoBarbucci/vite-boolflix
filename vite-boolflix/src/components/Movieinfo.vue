<template lang="">
    <section id="movie-info">
        <div v-if="movieDetails" class="movie-details">
            <h2>{{ movieDetails.title }}</h2>
            <p>Titolo originale: {{ movieDetails.original_title }}</p>
            <p>Lingua: {{ movieDetails.original_language }}</p>
            <p>Voto: {{ movieDetails.vote_average }}</p>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { callAPI } from './api';

export default {
    name: 'Movieinfo',
    props: {
        movieID: Number,
    },
    data() {
        return {
            movieDetails: null,
        };
    },
    async mounted() {
        if (this.movieID) {
            try {
                const response = await callAPI(`movie/${this.movieID}`);
                this.movieDetails = response.data;
            } catch (error) {
                console.error('Errore nel recupero dei dettagli del film:', error);
            }
        }
    },
};
</script>


<style lang="scss">
#movie-info .movie-details {
    height: 100%;
    width: 40rem;
    margin: 2rem auto;
    padding: 1rem;
    border: 2px solid yellow;
    background-color: #830000;

    h2 {
        color: white;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1rem;
        background-color: #830000;
    }

    p {
        color: white;
        background-color: #830000;
    }
}
</style>