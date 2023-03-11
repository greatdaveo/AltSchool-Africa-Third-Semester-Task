<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/repositories">Repositories</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
.side-bar {
  background: green;
  max-height: 100%;
  height: 40rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.side-bar li {
  list-style: none;
  line-height: 3rem;
}

.side-bar a {
  text-decoration: none;
}
</style>