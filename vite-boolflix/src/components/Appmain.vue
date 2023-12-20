<template>
    <div>
        <Moviesearch />
    </div>
</template>
  
<script>
import Moviesearch from './Moviesearch.vue';

export default {
    name: 'Appmain',
    components: {
        Moviesearch,
    },
};
</script>

<style lang="scss">
h1 {
    color: white;
}
</style>