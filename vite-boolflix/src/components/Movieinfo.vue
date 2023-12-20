<template lang="">
    <section class="movie-info">
        <div v-if="movieDetails">
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
        movieDetails: Object,
    }
}
</script>

<style lang="scss"></style>