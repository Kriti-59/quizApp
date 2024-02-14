<template>

  <div class = "container"> 
  <header>
    <h1> Quizzes</h1>
    <input type="text" placeholder="Search for quiz..">
     </header>
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
  background-color: hsla(120, 100%, 25%, 0.3);
  padding: 15px;
  border-radius: 5px;

}

</style>