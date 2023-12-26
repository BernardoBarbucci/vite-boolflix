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

<style lang="scss">
main {
    padding-top: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #media-card {
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
