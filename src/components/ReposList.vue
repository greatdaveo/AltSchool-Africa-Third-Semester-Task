<template>
  <div class="repo-page">
    <div class="repo-container">
      <div class="btn-container">
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

      <div v-for="post in paginatedData" :key="post.id" class="repos-list">
        <SingleRepo :post="post" />
      </div>
    </div>

    <div>
      <img
        class="thumbs-robot"
        src="../assets/robot-thumbs-up-removebg-preview.png"
        alt="Robot with a thumbs up"
      />
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
.repo-page {
  display: flex;
  margin: 1rem auto;
}

.repo-container {
  float: left;
  margin-left: 2rem;
}

.btn-container {
  display: flex;
}

.btn-container button {
  margin: 0.5rem;
  padding: 0.5rem;
  background: inherit;
  color: gold;
  border-radius: 30%;
  border: 1px solid gold;
  box-shadow: 0px 2px 15px 2px gold;
}

.btn-container button:hover {
  border-radius: 50%;
  color: rgb(238, 217, 217);
  border: 1px solid rgb(238, 217, 217);
  box-shadow: 0px 2px 15px 2px rgb(238, 217, 217);
  cursor: pointer;
}

.repos-list {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid gold;
  box-shadow: 0px 2px 15px 2px #99a810;
  margin: 1rem;
  display: grid;
  grid-template-columns: 2fr ;
}

.repos-list:hover {
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  color: rgb(238, 217, 217);
  border: 1px solid rgb(238, 217, 217);
  box-shadow: 0px 2px 15px 2px rgb(238, 217, 217);
  cursor: pointer;
}

.thumbs-robot {
  width: 50%;
  float: right;
  margin-left: 30rem;
}
</style>