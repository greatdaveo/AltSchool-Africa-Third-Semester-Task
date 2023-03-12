<template>
  <div>
    <div>
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
</style>