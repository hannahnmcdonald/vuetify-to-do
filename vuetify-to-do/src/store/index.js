import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    // pass state in first
    addTask(state, newTaskTitle) {
      // Create new task object
      let newTask = {
        // Date will be our unique task key
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      // Push new task into task array
      state.tasks.push(newTask);
      // // clear the field
      // this.newTaskTitle = '';
    },
  },
  actions: {
  },
  getters: {
  }
})
