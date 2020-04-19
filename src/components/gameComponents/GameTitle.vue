<template>
  <div class="game-title">
    <div class="container">
      <h1>
        <span>
          English Kids
          <br />QUARANTINE
        </span>
      </h1>

      <span class="blobs_1"></span>
      <span class="blobs_2"></span>
      <span class="blobs_3"></span>
      <span class="blobs_4"></span>
      <span class="blobs_5"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameTitle"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-title {
  width: 100%;
}
body {
  text-align: center;
}
span {
  display: block;
  position: absolute;
}

.container {
  width: 100%;
  height: 120px;
}

h1 {
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  font-family: "Titan One", cursive;
  font-size: 40px;
  font-weight: 500;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
}

h1 span {
  width: 100%;
  position: relative;
}

h1 span:before {
  background: linear-gradient(5deg, #fc5c7d, #6a82fb, #fc5c7d);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  content: "";
  mix-blend-mode: screen;
}

[class*="blobs"] {
  mix-blend-mode: color;
  animation: blobs 15s ease-in-out infinite alternate;
}

.blobs_1 {
  background: #ff1493;
  width: 60px;
  height: 40px;
  top: 30px;
  left: 49%;
}

.blobs_2 {
  background: #ff4500;
  width: 80px;
  height: 80px;
  top: 20px;
  left: 59%;
}

.blobs_3 {
  background: #00ff00;
  width: 60px;
  height: 60px;
  top: 0px;
  left: 38%;
}

.blobs_4 {
  background: #ff0000;
  width: 60px;
  height: 50px;
  top: 70px;
  left: 45%;
}

.blobs_5 {
  background: #ffff00;
  width: 50px;
  height: 50px;
  top: 40px;
  left: 33%;
}

@keyframes blobs {
  0% {
    border-radius: 26% 74% 61% 39% / 54% 67% 33% 46%;
  }
  10% {
    border-radius: 74% 26% 47% 53% / 68% 46% 54% 32%;
  }
  20% {
    border-radius: 48% 52% 30% 70% / 27% 37% 63% 73%;
  }
  30% {
    border-radius: 73% 27% 57% 43% / 28% 67% 33% 72%;
  }
  40% {
    border-radius: 63% 37% 56% 44% / 25% 28% 72% 75%;
  }
  50% {
    border-radius: 39% 61% 70% 30% / 61% 29% 71% 39%;
  }
  60% {
    border-radius: 27% 73% 29% 71% / 73% 51% 49% 27%;
  }
  70% {
    border-radius: 39% 61% 65% 35% / 74% 65% 35% 26%;
  }
  80% {
    border-radius: 55% 45% 37% 63% / 38% 30% 70% 62%;
  }
  90% {
    border-radius: 25% 75% 70% 30% / 39% 50% 50% 61%;
  }
  100% {
    border-radius: 66% 34% 33% 67% / 65% 73% 27% 35%;
  }
}
</style>
