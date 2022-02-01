<template>
  <div class="home pa-2">
    <v-list
      class="pt-0"
        flat
      >
      <div
        v-for="task in tasks"
        :key="task.id"
        >
          <v-list-item @click="doneTask(task.id)">
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox 
                  q:input-value="task.done"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ task.title }}</v-list-item-title>
              </v-list-item-content>
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
    data() {
      return {
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
      doneTask(id) {
        console.log('id: ', id)
      }
    }
  }
</script>
