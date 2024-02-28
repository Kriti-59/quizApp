<script setup>

import q from "../data/quizzes.json";
import {ref, watch} from "vue";
import Card from "../components/Card.vue"


const search = ref("")
const quizzes = ref(q)

watch(search, () => {
  quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>

  <div> 
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" placeholder="Search for quiz...">
    </header>
    <div class="card-container">
      <Card v-for= "quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
    </div>

</div>
</template>


<style scoped>

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


</style>