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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    // import in components instead of above the export default- less code
    components: {
      'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
      'no-tasks': require('@/components/Todo/NoTasks.vue').default,
    }
  });
</script>

