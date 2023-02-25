<template>
  <button @click="warn('Form cant be Submitted yet', $event)">Submit</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Anamul",
      count: 0,
    };
  },
  methods: {
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }

      alert(message);
    },
  },
};
</script>

<style></style>
