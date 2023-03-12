<template>
  <div>
    <!-- The Top Nav Bar -->
    <NavBar />

    <div class="app-body">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: { NavBar, SideBar },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-body {
  background-image: linear-gradient(rgba(0, 0, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("./assets/galaxy-1.jpg");
  height: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-position-y: 100%;
  background-position-x: 67%;
}
</style>
