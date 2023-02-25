<template>
  <h1>News Page</h1>
  <hr />
  <table v-if="loading" class="table table-striped">
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Description</th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        this.posts = response.data;
        this.loading = true;
      });
  },
};
</script>

<style></style>
