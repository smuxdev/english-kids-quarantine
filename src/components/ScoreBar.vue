<template>
  <div class="score-bar">
    <transition name="fade" mode="out-in">
      <div class="lives" v-show="inGame">
        <i v-bind:class="[(lives >= 3)?'fas': 'far', 'fa-star']"></i>
        <i v-bind:class="[(lives >= 2)?'fas': 'far', 'fa-star']"></i>
        <i v-bind:class="[(lives >= 1)?'fas': 'far', 'fa-star']"></i>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="start-button" v-show="!inGame">
        <button v-on:click="startGame">Start !</button>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="points" v-show="inGame">
        Points:
        <span>{{points}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ScoreBar",
  data: function() {
    return {};
  },
  props: {
    inGame: {
      default: false,
      type: Boolean
    },
    lives: {
      default: 3,
      type: Number
    },
    points: {
      default: 0,
      type: Number
    }
  },
  methods: {
    startGame() {
      this.$root.$emit("gameStartEvent");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-bar {
  min-height: 3rem;
}
.lives {
  font-size: 1.5rem;
  color: rgb(255, 217, 0);
  float: left;
  margin-left: 0.5rem;
}
.start-button {
  display: inline-block;
  position: absolute;
  right: 45%;
}
.start-button button {
  font-family: "Titan One", cursive;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.5rem;
  color: whitesmoke;
  background-color: rgb(55, 194, 55);
  border: 1px solid rgb(214, 224, 214);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.75);
}
.start-button button:hover {
  transform: scale(1.1);
}
.start-button button:active {
  transform: scale(0.9);
}
.points {
  font-family: "Titan One", cursive;
  float: right;
  margin-right: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
}
.points span {
  color: #d7725a;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
