<template>
 <div class="main-layout">
    <MainHeader />
    <main>
        <router-view />
    </main>
    <MainFooter />
 </div>
</template>

<script>
import MainFooter from './MainFooter.vue';
import MainHeader from './MainHeader.vue';

export default {
    name: "MainLayout",

    components: {
        MainFooter,
        MainHeader,
    }
}
</script>

<style>
.main-layout {
    display: grid;
    grid-template-rows: 80px auto 20%;
    min-height: 100vh;
    background-color: #41b88369;
}
</style>