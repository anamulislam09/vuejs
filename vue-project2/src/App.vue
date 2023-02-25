<template lang="">
  <div>
    <h2>Hello {{name}}</h2>
    <p>Age: {{age}},Address: {{address}}</p>
    <p v-text="address"></p>
    <p>{{college}}</p>
    <div v-html="college"></div>
    <div v-bind:class="{active: ifActive,error:!ifActive}">{{address}}</div>
    <div :id="'dynamicId'">{{college}}</div> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'Anamul',
      age:25,
      address:'Polton',
      college:'<h1>Natunal University</h1>',
      ifActive:true,
    }
  }
}
</script>

<style>

.active{
  color: aqua;
}
.error{
  color: red;
}
#dynamicId{
  color: rgb(21, 51, 221);
}
#dynamicId{
  color: rgb(235, 86, 86);
}
  
</style>