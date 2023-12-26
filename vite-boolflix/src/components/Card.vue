<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': movie.selected }">
            <h2>{{ movie.title }}</h2>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Language: <img :src="getLanguageImage(movie.original_language)" alt="Movie Poster"></p>
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
        // map per associare img alla sua lingua
        getLanguageImage(language) {
            const languageImageMap = {
                en: 'eng.jpeg',
                fr: 'france.png',
                de: 'deut.webp',
                it: 'ita.png',
                ja: 'jap.png',
            };
            const imagesFolder = 'flagImg/';
            // mostra la lingua originale SE img non corrisponde
            const defaultImage = '';
            const imageName = languageImageMap[language] || defaultImage;
            return `${imagesFolder}${imageName}`;
        },
    },
};
</script>

  
<style lang="scss" scoped>
#card {
    img {
        height: .8rem;
        width: 1.5rem;
    }
}
</style>