<template lang="">
  <div>
    <h4>Number of Object: {{obj.nested.count}}</h4>
    <p>{{obj.arr}}</p>
    <button v-on:click="mutateDeeply">Click here</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.unshift('baz')
    }
  }
}

</script>
<style>
  
</style>