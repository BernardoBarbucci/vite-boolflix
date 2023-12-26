<template>
    <section id="movie-search">
        <div class="container">
            <input v-model="searchedString" type="text" placeholder="Cerca film" @keyup.enter="searchMovies">
            <button @click="searchMovies">Cerca</button>
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

button {
    background-color: #830000;
    border-radius: 20px;
    color: grey;
    border: none;
    margin-top: .5rem;
    height: 2rem;
    width: 3rem;
}
</style>
