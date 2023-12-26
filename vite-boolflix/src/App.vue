<template>
    <div>
        <Appheader />
        <Moviesearch @search="searchMedia" />
        <Appmain :mediaList="mediaList" @selectMedia="showMediaDetails" />
        <Card :media="selectedMedia" v-if="selectedMedia" />
    </div>
</template>

<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue'
import Moviesearch from './components/Moviesearch.vue';
import Card from './components/Card.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Appheader,
        Appmain,
        Moviesearch,
        Card,
    },
    data() {
        return {
            mediaList: [],
            selectedMedia: null,
        };
    },
    methods: {
        searchMedia(searchElement) {
            axios.get('https://api.themoviedb.org/3/search/multi?api_key=5b64bb8553442712f5b4d63bfbe74199&query=' + searchElement)
                .then((response) => {
                    this.mediaList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        showMediaDetails(movie) {
            this.selectedMedia = movie;
        },
    },
    created() {
        console.log('created funziona');
    }
};
</script>
  
<style lang="scss">
@use './components/style/main.scss' as *;
</style>


<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->