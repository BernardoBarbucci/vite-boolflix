<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': media.selected }">
            <img :src="getMovieImageURL()" alt="Movie Poster">
            <h2>{{ media.title || media.name }}</h2>
            <p>Language: <img :src="getLanguageImage(media.original_language)" alt="Media Poster"></p>
            <p>Voto: {{ media.vote_average }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Card',
    props: {
        media: Object,
    },
    methods: {
        handleCardClick() {
            if (!this.media.selected) {
                this.$emit('selectMedia', this.media);
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
                ko: 'ko.jpg',
            };
            const imagesFolder = 'flagImg/';
            // mostra la lingua originale SE img non corrisponde
            const defaultImage = 'hello';
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