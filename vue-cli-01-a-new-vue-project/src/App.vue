<template>
	<header>
		<h1>Me and My Friends</h1>
	</header>
	<ul>
		<friend-contact v-for="friend in friends" :key="friend.id" :friend="friend" @toggle-favorite="toggleFavoriteStatus" @delete-friend="deleteContact"></friend-contact>
	</ul>
  <friend-form @submit-form="addFriend"></friend-form>
</template>

<script>
export default {
	data() {
		return {
			friends: [
				{
					id: 1,
					name: 'Kenny Steward',
					phone: '970-555-1234',
					email: 'kstew@test.com',
          isFavorite: true
				},
				{
					id: 2,
					name: 'Matt Stine',
					phone: '970-555-1235',
					email: 'mstine@test.com',
          isFavorite: true
				}
			]
		}
	},
  methods: {
    toggleFavoriteStatus(friendId) {
      let selectedFriend = this.friends.find((item) => item.id === friendId);
      selectedFriend.isFavorite = !selectedFriend.isFavorite;
    },
    addFriend(formData) {
      formData.id = this.friends.length + 1;
      this.friends.push(formData);     
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #c3c3c3;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>