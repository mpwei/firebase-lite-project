<template>
    <footer id="footer" class="text-secondary py-3 text-center border-top">
        Copyright © {{$store.state.profile.website.Year}} {{$store.state.profile.website.Title}} All rights reserved. Designed by {{$store.state.profile.website.Designer}}
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        components: {},
        mounted() {
        },
        methods: {
            Init() {
                return [
                    // new Promise((_Resolve, _Reject) => this.GetLogo(_Resolve, _Reject)),
                    // new Promise((_Resolve, _Reject) => this.GetMenu(_Resolve, _Reject)),
                ]
            },
        }
    }
</script>