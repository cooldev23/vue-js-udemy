function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            attackValue: 0,
            healValue: 0,
            specialAttackRounds: 0,
            gameWinner: null, // special attack can only be used every three rounds
            logs: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.gameWinner = 'Game ends in a draw';
            } else if (value <= 0) {
                this.gameWinner = 'Monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.gameWinner = 'Game ends in a draw';
            } else if (value <= 0) {
                this.gameWinner = 'Player';
            }
        }
    },
    computed: {
        monsterHealthBarStyle() {
            if (this.monsterHealth <= 0) {
                return {'width': '0%'}
            }
            return {'width': this.monsterHealth + '%'}
        },
        playerHealthBarStyle() {
            if (this.playerHealth <= 0) {
                return {'width': '0%'}
            }
            return {'width': this.playerHealth + '%'}
        },
        isSpecialAttackDisabled() {
            if (this.specialAttackRounds >= 3) {
                return false;
            }
            return true;
        }
    },
    methods: {
        attackMonster() {
            this.attackValue = getRandomValue(5, 12);
            this.specialAttackRounds++;
            this.monsterHealth -= this.attackValue;
            this.addLogObject('Player', this.attackValue, 'attacks');
            this.attackPlayer();
        },
        attackPlayer() {
            this.attackValue = getRandomValue(8, 15);
            this.playerHealth -= this.attackValue;
            this.addLogObject('Monster', this.attackValue, 'attacks');
        },
        healPlayer() {
            this.healValue = getRandomValue(8, 20)
            if (this.playerHealth < 100) {
                this.playerHealth += this.healValue;
            }
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.addLogObject('Player', this.healValue, 'heals');
            this.attackPlayer();
        },
        specialAttack() {
            this.attackValue = getRandomValue(10, 25);
            this.specialAttackRounds++;
            this.monsterHealth -= this.attackValue;
            this.specialAttackRounds = 0;
            this.addLogObject('Player', this.attackValue, 'attacks');
            this.attackPlayer();
        },
        surrender() {
            this.playerHealth = 0;
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackValue = 0;
            this.healValue = 0;
            this.specialAttackRounds = 0;
            this.gameWinner = null;
            this.logs = [];
        },
        addLogObject(actionEntity, amount, actionType) {
            this.logs.unshift({
                attacker: actionEntity,
                amount: amount,
                type: actionType
            })
        }
    }
});

app.mount('#game');