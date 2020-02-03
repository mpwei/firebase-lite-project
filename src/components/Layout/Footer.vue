<template>
    <footer id="footer" class="text-secondary py-3 text-center border-top">
        Copyright © {{$store.state.profile.website.Year}} {{$store.state.profile.website.Title[$store.state.language]}} All rights reserved. Designed by {{$store.state.profile.website.Designer[$store.state.language]}}
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        components: {},
        data() {
          return {}
        },
        mounted() {
        },
        methods: {
            Init() {},
        }
    }
</script>