const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course VUE",
            courseGoalB: "Start the course VUE",
            vueLink: 'https://google.com'
        }
    },
    methods: {
        outputGoal() {
            if(Math.random() < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})

app.mount('#user-goal')