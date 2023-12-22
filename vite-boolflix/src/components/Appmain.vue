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

<style lang="scss">
main {
    margin-top: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    article {
        max-width: 33rem;
        color: white;
        list-style-type: none;
        margin-bottom: .8rem;
        height: 2rem;
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
