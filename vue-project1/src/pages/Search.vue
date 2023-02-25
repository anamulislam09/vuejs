<template>
  <h1>Product Page</h1>

  <form v-on:submit.prevent="search">
    <input
      type="text"
      v-model="serchItem"
      placeholder="Enter your searching product"
    />
    <input type="submit" value="Search" />
  </form>

  <p>with {{ serchItem }} total {{ SearchResult.length }} found</p>

  <hr />
  <table class="table table-bordered">
    <tr>
      <th>Id</th>
      <th>Product Name</th>
      <th>Product Details</th>
      <th>Product Price</th>
      <th>Product Category</th>
    </tr>

    <tr v-for="item in SearchResult" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.product_name }}</td>
      <td>{{ item.product_details }}</td>
      <td>{{ item.product_price }}</td>
      <td>{{ item.product_category }}</td>
    </tr>
  </table>
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
        .post("http://127.0.0.1:8000/api/search/", {
          item: this.serchItem,
        })
        .then((response) => {
          this.SearchResult = response.data;
          console.log(response.data);
        });
    },
  },
  mounted() {
    // axios.get("http://127.0.0.1:8000/api/products/").then((response) => {
    //   this.posts = response.data;
    // });
  },
};
</script>

<style></style>
