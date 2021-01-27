<template>
  <div class="container" :class="{ display: show }">
    <ul>
      <li v-for="item in history" :key="item.id">{{ item.answerHistory }}</li>
    </ul>
  </div>
  <i class="fa fa-history" @click="showHistory"></i>
</template>
<script>
export default {
  name: "CalcHistory",
  data() {
    return {
      show: true,
    };
  },
  computed: {
    history() {
      return this.$store.getters.getHistory;
    },
  },
  methods: {
    showHistory() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 35%;
  transform: translate(-50%, -50%);
  height: 60%;
  background-color: gray;
  opacity: 0.7;

  ul {
    // border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    li {
      height: auto;
      text-align: center;
      padding: 5px;
      font-size: 3rem;
      font-weight: bolder;
      list-style-type: none;
      //   border: 1px solid black;
    }
  }
}
.display {
  z-index: -1;
}
i.fa-history {
  position: absolute;
  font-size: 3rem;
  top: 14%;
  left: 35%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: rgb(216, 32, 42);
}
@media (max-width: 600px) {
  .container {
    width: 90%;
  }
  i.fa-history {
    top: 14%;
    left: 17%;
  }
}
</style>
