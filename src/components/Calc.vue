<template>
  <div class="container">
    <div class="calc-container">
      <div class="result-area">
        <div class="history-result">
          <p>{{ equation }}</p>
        </div>
        <div class="current-result">
          <p>{{ Result }}</p>
        </div>
      </div>
      <div class="btn-area">
        <table>
          <tbody>
            <tr>
              <td colspan="3" @click="enterNumber('CE')">CE</td>
              <td @click="enterNumber('+')">+</td>
            </tr>
            <tr>
              <td @click="enterNumber('9')">9</td>
              <td @click="enterNumber('8')">8</td>
              <td @click="enterNumber('7')">7</td>
              <td @click="enterNumber('-')">-</td>
            </tr>
            <tr>
              <td @click="enterNumber('6')">6</td>
              <td @click="enterNumber('5')">5</td>
              <td @click="enterNumber('4')">4</td>
              <td @click="enterNumber('*')">*</td>
            </tr>
            <tr>
              <td @click="enterNumber('3')">3</td>
              <td @click="enterNumber('2')">2</td>
              <td @click="enterNumber('1')">1</td>
              <td @click="enterNumber('/')">/</td>
            </tr>
            <tr>
              <td @click="enterNumber('.')">.</td>
              <td @click="enterNumber('0')">0</td>
              <td @click="popNumber()">#</td>
              <td @click="getAnswer()">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Result: "0",
      stack: [],
      answer: 0,
      equation: 0,
    };
  },
  methods: {
    enterNumber(n) {
      let stackLength = this.stack.length;
      console.log(this.answer);

      // if array is empty
      if (stackLength === 0) {
        if (["0", "*", "/", "+", "-", "#"].includes(n)) {
          this.Result = "0";
        } else if (Number.isInteger(Number(n))) {
          this.stack.push(n);
          this.answer = Number(this.stack[0]);
        }
      } else if (stackLength === 1) {
        if (Number.isInteger(Number(n))) {
          let tempString = this.stack.pop();
          this.stack.push(String(String(tempString) + n));
          this.answer = Number(this.stack[stackLength - 1]);
        } else if (["*", "/", "+", "-"].includes(n)) {
          this.stack.push(n);
        } else if (["CE", "#"].includes(n)) {
          this.stack.pop();
          this.Result = "0";
        }
      } else if (stackLength === 2) {
        let tempString = this.stack[stackLength - 1];
        // console.log(tempString);
        if (
          Number.isInteger(Number(n)) &&
          ["*", "/", "+", "-"].includes(tempString)
        ) {
          this.stack.push(n);
          if (tempString === "*") {
            this.answer = this.answer * Number(n);
          } else if (tempString === "+") {
            this.answer = this.answer + Number(n);
          } else if (tempString === "/") {
            this.answer = this.answer / Number(n);
          } else if (tempString === "-") {
            this.answer = this.answer - Number(n);
          }
        } else if (n === "CE") {
          this.Result = "0";
        }
      } else {
        let tempString = this.stack[stackLength - 1];
        if (Number.isInteger(Number(tempString))) {
          if (Number.isInteger(Number(n))) {
            let Str = this.stack.pop();
            this.stack.push(String(String(Str) + n));
          } else {
            this.stack.push(n);
            if (tempString === "*") {
              this.answer = this.answer * Number(n);
            } else if (tempString === "+") {
              this.answer = this.answer + Number(n);
            } else if (tempString === "/") {
              this.answer = this.answer / Number(n);
            } else if (tempString === "-") {
              this.answer = this.answer - Number(n);
            }
          }
        } else {
          if (Number.isInteger(Number(n))) {
            this.stack.push(n);
          }
        }
      }
    },

    popNumber() {
      this.stack.pop();
    },
    changeNumber() {
      if (this.stack.length === 0) {
        this.Result = "0";
      } else {
        let num;
        this.Result = "";
        for (num = 0; num < this.stack.length; num++) {
          this.Result += String(this.stack[num]);
        }
      }
    },
    getAnswer() {
      this.equation = this.Result;
      this.Result = this.answer;
    },
  },
  watch: {
    stack: {
      deep: true,
      handler() {
        this.changeNumber();
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-color: rgb(216, 32, 42);
  //   background: url("../assets/snow.jpg") no-repeat;
  //   background-size: cover;
  //   background: linear-gradient(to right, rgb(116, 199, 192), rgb(34, 168, 185));
  padding: 10vh 25vw;
  .calc-container {
    height: 80vh;
    width: 35vw;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(40px);
    border-radius: 5px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      "ra"
      "ba";
    .result-area {
      grid-area: ra;
      border: 5px solid rgb(216, 32, 42);
      display: flex;
      flex-direction: column;

      .history-result {
        height: 50%;
        p {
          font-size: 1.5rem;
          text-align: end;
          line-height: 9.2vh;
        }
      }
      .current-result {
        height: 50%;
        p {
          font-size: 2.5rem;
          text-align: end;
          line-height: 9.2vh;
          // border: 1px solid black;
          padding-right: 1vw;
        }
      }
    }
    .btn-area {
      grid-area: ba;
      //   margin: 8px;
      display: grid;

      table {
        height: 100%;
        border-collapse: collapse;

        tr {
          td {
            border: 5px solid rgb(216, 32, 42);
            text-align: center;
            padding: auto;
            font-size: 3rem;
            color: rgb(216, 32, 42);
            font-weight: bolder;
            cursor: pointer;
          }
          td:hover {
            // background-color: rgb(216, 32, 42);
            color: white;
            // transform: scale(1.2);
            // border-color: white;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .container {
    padding: 10vh 5vw;
    .calc-container {
      height: 80vh;
      width: 90vw;
    }
  }
}
</style>
