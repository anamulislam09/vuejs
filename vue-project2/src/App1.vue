<template lang="">
  <div>
    <h1 v-if="score == 10">Excellent</h1>
    <h1 v-else-if="score >= 8">Good</h1>
    <h1 v-else>Average</h1>
    <hr />
    <ul v-if="stutus == 'developer'">
      <li>{{ name }}</li>
      <li>{{ age }}</li>
      <li>{{ address }}</li>
    </ul>
    <hr />

    {{ ok ? "YES" : "NO" }}
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      score: 10,

      name: "Anam",
      age: 25,
      address: "Faridpur",
      stutus: "developer",

      ok: false,
    };
  },
};
</script>
<style lang=""></style>
