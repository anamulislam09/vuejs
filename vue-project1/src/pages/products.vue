<template>
  <button
    @click="
      formDisplay = true;
      isSubmitButton = true;
    "
    class="btn btn-primary"
  >
    Add NewProduct
  </button>

  <div v-if="formDisplay" class="border p-5 m-5 entryform">
    <!-- <H1>Add New Product</H1> -->
    {{ JSON.stringify(formValues, null, 2) }}
    <hr />
    <form class="form">
      <div class="col-12">
        <div class="form-group">
          <label class="form-label" for="product-title">Product name</label>
          <div class="form-control-wrap">
            <input
              type="text"
              class="form-control"
              v-model="formValues.p_name"
              id="product_name"
            />
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="form-group">
          <label class="form-label" for="sale-price">Product Details</label>
          <div class="form-control-wrap">
            <textarea
              name="product_details"
              class="form-control"
              id="product_details"
              v-model="formValues.p_details"
              cols="10"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label class="form-label" for="regular-price">Product Price</label>
          <div class="form-control-wrap">
            <input
              type="number"
              v-model="formValues.p_price"
              class="form-control"
              id="product_price"
            />
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="form-group">
          <label class="form-label" for="regular-price">Product Stock</label>
          <div class="form-control-wrap">
            <input
              type="number"
              v-model="formValues.p_stock"
              class="form-control"
              id="product_stock"
            />
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <label class="form-label" for="category">Category</label>
          <div class="form-control-wrap">
            <select
              v-model="formValues.p_cat"
              class="form-control"
              id="product_category"
            >
              <option value="" selected disabled>Select one</option>
              <option value="1">Shirt</option>
              <option value="2">Pant</option>
              <option value="T-Shirt">Shirt</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="form-control-wrap">
          <label for="">Product Image:</label><br />
          <input
            type="file"
            name="product_image"
            class="form-control"
            id="product_image"
          />
        </div>
      </div>
      <br />
      <div class="col-12" v-if="isSubmitButton">
        <button type="button" @click="product_submit()" class="btn btn-primary">
          SUBMIT
        </button>
      </div>
      <div class="col-12" v-if="isUpdateButton">
        <button type="button" @click="product_update()" class="btn btn-primary">
          UPDATE
        </button>
      </div>
    </form>
  </div>

  <div v-if="!formDisplay">
    <hr />
    <h1 class="text-center">All Product</h1>
    <table class="table table-bordered">
      <tr>
        <th>Id</th>
        <th>Product Name</th>
        <th>Product Details</th>
        <th>Product Price</th>
        <th>Product Category</th>
        <th>Action</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.product_name }}</td>
        <td>{{ post.product_details }}</td>
        <td>{{ post.product_price }}</td>
        <td>{{ post.product_category }}</td>
        <td>
          <button @click="product_delete(post.id)" class="btn btn-danger">
            Delete
          </button>
          <button
            @click="
              edit_product(post);
              isUpdateButton = true;
            "
            class="btn btn-info"
          >
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      loading: false,
      formDisplay: false,
      isSubmitButton: false,
      isUpdateButton: false,

      formValues: {
        p_name: "",
        p_details: "",
        p_price: "",
        p_stock: "",
        p_cat: "",
      },
    };
  },
  mounted() {
    this.get_products();
  },
  methods: {
    edit_product(product) {
      this.formDisplay = true;
      this.formValues.id = product.id;
      this.formValues.p_name = product.product_name;
      this.formValues.p_details = product.product_details;
      this.formValues.p_price = product.product_price;
      this.formValues.p_stock = product.product_stock;
      this.formValues.p_cat = product.product_category;
    },
    product_submit() {
      axios
        .post("http://127.0.0.1:8000/api/products/", {
          // prod_details: this.formValues,
          product_name: this.formValues.p_name,
          product_details: this.formValues.p_details,
          product_price: this.formValues.p_price,
          product_stock: this.formValues.p_stock,
          product_category: this.formValues.p_cat,
        })
        .then((response) => {
          // this.posts = response.data;
          // this.loading = true;
          // alert(response.data);
          this.formDisplay = false;
          this.formValues = {};
          this.get_products();
          alert(response.data.msg);
          console.log(response.data.mgs);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    get_products() {
      axios.get("http://127.0.0.1:8000/api/products/").then((response) => {
        this.posts = response.data;
        // this.loading = true;
      });
    },
    // delete Product

    product_delete() {
      axios
        .delete("http://127.0.0.1:8000/api/products/" + id)
        .then((response) => {
          this.get_products();
          // this.loading = true;
          alert(response.data.msg);
        });
    },

    // Update Product

    product_update() {
      axios
        .put("http://127.0.0.1:8000/api/products/" + this.formValues.id, {
          product_name: this.formValues.p_name,
          product_details: this.formValues.p_details,
          product_price: this.formValues.p_price,
          product_stock: this.formValues.p_stock,
          product_category: this.formValues.p_cat,
        })
        .then((response) => {
          this.get_products();
          // this.loading = true;
          alert(response.data.msg);
        });
    },
  },
};
</script>

<style>
.border.p-5.m-5.entryform {
  background: #dddada;
}
</style>
