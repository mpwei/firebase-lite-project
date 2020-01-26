<template>
    <transition name="fade">
        <div v-if="show" id="loading" class="d-flex justify-content-center align-items-center">
            <b-spinner type="grow"/>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>
    #loading {
        background-color: rgba(255, 255, 255, 0.95);
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }

    #loading > .spinner-grow {
        width: 4rem;
        height: 4rem;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>