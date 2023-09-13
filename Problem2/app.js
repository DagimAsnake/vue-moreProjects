const app = Vue.createApp({
    data() {
        return {
            value1: '',
            value2: ''
        }
    },
    methods: {
        showAlert() {
            alert('THIS IS THE alert')
        },
        outputValue1(event) {
            this.value1 = event.target.value;
        },
        outputValue2(event) {
            this.value2 = event.target.value;
        }
    }
})

app.mount('#assignment')