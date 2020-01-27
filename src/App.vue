<template>
    <div id="app">
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar />
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from "./components/Layout/Header";
    import Footer from "./components/Layout/Footer";
    import ContentWrapper from "./components/Layout/ContentWrapper";
    import Loading from "./components/Common/Loading";

    Vue.component('ContentWrapper', ContentWrapper)

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Loading
        }
    }
</script>
