<template>
  <div>
    <h1>USing v-if</h1>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <hr />
    <h1>Using v-show</h1>
    <div v-show="type === 'A'">A</div>
    <div v-show="type === 'B'">B</div>
    <div v-show="type === 'C'">C</div>
    <!-- <div v-show>Not A/B/C</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "B",
    };
  },
};
</script>
<style></style>
