<!-- <template>
  <my-methods />

</template>
<script>
import MyMethods from "./components/MyMethods.vue";


export default {
  components: { MyMethods },
};
</script>

<style></style> -->

<!-- run with mwthod -->
<!-- <template>
  <p>{{ greeting() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "Anam",
    };
  },
  methods: {
    greeting() {
      return "Hello there " + this.username;
    },
  },
};
</script> -->

<!-- run with Paramitter -->
<!-- <template>
  <p>{{ greeting("anam", 24) }}</p>
</template>

<script>
export default {
  methods: {
    greeting: (name, age) => {
      return "Hi,I`m" + name + ". I`m " + age;
    },
  },
};
</script> -->

<!-- run with array function -->
<!-- <template>
  <p>{{ thisInArrowFunc("Alauddin") }}</p>
  <p>{{ thisInRegularFunc() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "Anam",
    };
  },

  methods: {
    thisInArrowFunc: (name) => {
      return "Help us " + name; // no 'this' binding
    },

    thisInRegularFunc() {
      return "Help us " + this.username; // global 'this'
    },
  },
};
</script> -->

<template>
  <p>{{ num }}</p>

  <button v-on:click="increment">Increase number</button>
  <button v-on:click="decrement">Decrease number</button>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    },
  },
};
</script>
