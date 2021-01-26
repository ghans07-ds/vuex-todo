<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo }}
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.todoCount;
    },
  },
};
</script>
