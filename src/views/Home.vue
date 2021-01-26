<template>
  <div class="home">
    <TodoNew></TodoNew>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoNew from "../components/ToDoNew";
import TodoList from "../components/ToDoList";

export default {
  components: {
    TodoNew,
    TodoList,
  },
};
</script>
