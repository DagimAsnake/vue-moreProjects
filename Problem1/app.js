const app = Vue.createApp({
    data() {
        return {
            name: "Dagim",
            age: 23,
            imageLink: "https://unsplash.com/photos/ZRns2R5azu0"
        }
    },
    methods: {
        ageFive() {
            return this.age + 5
        },
        favouriteNum() {
            return Math.random()
        }
    }
})

app.mount('#assignment')