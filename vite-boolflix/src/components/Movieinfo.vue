<template lang="">
    <section class="movie-info">
        <div v-if="movieDetails">
            <h2>{{ movieDetails.title }}</h2>
            <p>Titolo Originale: {{ movieDetails.original_title }}</p>
            <p>Lingua: {{ movieDetails.original_language }}</p>
            <p>Voto: {{ movieDetails.vote_average }}</p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        Movieobject: Object,
    }
}
</script>
<style lang="sass">
    
</style>