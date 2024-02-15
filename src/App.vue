<template>

  <div class = "container"> 
    <header>
      <h1> Quizzes</h1>
      <input type="text" placeholder="Search for quiz..">
    </header>
    <div class="card-container">
  <div class="card">
    <img src="..\src\assets\geography.webp" alt="">
    <div class="card-text">
      <h2>Geography</h2>
    </div>
  </div>

  <div class="card">
    <img src="..\src\assets\mathematics.jpg" alt="">
    <div class="card-text">
      <h2>Mathematics</h2>
    </div>
  </div>

  <div class="card">
    <img src="..\src\assets\chemistry.jpg" alt="">
    <div class="card-text">
      <h2>Chemistry</h2>
    </div>
  </div>

  <div class="card">
    <img src="..\src\assets\history.jpg" alt="">
    <div class="card-text">
      <h2>World History</h2>
    </div>
  </div>

  <div class="card">
    <img src="..\src\assets\computer.jpg" alt="">
    <div class="card-text">
      <h2>Computer Science</h2>
    </div>
  </div>

  <div class="card">
    <img src="..\src\assets\biology.jpg" alt="">
    <div class="card-text">
      <h2>Biology</h2>
    </div>
  </div>

</div>

  </div>
</template>


<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header{
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1{
  font-weight: bold;
  margin-right: 40px;
  font-size: xx-large;
}

header input{
  border: none;
  background-color: lightgray;
  padding: 15px;
  border-radius: 5px;

}

.card-container {
  display: flex;
  flex-wrap: wrap;
}


.card{
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba (0, 0, 0, 1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  margin: none;
}
.card .card text{
  padding: 0 5px;
}

.card .card-text h2{
  font-weight: bold;
}

</style>