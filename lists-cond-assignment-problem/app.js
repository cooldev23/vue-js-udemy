const app = Vue.createApp({
    data() {
      return { 
        tasks: [],
        taskItem: '',
        isListShown: true
      };
    },
    computed: {
        buttonText() {
            return this.isListShown ? 'Hide' : 'Show';
        }
    },
    methods: {
      addTask() {
        if (this.taskItem !== '') {
          this.tasks.push(this.taskItem);
          this.taskItem = '';
        }
      },
      removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
      },
      toggleListVisibility() {
        this.isListShown = !this.isListShown;
      }
    }
  });
  
  app.mount('#assignment');