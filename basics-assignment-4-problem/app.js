const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userStyle: '',
            isVisible: true
        }
    },
    computed: {
        userClass() {
            if (this.userInput === 'user1') {
                return 'user1';
            } else if (this.userInput === 'user2') {
                return 'user2';
            } else {
                return '';
            }
        },
        userStyleResult() {
            if (this.userStyle !== '') {
                return {'backgroundColor': this.userStyle};
            }
        }
    },
    methods: {
        toggleParagraph() {
            return this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');