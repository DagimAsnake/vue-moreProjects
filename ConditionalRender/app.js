const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
    },
    removeGoal(inx) {
      this.goals.splice(inx, 1)
    }
  }
});

app.mount('#user-goals');
