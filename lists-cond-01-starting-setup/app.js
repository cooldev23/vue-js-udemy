const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      listItem: ''
    };
  },
  methods: {
    addGoal() {
      if (this.listItem !== '') {
        this.goals.push(this.listItem);
        this.listItem = '';
      }
    },
    removeGoal(goalIndex) {
      this.goals.splice(goalIndex, 1);
    }
  }
});

app.mount('#user-goals');
