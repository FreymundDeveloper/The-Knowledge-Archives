<template>
    <div class="title-main">
        <h1><i v-if="icon" :class="icon"></i>{{ main }}</h1>
        <h2>{{ sub }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'TitleMain',
    props: ['icons', 'main', 'sub']
}
</script>

<style>
    .title-main h1 {
        margin: 0px;
    }

    .title-main h2 {
        color: #777;
        margin-top: 5px;
        font-size: 1.3em;
    }
</style>