<template>
  <div class="home-container">
    <!-- The Side Bar -->
    <SideBar />

    <!-- The Main Hero Component -->
    <MainHero />

    <!-- <div v-else class="loading">
      <img src="https://tenor.com/bpeK1.gif" alt="" />
    </div> -->
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import MainHero from "@/components/MainHero.vue";

export default {
  name: "HomeView",
  components: { SideBar, MainHero },
};
</script>

<style>
.home-container {
  height: 100vh;
}
</style>