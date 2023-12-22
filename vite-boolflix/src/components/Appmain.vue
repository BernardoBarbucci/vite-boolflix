<template>
    <main>
        <article v-for="movie in movies">
            {{ movie.title }}
        </article>
    </main>
</template>
  
<script>
export default {
    name: 'Appmain',

    props: {
        movies: {
            type: Array,
            required: true
        }
    }
};

</script>

<style lang="scss"></style>

<!-- TYPE: 
cd /Users/Berna/Desktop/vite-boolflix/vite-boolflix
npm run dev
-->
