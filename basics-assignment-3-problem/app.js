const app = Vue.createApp({
    data() {
        return {
            total: 0
        }
    },
    watch: {
        total() {
            const that = this;
            setTimeout(function() {
                that.total = 0;
            }, 5000)
        }
    },
    computed: {
        totalMessage() {
            if (this.total < 37) {
                return 'Not there yet!';
            } else if (this.total === 37) {
                return 37;
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        addFive() {
            this.total += 5;
        },
        addOne() {
            this.total++;
        }
    }
});

app.mount('#assignment');