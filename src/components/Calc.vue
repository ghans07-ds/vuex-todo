<template>
  <div class="container">
    <div class="calc-container">
      <div class="result-area"></div>
      <div class="btn-area">
        <table>
          <tbody>
            <tr>
              <td colspan="3">CE</td>
              <td>+</td>
            </tr>
            <tr>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>-</td>
            </tr>
            <tr>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>*</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>/</td>
            </tr>
            <tr>
              <td>.</td>
              <td>0</td>
              <td>#</td>
              <td>=</td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="clear-btn"></div>
        <div class="btn-1 btn-field"></div>
        <div class="btn-2 btn-field"></div>
        <div class="btn-3 btn-field"></div>
        <div class="btn-4 btn-field"></div>
        <div class="btn-5 btn-field"></div>
        <div class="btn-6 btn-field"></div>
        <div class="btn-7 btn-field"></div>
        <div class="btn-8 btn-field"></div>
        <div class="btn-9 btn-field"></div>
        <div class="btn-0 btn-field"></div>
        <div class="btn-add btn-field"></div>
        <div class="btn-sub btn-field"></div>
        <div class="btn-div btn-field"></div>
        <div class="btn-mul btn-field"></div>
        <div class="btn-equal btn-field"></div>
        <div class="btn-back btn-field"></div>
        <div class="btn-dot btn-field"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
      //   border-radius: 10px;
      //   margin: 8px;
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
            background-color: rgb(216, 32, 42);
            color: white;
            // transform: scale(1.2);
            // border-color: white;
          }
        }
      }

      //   .btn-1{
      //       grid-area: b1;
      //   }
      //   .btn-2{
      //       grid-area: b2;
      //   }.btn-3{
      //       grid-area: b3;
      //   }.btn-4{
      //       grid-area: b4;
      //   }.btn-5{
      //       grid-area: b5;
      //   }.btn-6{
      //       grid-area: b6;
      //   }.btn-7{
      //       grid-area: b7;
      //   }.btn-8{
      //       grid-area: b8;
      //   }.btn-9{
      //       grid-area: b9;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }.btn-0{
      //       grid-area: b0;
      //   }
    }
  }
}
</style>
