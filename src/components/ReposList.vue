<template>
  <div>
    <H1>Repo List: </H1>
    <div v-for="repo in repos" :key="repo.id">
      <p>{{ repo.name }}</p>
    </div>
  </div>
</template>

<script>
import getUserRepos from "@/composables/getUserRepos";

export default {
  props: ["repos"],
  name: "RepoList",

  setup(props) {
    const { repos, error, loadRepos } = getUserRepos();

    loadRepos();
    return { repos, error };
  },
};
</script>

<style>
</style>