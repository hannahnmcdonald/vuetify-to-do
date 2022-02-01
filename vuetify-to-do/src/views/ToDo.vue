<template>
  <div class="home pa-2">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="$store.commit('addTask', newTaskTitle)"
      @keyup.enter="$store.commit('addTask', newTaskTitle)"
      outlined
      class="pa-3"
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
      ></v-text-field>
    <v-list
      v-if="$store.state.tasks.length"
      class="pt-0"
        flat
      >
      <div
        v-for="task in $store.state.tasks"
        :key="task.id"
        >
          <v-list-item 
          @click="doneTask(task.id)"
          :class="{ 'grey lighten-4': task.done}"
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
    <div
    v-else
    class="no-tasks"
    >
    <v-icon
      size="100"
      color="secondary"

    >
      mdi-checkbox-marked-circle-outline
    </v-icon>
    <div
    class="text-h5 secondary--text"
    >
    No Tasks
    </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Home',
    data() {
      return {
        newTaskTitle: "",
        tasks: []
      }
    },
    methods: {
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

<style lang="sass">
  .no-tasks 
    position: absolute
    left: 50%
    top:50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>
