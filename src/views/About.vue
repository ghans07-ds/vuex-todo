<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo }}
      </li>
    </ul>
  </div>
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
