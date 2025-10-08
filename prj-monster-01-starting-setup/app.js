function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            specialAttackRounds: 0 // special attack can only be used every three rounds
        }
    },
    computed: {
        monsterHealthBarStyle() {
            return {'width': this.monsterHealth + '%'}
        },
        playerHealthBarStyle() {
            return {'width': this.playerHealth + '%'}
        },
        isSpecialAttackDisabled() {
            return this.specialAttackRounds % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.specialAttackRounds++;
            this.monsterHealth -= getRandomValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
        healPlayer() {
            if (this.playerHealth < 100) {
                this.playerHealth += getRandomValue(8, 20);
            }
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
        },
        specialAttack() {
            this.specialAttackRounds++;
            this.monsterHealth -= getRandomValue(10, 25);
            this.attackPlayer();
        }
    }
});

app.mount('#game');