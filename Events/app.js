const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num
    },
    reduce() {
      this.counter -= 1
    }
  }
});

app.mount('#events');
