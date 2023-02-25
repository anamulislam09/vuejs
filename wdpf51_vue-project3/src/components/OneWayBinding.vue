<template>
  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <h1 v-html="name"></h1>

  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <h1 v-text="name"></h1>

  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <h1 v-pre>Example: {{ name }}</h1>

  <p>The resulting output will be the value of the data property.</p>
  <p>Example: {{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "<i>John Doe<i>",
    };
  },
};
</script>
