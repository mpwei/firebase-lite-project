<template>
    <div id="app">
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar></vue-progress-bar>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Layout/Header";
    import Footer from "./components/Layout/Footer";
    import Loading from "./components/Common/Loading";

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Loading
        }
    }
</script>
