<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="less"></style>
