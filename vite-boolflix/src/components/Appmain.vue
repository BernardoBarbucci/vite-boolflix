<template>
    <main>
        <Card v-for="media in mediaList" :key="media.id" :media="media" id="media-card" @selectMedia="selectMedia">
            {{ movie.title || media.title }}
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
        mediaList: Array,
    },
    methods: {
        selectMedia(media) {
            this.$emit('selectMedia', media);
            this.mediaList.forEach((m) => {
                m.selected = m.id === media.id;
            });
        },
    },
};
</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->
