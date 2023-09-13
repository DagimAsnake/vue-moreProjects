const app = Vue.createApp({
    data() {
      return {
        tasks: [],
        enteredTask: '',
        visible: true,
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTask)
      },
      isVisible() {
        this.visible = !this.visible
      }
    }
  });
  
  app.mount('#assignment');