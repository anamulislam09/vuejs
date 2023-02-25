<template>
  {{ name }}
  <button @click="name = 'Karim'">Click</button>
  <button @click="setName">Name change</button>
  <!--with method -->
  <button @click="setName('Jamal')">Name change</button>
  <!-- method with paramiter -->

  <hr />
  <h1>Total : {{ count }}</h1>
  <button @click="count++">Incriment1</button>
  <button @click="count--">Decriment1</button><br />
  <button @click="count += 5">Incriment5</button>
  <button @click="count -= 5">Decriment5</button><br />
  <hr />
  <button @click="greet(even)">Greet</button>
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
    setName(x) {
      //   name = "Hussain",
      this.name = x;
    },

    greet(event) {
      alert(`Hello ${this.name} . your Marks is ${this.count} `);
    },
  },
};
</script>

<style></style>
