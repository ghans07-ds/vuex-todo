<template>
  <div class="circle-one"></div>
  <div class="circle-two"></div>
  <div class="container">
    <div class="calc-container">
      <div class="result-area">
        <div class="history-result">
          <p>{{ mathEquationHistory }}</p>
        </div>
        <div class="current-result">
          <p>{{ mathEquation }}</p>
        </div>
      </div>
      <div class="btn-area">
        <table>
          <tbody>
            <tr>
              <td colspan="3" @click="clearResultConsole()">C</td>
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
              <td colspan="2" @click="enterNumber('0')">0</td>
              <td @click="removeLastDigit()">
                <i class="fa fa-angle-left"></i>
              </td>
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
      mathEquation: "0",
      mathEquationHistory: "0",
      stack: [],
      answer: 0,
      id: 0,
      answerHistory: "",
    };
  },
  methods: {
    enterNumber(n) {
      let stackLength = this.stack.length;
      // if stack is empty
      if (stackLength === 0) {
        if (["0", "*", "/", "+", "-", "#"].includes(n)) {
          this.answer = 0;
        } else if (Number.isInteger(Number(n))) {
          this.stack.push(n);
          this.answer = Number(this.stack[0]);
        }
        // if stack lenght is 1
      } else if (stackLength === 1) {
        if (Number.isInteger(Number(n))) {
          let tempString = this.stack.pop();
          this.stack.push(String(String(tempString) + n));
          this.answer = Number(this.stack[stackLength - 1]);
        } else if (["*", "/", "+", "-"].includes(n)) {
          this.stack.push(n);
        }
        // if stack lenght is 2
      } else if (stackLength === 2) {
        let tempString = this.stack[stackLength - 1];
        if (
          Number.isInteger(Number(n)) &&
          ["*", "/", "+", "-"].includes(tempString)
        ) {
          this.stack.push(n);
          // performing mathematical operation
          this.doCalculation(tempString, n);
        }
        // if stack lenght is >2
      } else {
        let tempString = this.stack[stackLength - 1];
        if (Number.isInteger(Number(tempString))) {
          if (Number.isInteger(Number(n))) {
            let Str = this.stack.pop();
            this.stack.push(String(String(Str) + n));
          } else {
            this.stack.push(n);
          }
        } else {
          if (Number.isInteger(Number(n))) {
            this.stack.push(n);
            // performing mathematical operation
            this.doCalculation(tempString, n);
          }
        }
      }
    },
    doCalculation(tempString, n) {
      if (tempString === "*") {
        this.answer = this.answer * Number(n);
      } else if (tempString === "+") {
        this.answer = this.answer + Number(n);
      } else if (tempString === "/") {
        this.answer = this.answer / Number(n);
      } else if (tempString === "-") {
        this.answer = this.answer - Number(n);
      }
    },
    removeLastDigit() {
      this.stack.pop();
    },
    updateAnswerConsole() {
      if (this.stack.length === 0) {
        this.mathEquation = "0";
      } else {
        let num;
        this.mathEquation = "";
        for (num = 0; num < this.stack.length; num++) {
          this.mathEquation += String(this.stack[num]);
        }
      }
    },
    getAnswer() {
      this.answerHistory =
        String(this.mathEquation) + " = " + String(this.answer);
      const { id, answerHistory } = this;
      this.$store.commit("addHistory", { id, answerHistory });
      this.id++;
      this.mathEquationHistory = this.mathEquation;
      this.mathEquation = this.answer;
      this.stack = [];
      this.stack.push(this.answer);
    },
    clearResultConsole() {
      this.answer = "0";
      this.stack = [];
    },
  },
  watch: {
    // update the console result when stack is update
    stack: {
      deep: true,
      handler() {
        this.updateAnswerConsole();
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/_main.scss";
.circle-one {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff, #da00ff);
  clip-path: circle(20% at 70% 90%);
}
.circle-two {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#e91e63, #ffc107);
  clip-path: circle(22% at 30% 20%);
}
.container {
  background-color: #091921;
  padding: 10vh 25vw;
  z-index: 1;

  .calc-container {
    height: 80vh;
    width: 35vw;
    margin: 0 auto;
    z-index: 30;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      "ra"
      "ba";
    .result-area {
      grid-area: ra;
      // border: 5px solid $primary-color;
      display: flex;
      flex-direction: column;
      color: white;
      .history-result {
        height: 50%;
        p {
          font-size: 2.5rem;
          text-align: end;
          line-height: 9.2vh;
        }
      }
      .current-result {
        height: 50%;
        p {
          font-size: 5rem;
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
            border: 1px solid rgba(255, 255, 255, 0.05);
            text-align: center;
            padding: auto;
            font-size: 4rem;
            color: white;
            font-weight: bolder;
            cursor: pointer;

            i.fa-history {
              font-size: 3rem;
              cursor: pointer;
              color: white;
            }
          }
          td:hover {
            background-color: rgba(255, 255, 255, 0.05);
            transition: 0%;
          }
          td:active {
            background: #14ff47;
            color: #192f00;
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
      .result-area {
        .history-result p {
          font-size: 1.5rem;
        }
        .current-result p {
          font-size: 3rem;
        }
      }
      .btn-area {
        table {
          tr {
            td {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>
