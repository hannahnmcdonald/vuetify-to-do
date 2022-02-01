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
    ],
    snackbar: {
      show: false
    }
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
    doneTask(state, id) {
      // .filter goes thru array looking for the task id we are looking for from the [0] item in array
      let task = state.tasks.filter(task => task.id === id)[0]
      //set to opposite
      task.done = !task.done
    },
    deleteTask(state, id) {
      // Recreates array with all tasks but the one we are deleting
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state) {
      state.snackbar.show = true
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle ) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar')
    }
  },
  getters: {
  }
})
