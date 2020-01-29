<template>
    <main>
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar/>
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: 'SingleLayout',
        components: {},
        methods: {}
    }
</script>