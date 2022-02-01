<template>
  <div class="home pa-2">

    <field-add-task />

    <list-tasks 
      v-if="$store.state.tasks.length"
    />

      <div
        v-for="task in $store.state.tasks"
        :key="task.id"
        >
          <v-list-item 
          @click="$store.commit('doneTask', task.id)"
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
                @click.stop="$state.commit('deleteTask', task.id)"
                >
                  <v-icon color="secondary lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
            
          </v-list-item>
        <v-divider></v-divider>
      </div>

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
    // import in components instead of above the export default- less code
    components: {
      'field-add-task': require('@/components/FieldAddTask.vue').default,
      'list-tasks': require('@/components/ListTasks.vue').default,
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
