<template>
  <div>
    <CalcuLater></CalcuLater>
    <CalcHistory></CalcHistory>
  </div>
</template>

<script>
import CalcuLater from "./components/Calc.vue";
import CalcHistory from "./components/CalcHistory.vue";
export default {
  components: {
    CalcuLater,
    CalcHistory,
  },
};
</script>
<style lang="scss"></style>
