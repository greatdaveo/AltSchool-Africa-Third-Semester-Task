<template>
  <div>
    <h1>Details Page</h1>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="repo">
      <div>
        <label>Name</label>
        <h3>{{ repo.name }}</h3>
      </div>

      <div>
        <label>Description</label>
        <h5>{{ repo.description }}</h5>
      </div>

      <div>
        <label>ID</label>
        <h5>{{ repo.id }}</h5>
      </div>

      <div>
        <label>Owner</label>
        <h5>{{ repo.owner.login }}</h5>
      </div>

      <div>
        <label>Branch</label>
        <h5>{{ repo.default_branch }}</h5>
      </div>

      <div>
        <label>Visiblity</label>
        <h5>{{ repo.visibility }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPost from "@/composables/getPost";

export default {
  props: ["name"],
  setup() {
    const route = useRoute();
    const { repo, error, load } = getPost(route.params.name);

    load();
    return { repo, error };
  },
};
</script>

<style>
</style>