<template>
  <div>
    <div class="single-post">
      <router-link :to="{ name: 'DetailsPage', params: { name: post.name } }">
        <h2>{{ post.name }}</h2>
      </router-link>
      <p>Watchers: {{ post.watchers }}</p>
      <p>Create Time: {{ post.created_at }}</p>
      <p>Updated Time: {{ post.updated_at }}</p>
      <p>Pushed Time: {{ post.pushed_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.single-post p {
  color: #beb1b1;
  line-height: 1.5rem;
}

.single-post a {
  text-decoration: none;
  color: rgb(238, 217, 217);
}

.single-post a:hover {
  color: rgb(118, 67, 160);
}
</style>