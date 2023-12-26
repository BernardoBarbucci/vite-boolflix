<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': movie.selected }">
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
            if (!this.movie.selected) {
                this.$emit('selectMovie', this.movie);
            }
        },
    },
};
</script>

  
<style lang="scss">
#movie-details #card {
    >* {
        background-color: #830000;
    }
}
</style>