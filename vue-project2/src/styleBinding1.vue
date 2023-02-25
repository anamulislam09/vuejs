<script>
export default {
  data() {
    return {
      ifActive: true,
    };
  },
};
</script>

<template>
  <button v-on:click="ifActive = !ifActive">Click to Toggle</button>

  <h1 :class="{ active: ifActive, error: !ifActive }">Change Color</h1>
</template>

<style>
.active {
  color: green;
}
.error {
  color: red;
}
</style>
