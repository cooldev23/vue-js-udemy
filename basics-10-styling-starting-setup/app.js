const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        boxSelected(boxLetter) {
            if (boxLetter === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (boxLetter === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (boxLetter === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');