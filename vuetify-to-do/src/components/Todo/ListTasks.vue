<template>
    <v-list
    class="pt-0"
    flat
    >
    <task 
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
        />
    </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: {
        'task': require('@/components/Todo/Task.vue').default,
    }
});
</script>
