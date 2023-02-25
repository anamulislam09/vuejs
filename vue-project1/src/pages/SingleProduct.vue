<template>
  <div>
    <h1>Single Product</h1>
    <form v-on:submit.prevent="search">
      <input
        type="text"
        v-model="serchItem"
        placeholder="Enter your searching product"
      />
      <input type="submit" value="Search" />
    </form>
    <hr />

    <!-- <table class="table table-bordered">
      <tr>
        <th>Id</th>
        <th>Product Name</th>
        <th>Product Details</th>
        <th>Product Price</th>
        <th>Product Category</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.product_name }}</td>
        <td>{{ post.product_details }}</td>
        <td>{{ post.product_price }}</td>
        <td>{{ post.product_category }}</td>
      </tr>
    </table> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      serchItem: "",
      SearchResult: [],
    };
  },

  methods: {
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search", {
          item: this.serchItem,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>

<style></style>
