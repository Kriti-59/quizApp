//Routing 
import { createRouter, createWebHistory } from "vue-router"
import Quiz from "../views/Quiz.vue"
import QuizView from "../views/QuizView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: 'quiz',
            component: Quiz
        },

        {
            path: "/quiz/:id",
            name: 'quizz',
            component: QuizView
        },

    ]


})

export default router