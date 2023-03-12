<template>
  <div>
    <h1>David's Repository</h1>
  </div>
  <div>
    <router-view></router-view>
  </div>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <ReposList :posts="posts" />
  </div>

  <!-- For the Spinner -->
  <div></div>
</template>

<script>
import ReposList from "@/components/ReposList.vue";
import getData from "@/composables/getData";

export default {
  name: "ReposPage",
  components: { ReposList },

  setup() {
    const { posts, error, load } = getData();

    load();
    return { posts, error };
  },
};
</script>

<style>
</style>