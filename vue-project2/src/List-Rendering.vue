<template>
  <h1>Using v-for</h1>
  <hr />
  <ul>
    <li style="list-style: none" v-for="(fruit, index) in fruits" :key="index">
      {{ index }}. {{ fruit }}
    </li>
  </ul>
  <hr />

  <ul>
    <li style="list-style: none" v-fore="(fruit, index) in fruits" :key="index">
      {{ index }}. {{ fruit }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      fruits: ["Mango", "Orange", "Apple", "Lici"],
    };
  },
};
</script>
<style></style>
