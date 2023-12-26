<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': media.selected }">
            <img :src="getMovieImageURL(media.poster_path)" class="poster-img" alt="Movie Poster">
            <div class="card-details">
                <h2>{{ media.title || media.name }}</h2>
                <p class="overview" v-if="media.selected">{{ media.overview }}</p>
                <p v-else>Voto:
                    <span v-for="(star, index) in roundRating(parseFloat(media.vote_average))" :key="index">
                        <i v-if="star" class="fas fa-star"></i>
                        <i v-else class="far fa-star"></i>
                    </span>
                </p>
            </div>
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
        getMovieImageURL(posterPath) {
            if (!posterPath) {
                return null; // Restituisci null se il posterPath è vuoto o nullo
            }
            const baseURL = 'https://image.tmdb.org/t/p/';
            const imageSize = 'w780';
            return `${baseURL}${imageSize}${posterPath}`;
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
        roundRating(rating) {
            // Mappa il voto da 1-10 a 1-5 arrotondando sempre per eccesso + attribuisce x stelle in base al numero del voto ricevuto
            const maxStars = 5;
            const numberOfStars = Math.ceil((rating / 10) * maxStars);
            return Array.from({ length: maxStars }, (_, index) => index < numberOfStars);
        }
    },
};
</script>
  
<style lang="scss" scoped>
#card {
    .poster-img {
        width: 100%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    h2 {
        font-size: 1.35rem;
    }

    .language {
        height: .8rem;
        width: 1.5rem;
    }
}
</style>