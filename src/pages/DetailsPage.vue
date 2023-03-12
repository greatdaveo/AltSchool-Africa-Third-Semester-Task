<template>
  <div class="details-page">
    <h1>Repository Details</h1>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="repo" class="repo-container">
      <h2>
        Name: <span>{{ repo.name }}</span>
      </h2>

      <h3>
        Description: <span>{{ repo.description }}</span>
      </h3>

      <h3>
        ID: <span>{{ repo.id }}</span>
      </h3>

      <h3>
        Owner: <span>{{ repo.owner.login }}</span>
      </h3>

      <h3>
        Branch: <span>{{ repo.default_branch }}</span>
      </h3>

      <h3>
        Visiblity: <span>{{ repo.visibility }}</span>
      </h3>

      <div class="back-btn">
        <router-link to="/repositories"> Go back </router-link>
      </div>
    </div>

    <div v-else>
      <IsLoading />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPost from "@/composables/getPost";
import IsLoading from "@/components/IsLoading.vue";

export default {
  props: ["name"],
  components: { IsLoading },
  setup() {
    const route = useRoute();
    const { repo, error, load } = getPost(route.params.name);

    load();
    return { repo, error };
  },
};
</script>

<style>
.details-page {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 5rem;
}

.details-page h1 {
  margin-top: 2rem;
  color: ;
  -webkit-text-stroke: 0.5px white;
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
}

.details-page .repo-container {
  margin: 3rem auto;
  box-shadow: 0px 2px 15px 2px #707074;
  padding: 1rem;
  border-radius: 10%;
}

.repo-container h2 {
  /* color: rgb(238, 217, 217); */
  /* margin: 0.5rem; */
}

.repo-container h3,
h2 {
  color: #f0e2e2;
  margin: 0.5rem;
}

.repo-container span {
  color: rgb(167, 108, 185);
}

.back-btn {
  text-align: center;
  margin: 2rem;
}

.back-btn a {
  color: gold;
  text-decoration: none;
  border: 1px solid gold;
  padding: 0.5rem;
}

.back-btn a:hover {
  background: white;
  color: inherit;
  font-weight: 1000;
  border: 1px solid blue;
  cursor: pointer;
}
</style>