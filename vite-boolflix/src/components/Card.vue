<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': movie.selected }">
            <h2>{{ movie.title }}</h2>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <img :src="getLanguageImage(movie.original_language)" alt="Movie Poster">
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
        getLanguageImage(language) {
            const languageImageMap = {
                en: 'eng.jpeg',
                fr: 'france.png',
                de: 'deut.webp',
                it: 'ita.png',
                ja: 'jap.png',
            };

            const imagesFolder = 'flagImg/';
            const defaultImage = '';

            const imageName = languageImageMap[language] || defaultImage;

            return `${imagesFolder}${imageName}`;
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