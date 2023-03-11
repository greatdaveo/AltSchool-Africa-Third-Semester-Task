<template>
  <div>
    <H1>Repo List: </H1>
    <div v-for="repo in repos" :key="repo.id">
      <h2>{{ repo.name }}</h2>
      <p>Watchers: {{ repo.watchers }}</p>
      <p>Create Time: {{ repo.created_at }}</p>
      <p>Updated Time: {{ repo.updated_at }}</p>
      <p>Pushed Time: {{ repo.pushed_at }}</p>
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