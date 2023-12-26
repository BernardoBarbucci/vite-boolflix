<template>
    <section id="movie-details">
        <div id="card" @click="handleCardClick" :class="{ 'show-details': media.selected }">
            <img :src="getMovieImageURL(media.poster_path)" class="poster-img" alt="Movie Poster">
            <h2>{{ media.title || media.name }}</h2>
            <p>Language: <img :src="getLanguageImage(media.original_language)" class="language" alt="Media Poster"></p>
            <p>Voto: {{ roundRating(media.vote_average) }} </p>
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
            // prende il voto medio, moltiplica per 2, arrotonda e quindi divide per 2 per avere un arrotondamento a 0.5. 
            // poi usa Math.min e Math.max per limitare il risultato a un intervallo da 1 a 5. 
            // La funzione toFixed(1) viene utilizzata per mantenere solo un decimale nel risultato finale.
            return Math.min(5, Math.max(1, Math.round(rating * 2) / 2)).toFixed(1);
        }
    },
};
</script>
  
<style lang="scss" scoped>
#card {
    .poster-img {
        width: 100%;
    }


    .language {
        height: .8rem;
        width: 1.5rem;
    }
}
</style>