<template>
    <section id="movie-details">
        <div class="card" @click="handleCardClick">
            <h2>{{ selectedMovie.title }}</h2>
            <p>Titolo originale: {{ selectedMovie.original_title }}</p>
            <p>Lingua: {{ selectedMovie.original_language }}</p>
            <p>Voto: {{ selectedMovie.vote_average }}</p>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Card',
    props: {
        Movie: Object,
    },
    methods: {
        handleCardClick() {
            this.$emit('selectMovie', this.movie);
        },
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