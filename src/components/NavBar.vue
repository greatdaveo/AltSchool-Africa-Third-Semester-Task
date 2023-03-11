<template>
  <nav class="nav-bar">
    <h1>{{ `<greatedaveo />` }}</h1>

    <h1>Hello, I am David Olowomeye</h1>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  background: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  margin: 0rem auto;
  padding: 1rem;
}

.nav-bar p {
  font-size: 1rem;
  font-weight: 700;
}

.nav-bar h1 {
  text-align: center;
  margin: 0rem;
  padding: 1rem;
}
</style>