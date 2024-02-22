<script setup>

import q from "./data/quizzes.json";

import {ref} from "vue"


const quizzes = ref(q)

</script>


<template>

  <div class = "container"> 
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search for quiz..">
    </header>
    <div class="card-container">
    <div v-for = "quiz in quizzes" :key = "quiz.id" class="card">
      <img :src="quiz.img" alt="">
      <div class="card-text">
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions </p>
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