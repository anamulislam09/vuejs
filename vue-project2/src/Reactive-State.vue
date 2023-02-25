<template lang="">
  <div>
    {{count}}
    <button v-on:click="increment">Click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
     console.log(this.count)
  }
}
</script>
<style>
  
</style>