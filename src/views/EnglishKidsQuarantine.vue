<template>
  <div class="english-kids-quarantine">
    <GameTitle />

    <div class="custom-block tip">
      <p class="custom-block-title">INSTRUCTIONS</p>
      <p>
        <b>Find</b> the correct word.
        <b>Look</b> closely at the drawing and
        <b>find</b> the word in English.
      </p>
    </div>

    <ScoreBar :inGame="inGame" :points="points" :lives="lives" />
    <GameBoard :inGame="inGame" :points="points" :lives="lives" :tries="tries" />
    <GameOver :gameOver="gameOver" :points="points" />
    <EndGame :endGame="endGame" :points="points" />

    <footer class="footer">
      All images from: http://www.rawpixel.com
      <span class="credits">
        By Samuel González Izquierdo. 2020
        <a
          title="Twitter"
          href="http://www.twitter.com/babytruckdriver"
          class="fab fa-twitter-square"
          target="_blank"
        ></a>
        <a
          title="GitHub"
          href="https://github.com/babytruckdriver/"
          class="fab fa-github-alt"
          target="_blank"
        ></a>
      </span>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import GameTitle from "@/components/gameComponents/GameTitle.vue";
import ScoreBar from "@/components/gameComponents/ScoreBar.vue";
import GameBoard from "@/components/gameComponents/GameBoard.vue";
import GameOver from "@/components/gameComponents/GameOver.vue";
import EndGame from "@/components/gameComponents/EndGame.vue";

export default {
  name: "EnglishKidsQuarantine",
  components: {
    GameTitle,
    ScoreBar,
    GameBoard,
    GameOver,
    EndGame
  },
  data: function() {
    return {
      inGame: false,
      gameOver: false,
      endGame: false,
      lives: 3,
      points: 0,
      tries: 0
    };
  },
  mounted() {
    this.$root.$on("gameStartEvent", () => {
      this.lives = 3;
      this.points = 0;
      this.tries = 0;
      this.gameOver = false;
      this.endGame = false;
      setTimeout(() => {
        this.inGame = true;
      }, 400);
    });
    this.$root.$on("addPointsEvent", points => {
      this.points += points;
    });
    this.$root.$on("resetLivesEvent", () => {
      this.lives = 3;
    });
    this.$root.$on("resetTriesEvent", () => {
      this.tries = 0;
    });
    this.$root.$on("addTryEvent", () => {
      this.tries += 1;
    });
    this.$root.$on("endGameEvent", () => {
      this.inGame = false;
      setTimeout(() => {
        this.endGame = true;
      }, 400);
    });
    this.$root.$on("loseLiveEvent", () => {
      this.lives -= 1;
      // Ends Game?
      if (this.lives <= 0) {
        this.inGame = false;
        setTimeout(() => {
          this.gameOver = true;
        }, 400);
      }
    });
  }
};
</script>

<style scoped>
.english-kids-quarantine {
}
a {
  text-decoration: none;
  padding-left: 0.5rem;
}
.english-kids-quarantine,
a {
  color: #4b6988;
}
.footer {
  position: fixed;
  padding: 0.5rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f3f5f7;
  text-align: left;
  font-size: 0.8rem;
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.75);
}
.credits {
  float: right;
  padding-right: 2rem;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #d7725a;
  font-size: 1.2rem;
}
.custom-block.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 0.5rem 0;
}
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block p {
  line-height: 1.7;
}
</style>
