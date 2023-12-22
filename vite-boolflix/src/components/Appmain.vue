<template>
    <main>
        <Card v-for="movie in movies" :key="movie.id" :movie="movie" id="movie-card" @selectMovie="selectMovie">
            {{ movie.title }}
        </Card>
    </main>
</template>
  
<script>
import Card from './Card.vue';

export default {
    name: 'Appmain',
    components: {
        Card,
    },
    props: {
        movies: Array,
    },
    methods: {
        selectMovie(movie) {
            this.$emit('selectMovie', movie);
        },
    },
};
</script>

<style lang="scss">
main {
    margin-top: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #movie-card {
        max-width: 33rem;
        color: white;
        list-style-type: none;
        margin-bottom: .8rem;
        height: 6rem;
        padding-top: 7px;
        width: 100%;
        border-radius: 20px;
        border-color: white;
        background-color: #830000;
        text-align: center;
    }
}
</style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->
