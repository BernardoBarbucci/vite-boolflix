<template>
    <section id="movie-search">
        <div class="container">
            <input v-model="searchedString" type="text" placeholder="Cerca film" @keyup.enter="searchMovies">
            <button @click="$emit('search', searchedString)">cerca</button>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Moviesearch',
    data() {
        return {
            searchedString: '',
        };
    },
    methods: {
        searchMovies() {
            // Emetto l'evento "search" con la stringa cercata
            this.$emit('search', this.searchedString);
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
</style>
