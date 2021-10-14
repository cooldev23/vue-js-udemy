const app = Vue.createApp({
  data() {
    return {
      keydownOutput: '',
    }
  },
  methods: {
    showAlert() {
      alert('You clicked the button!');
    },
    keydownEvent(evt) {
      this.keydownOutput = evt.target.value;
    }
  }
})

app.mount('#assignment');