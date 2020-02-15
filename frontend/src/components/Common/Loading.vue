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