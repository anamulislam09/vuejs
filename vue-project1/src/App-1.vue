
<template>

<h2>Add a new task</h2>
<h3>You have {{ allTasks }} {{ allTasks > 1 ? 'tasks' : 'task' }} at the moment</h3>

<div>
   <input type="text"
     v-model="newTask"
     placeholder="Add a new task"
   >
   <button type="text" @click="addTask" value="addNew">Add new</button>
</div>

<div v-if="newTask.length > 0">
   <h3>New task preview</h3>
   <p>{{ newTask }}</p>
</div>


<br>
<hr>


  <h1>{{ title }}</h1>
  <ul>
    <li v-for="(task, index) in latest" :key="task.id">
        {{ task.id }}. {{ task.name }}

        <div v-if="task.finished">
            <button>Delete task</button>
        </div>
        <div v-else-if="task.edit">
            <button>Edit task</button>
        </div>
        <div v-else>
            <p>No button</p>
        </div>
    </li>
</ul>



</template>

<script>
export default {

  data() {
    return {
      title: 'My To Do App',
      newTask: '',
      tasks: [
        { id: 1, name: 'Learn Vue JS', finished: false,edit: true },
        { id: 2, name: 'Build a Vue application', finished: true  },
        { id: 3, name: 'Write an article about Vue JS', finished: false  }
      ]
    }
  },
  methods: {
  addTask(){
    if(this.newTask.length<1) return;
    this.tasks.push({
      id:this.tasks.length+1,
      name:this.newTask,
      finished:false,
    })
    this.newTask = "";
  }
},

computed: {
    allTasks() {
        return this.tasks.length
    },
    latest() {
        return [...this.tasks].reverse()
    }
  }

}

</script>

