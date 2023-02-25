<template>
  <div class="col-sm-8">
    <h2>Shopping Cart</h2>
    <!-- <button @click="$store.commit('incriment', 5)">Click Here</button> -->
    <button @click="incrementCounter">Increment</button>
    <p>{{ $store.state.counter }}</p>
    <p>Counter: {{ $store.getters.getCounter }}</p>
    <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
  </div>
</template>
<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.dispatch("increment");
    },
  },
};
</script>
<style></style>
