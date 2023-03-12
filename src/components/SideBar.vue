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
  text-align: center;
}

.side-bar li {
  list-style: none;
  line-height: 2rem;
  margin: 5rem;
  padding: 1rem;
  border: 1px solid gold;
}

.side-bar li:hover {
  background: white;
  font-weight: 700;
  border: 1px solid blue;
  cursor: pointer;
  /* color: blue; */
}

.side-bar a {
  text-decoration: none;
  font-size: 1.2rem;
  color: gold;
}

.side-bar a:hover {
  color: blue;
  color: inherit;
}
</style>