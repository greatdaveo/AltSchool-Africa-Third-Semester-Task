<template>
  <div class="repo-list">
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
  <div v-else>
    <IsLoading />
  </div>
</template>

<script>
import ReposList from "@/components/ReposList.vue";
import getData from "@/composables/getData";
import IsLoading from "@/components/IsLoading.vue";

export default {
  name: "ReposPage",
  components: { ReposList, IsLoading },

  setup() {
    const { posts, error, load } = getData();

    load();
    return { posts, error };
  },
};
</script>

<style>
.repo-list {
  text-align: center;
  /* overflow: hidden; */
}

.repo-list h1 {
  padding: 2rem;
  animation: animate 2s ease-in-out infinite;
  font-size: 3rem;
  color: white;
  -webkit-text-stroke: 2px gold;
  /* color: transparent; */
  /* overflow: hidden; */
}

@keyframes animate {
  0%,
  50% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
</style>