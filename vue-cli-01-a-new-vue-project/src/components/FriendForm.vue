<template>
    <form @submit.prevent>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="form.phone">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email">
        </div>
        <div>
            <label for="isFavorite">Favorite?</label>
            <input type="checkbox" id="isFavorite" v-model="proxyChecked">
        </div>
        <div>
            <button @click="submitForm">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: [
        'submit-form',
        'update:form.isFavorite'
    ],
    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                isFavorite: false
            }
        }
    },
    methods: {
        submitForm() {
            this.$emit('submit-form', this.form);
        }
    },
    computed: {
        proxyChecked: {
            get() {
                return this.form.isFavorite;
            },

            set() {
                this.form.isFavorite = !this.form.isFavorite;
            },
        }
    }
}
</script>