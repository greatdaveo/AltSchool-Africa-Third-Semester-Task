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
  background: inherit;
  max-height: 100%;
  height: 40rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px 2px #91929b;
}

.side-bar li {
  list-style: none;
  line-height: 3rem;
}

.side-bar a {
  text-decoration: none;
  font-size: 1.2rem;
  color: gold;
}
</style>