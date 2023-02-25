<template>
  <div>{{ fullName }}</div>
  <button v-on:click="fullName('Anamul Islam')">Click</button>
  {{ fullName.set }}
</template>
<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
</script>
<style></style>
