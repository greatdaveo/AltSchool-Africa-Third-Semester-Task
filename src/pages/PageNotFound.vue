<template>
  <div class="PNF-container">
    <div class="PNF-text">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>Kindly enter the correct url!</p>
    </div>

    <div class="PNF-link">
      <router-link to="/">RETURN TO HOME PAGE</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.PNF-container {
  text-align: center;
}

.PNF-text {
  padding: 5rem;
}

.PNF-text h1 {
  font-size: 5rem;
  color: brown;
}

.PNF-text h3 {
  font-size: 2rem;
  color: bisque;
}

.PNF-text p {
  font-size: 1.5rem;
  color: aliceblue;
}

.PNF-link a {
  color: gold;
  text-decoration: none;
  border: 1px solid gold;
  padding: 0.5rem;
}

.PNF-link a:hover {
  background: white;
  color: inherit;
  font-weight: 1000;
  border: 1px solid blue;
  cursor: pointer;
}
</style>