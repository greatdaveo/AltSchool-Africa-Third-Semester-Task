<template>
  <div>
    <div v-for="post in paginatedData" :key="post.id">
      <!-- <H1>Repo List: </H1> -->
      <SingleRepo :post="post" />
    </div>

    <div class="pagination">
      <button @click="backPage">prev</button>
      <button
        v-for="item in Math.ceil(posts.length / perPage)"
        :key="item"
        @click="() => goToPage(item)"
      >
        {{ item }}
      </button>

      <button @click="nextPage">next</button>
    </div>
  </div>
</template>

<script>
import MainPagination from "@/composables/MainPagination";
import SingleRepo from "../components/SingleRepo.vue";

export default {
  props: ["posts"],
  components: { SingleRepo },

  setup(props) {
    const { paginatedData, perPage, page, nextPage, backPage, goToPage } =
      MainPagination(props.posts);

    return { paginatedData, perPage, page, nextPage, backPage, goToPage };
  },
};
</script>

<style>
</style>