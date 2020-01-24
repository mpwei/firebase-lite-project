<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 d-flex">
                        <router-link to="/" class="site-logo">
                            MPWEI
                        </router-link>
                    </div>
                </div>
            </div>


            <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

                <div class="container">
                    <div class="d-flex align-items-center">

                        <div class="mr-auto">
                            <nav class="site-navigation position-relative text-right" role="navigation">
                                <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                                    <li class="active">
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/about">About</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" class="nav-link text-left" to="/">Home</router-link>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        components: {},
        methods: {}
    }
</script>