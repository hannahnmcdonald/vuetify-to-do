<template>
  <div class="home pa-2">

    <field-add-task />

    <list-tasks 
      v-if="$store.state.tasks.length"
    />

    <no-tasks 
      v-else
    />

  </div>
</template>


<script>
  export default {
    name: 'Home',
    // import in components instead of above the export default- less code
    components: {
      'field-add-task': require('@/components/FieldAddTask.vue').default,
      'list-tasks': require('@/components/ListTasks.vue').default,
      'no-tasks': require('@/components/NoTasks.vue').default,
    }
  }
</script>

