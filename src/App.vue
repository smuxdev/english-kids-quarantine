<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: auto;
  width: 1000px;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  color: #2c3e50;

  background: #fff;
  margin: 2rem;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  min-height: 950px;
}
</style>
