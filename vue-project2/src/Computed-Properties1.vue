<template>
  <div>
    {{ author.books.length > 0 ? "Yes" : "NO" }}, Total Book : {{ totalBooks }}
    {{ now }}
    <hr />
    {{ author.books.length > 0 ? "Yes" : "NO" }}, Total Book :
    {{ calculateBooks() }} {{ nowDate() }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // a computed getter
    totalBooks() {
      // `this` points to the component instance
      return this.author.books.length;
    },
    now() {
      return Date.now();
    },
  },
  methods: {
    // a computed getter
    calculateBooks() {
      // `this` points to the component instance
      return this.author.books.length;
    },
    nowDate() {
      return Date.now();
    },
  },
};
</script>
<style></style>
