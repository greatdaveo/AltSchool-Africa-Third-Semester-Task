<template>
  <nav class="nav-bar">
    <router-link to="/">
      <h1>{{ `<greatedaveo />` }}</h1>
    </router-link>

    <h1>Hello, welcome to my GitHub API website</h1>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

.nav-bar {
  /* background: rgb(229, 232, 236); */
  background: rgb(133, 120, 132);
  background: linear-gradient(
    90deg,
    rgb(215, 145, 235) 3%,
    rgb(39, 31, 48) 21%,
    rgb(36, 8, 39) 53%,
    rgba(122, 103, 148, 1) 86%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  margin: 0rem auto;
  padding: 0.1rem;
}

.nav-bar a {
  text-decoration: none;
}

.nav-bar a h1 {
  color: white;
  -webkit-text-stroke: 1px gold;
  box-shadow: 0px 2px 15px 2px #707074;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 1000;
  /* font-family: "Montserrat", sans-serif; */
}

.nav-bar {
  /* text-align: center; */
  margin: 0.1rem;
  padding: 0.5rem;
  display: flex;
}

.nav-bar h1:nth-child(2) {
  color: transparent;
  -webkit-text-stroke: 1px gold;
  overflow: hidden;
  animation: navbar 7s linear infinite;
}

@keyframes navbar {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  10% {
    transform: translate3d(-200%, 0, 0);
  }
}
</style>