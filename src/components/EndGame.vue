<template>
  <transition name="slide-fade">
    <div class="end-game" v-show="endGame">
      Well Done!
      <p>Points: {{points}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EndGame",
  data: function() {
    return {
      imgNumber: 0,
      tries: 0,
      answers: []
    };
  },
  props: {
    endGame: {
      default: true,
      type: Boolean
    },
    points: {
      type: Number,
      default: 0
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.end-game {
  font-family: "Titan One", cursive;
  color: #7de668;
  font-size: 7rem;
  font-weight: 500;
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
