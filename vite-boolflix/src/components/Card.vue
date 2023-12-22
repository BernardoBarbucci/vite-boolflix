<template>
    <section id="movie-details">
        <div class="card" @click="handleCardClick">
            <h2>{{ movie.title }}</h2>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ movie.vote_average }}</p>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Card',
    props: {
        movie: Object,
    },
    methods: {
        handleCardClick() {
            console.log('Card cliccata dovrebbe segnalare questo film:', this.movie);
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