<template>
  <div>
    <div>
      <ReposList :repos="repos" />
    </div>

    <div>
      <button @click="backPage">prev</button>
      <button v-for="post in Math.ceil(repos.length / perPage)" :key="post">
        {{ item }}
      </button>

      <button @click="nextPage">next</button>
    </div>
  </div>
</template>

<script>
import MainPagination from "@/composables/MainPagination"; 
import ReposList from "./ReposList.vue";
export default {
  props: ["repos"],
  components: { ReposList },

  setup(props) {
    
  },
};
</script>

<style>
</style>