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
export default {
    name: 'Movieinfo',
    props: {
        callAPI: Function, // Accetta la funzione callAPI come prop
    },
    data() {
        return {
            movieDetails: null,
        };
    },
    methods: {
        // Funzione per ottenere info
        getMovieDetails(movieID) {
            this.callAPI(`movie/${movieID}`)
                .then((response) => {
                    this.movieDetails = response.data;
                })
                .catch((error) => {
                    console.error('Errore nel recupero dei dettagli del film:', error);
                });
        },
    },
    // Richiama la funzione getMovieDetails quando il componente viene creato
    created() {
        if (this.$route.params.movieID) {
            this.getMovieDetails(this.$route.params.movieID);
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