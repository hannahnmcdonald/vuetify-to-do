<template>
  <div class="home pa-2">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      outlined
      class="pa-3"
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
      ></v-text-field>
    <v-list
      class="pt-0"
        flat
      >
      <div
        v-for="task in tasks"
        :key="task.id"
        >
          <v-list-item 
          @click="doneTask(task.id)"
          :class="{ 'blue-grey lighten-4': task.done}"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox 
                  q:input-value="task.done"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
                >{{ task.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn 
                icon
                @click.stop="deleteTask(task.id)"
                >
                  <v-icon color="secondary lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
            
          </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>


<script>
  export default {
    name: 'Home',
  // TO DO: Create theme colors
  //   theme: {
  //   themes: {
  //     light: {
  //       primary: '#565264',
  //       secondary: '#776274',
  //       anchor: '#8c9eff',
  //     },
  //   },
  // },
    data() {
      return {
        // Set to empty string for now
        newTaskTitle: "",
        tasks: [
          {
            id: 1,
            title: 'Wake Up',
            done: false
          },
          {
            id: 2,
            title: 'Go Run',
            done: false
          },
          {
            id: 3,
            title: 'Grocery Shop',
            done: false
          },
        ]
      }
    },
    methods: {
      addTask() {
        // Create new task object
        let newTask = {
          // Date will be our unique task key
          id: Date.now(),
          title: this.newTaskTitle,
          done: false
        }
        // Push new task into task array
        this.tasks.push(newTask);
      },
      doneTask(id) {
        // .filter goes thru array looking for the task id we are looking for from the [0] item in array
        let task = this.tasks.filter(task => task.id === id)[0]
        //set to opposite
        task.done = !task.done
      },
      deleteTask(id) {
        // Recreates array with all tasks but the one we are deleting
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    }
  }
</script>

