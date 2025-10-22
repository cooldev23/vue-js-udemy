<template>
    <li>
        <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite(friend.id)">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        friend: {
            type: Object,
            required: true
        }
    },
    // emits: [],
    emits: {
        'toggle-favorite': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('Id not supplied');
                return false;
            }
        }
    },
    data() {
        return {
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite($event) {
            this.$emit('toggle-favorite', $event);
        }
    }
}
</script>