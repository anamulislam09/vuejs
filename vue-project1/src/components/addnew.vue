
<script>
export default {
  data() {
    return {
      title: 'My To Do App',
      newtask : '',
      tasks: [
        { id: 1, name: 'Learn Vue JS', finished: false,edit: true, address:'Faridpur' },
        { id: 2, name: 'Build a Vue application', finished: true ,address:'Faridpur' },
        { id: 3, name: 'Write an article about Vue JS', finished: false,address:'Faridpur'  }
      ]
    }
  }
}
</script>

<template>
    <h2>Add a new task</h2>

<div>
   <input type="text"
     v-model="newTask"
     placeholder="Add a new task"
   >
</div>


<div v-if="newTask.length > 0">
   <h3>New task preview</h3>
   <p>{{ newTask }}</p>
</div>
</template>
