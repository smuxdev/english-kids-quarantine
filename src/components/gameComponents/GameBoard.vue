<template>
  <transition name="slide-fade">
    <div class="game-board" v-show="inGame">
      <span>
        <img :src="`../../gameImg/draw-${imgNumber}.jpg`" alt />
      </span>
      <span class="word-list">
        <ul>
          <li
            v-for="answer in answers"
            :key="answer.imgNumber"
            v-on:click="checkAnswer"
            v-bind:value="answer.imgNumber"
            :class="{'incorrect': answer.incorrect}"
          >{{answer.answer}}</li>
        </ul>
      </span>
      <transition name="fade" mode="out-in">
        <span class="tip" v-show="needTip">
          <i class="fas fa-ambulance" v-on:click="tipMe"></i>
        </span>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GameBoard",
  data: function() {
    return {
      imgNumber: 0,
      answers: [],
      tipUsed: false
    };
  },
  props: {
    inGame: Boolean,
    lives: {
      default: 3,
      type: Number
    },
    points: {
      default: 0,
      type: Number
    },
    tries: {
      default: 0,
      type: Number
    }
  },
  watch: {
    inGame: function(val) {
      // Game initialization
      if (val) {
        this.answers = [
          { imgNumber: 1, answer: "Air", incorrect: false, used: false },
          { imgNumber: 2, answer: "Sunlight", incorrect: false, used: false },
          { imgNumber: 3, answer: "Soil", incorrect: false, used: false },
          { imgNumber: 4, answer: "Root", incorrect: false, used: false },
          { imgNumber: 5, answer: "Stem", incorrect: false, used: false },
          { imgNumber: 6, answer: "Leaves", incorrect: false, used: false },
          { imgNumber: 7, answer: "Seeds", incorrect: false, used: false }
        ];
        /*
          { imgNumber: 1, answer: "Elephant", incorrect: false, used: false },
          { imgNumber: 2, answer: "Whale", incorrect: false, used: false },
          { imgNumber: 3, answer: "Jellyfish", incorrect: false, used: false },
          { imgNumber: 4, answer: "Penguin", incorrect: false, used: false },
          { imgNumber: 5, answer: "Bee", incorrect: false, used: false },
          { imgNumber: 6, answer: "Crocodile", incorrect: false, used: false },
          { imgNumber: 7, answer: "Owl", incorrect: false, used: false }
          */

        this.answers = this.shuffle(this.answers);
        this.imgNumber = Math.floor(Math.random() * 7) + 1; // Select a random answer
      }
    }
  },
  computed: {
    needTip: function() {
      return this.lives < 3 && !this.tipUsed;
    }
  },
  methods: {
    shuffle: function(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    checkAnswer(evt) {
      function isUsed(answerNum) {
        for (let i = 0; i < this.answers.length; i++) {
          if (this.answers[i].imgNumber === answerNum && this.answers[i].used) {
            return true;
          }
        }

        return false;
      }

      function allUsed() {
        for (let i = 0; i < this.answers.length; i++) {
          if (!this.answers[i].used) {
            return false;
          }
        }
        return true;
      }

      // Desorder words and select a new answer
      if (!event.target.className.includes("incorrect")) {
        this.$root.$emit("addTryEvent"); // Sum one try
        this.tries += 1; // Bad practice!
        if (evt.target.value !== this.imgNumber) {
          // Mark answer like failed
          this.answers.forEach(element => {
            if (element.imgNumber === evt.target.value) {
              element.incorrect = true;
            }
          });
          this.$root.$emit("loseLiveEvent");
        } else {
          // Well done!
          // Points calculus
          let points = 0;
          if (this.tries <= 1) {
            points = 10;
          } else if (this.tries === 2) {
            points = 5;
          } else if (this.tries === 3) {
            points = 2;
          }

          this.$root.$emit("addPointsEvent", points);
          this.answers.forEach(element => {
            if (element.imgNumber === evt.target.value) {
              element.used = true;
            }
          });
          this.$root.$emit("resetLivesEvent");
          this.$root.$emit("resetTriesEvent");

          // New game config
          if (!allUsed.call(this)) {
            this.tipUsed = false;
            this.answers = this.shuffle(this.answers);

            this.imgNumber = Math.floor(Math.random() * 7) + 1; // Select a random answer
            while (isUsed.call(this, this.imgNumber)) {
              this.imgNumber = Math.floor(Math.random() * 7) + 1;
            }

            this.answers.forEach(element => {
              element.incorrect = false;
            });
          } else {
            // End game!! Congrats!
            this.$root.$emit("endGameEvent");
          }
        }
      }
    },
    tipMe() {
      function isFailed(answerNum) {
        for (let i = 0; i < this.answers.length; i++) {
          if (
            this.answers[i].imgNumber === answerNum &&
            this.answers[i].incorrect
          ) {
            return true;
          }
        }

        return false;
      }
      function markAsFailed(goodAnswer, times) {
        for (let i = 0; i < times; i++) {
          let answerToMark = Math.floor(Math.random() * 7) + 1;
          while (
            answerToMark === goodAnswer ||
            isFailed.call(this, answerToMark)
          ) {
            answerToMark = Math.floor(Math.random() * 7) + 1;
          }
          this.answers.forEach(element => {
            if (element.imgNumber == answerToMark) {
              element.incorrect = true;
            }
          });
        }
      }

      markAsFailed.call(this, this.imgNumber, 2);
      this.tipUsed = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-board {
  color: rgb(73, 86, 99);
  font-family: "Titan One";
  font-size: 2rem;
  text-align: left;
  display: flex;
}
.game-board img {
  width: 30rem;
}
img {
  border: none;
  box-shadow: 0 0 10px black inset;
}
.word-list ul {
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.word-list li:not(.incorrect):hover {
  transform: scale(1.2);
  transform: translateX(0.2rem);
  opacity: 0.9;
  color: rgb(134, 74, 74);
}
.word-list li:active,
.tip:active:not(.incorrect) {
  transform: scale(0.9);
  opacity: 0.5;
}

.word-list li.incorrect {
  text-decoration: line-through;
  color: #d7725a;
  cursor: default;
}
.word-list li.correct {
  color: #75e659;
  cursor: default;
}
.tip:hover {
  opacity: 0.8;
}
.tip {
  position: absolute;
  right: 2rem;
  bottom: 4rem;
  border: 4px solid #d7725a;
  border-radius: 1.5rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.75);
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
