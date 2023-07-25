<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}
li,
ul,
p,
a,
span,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  margin-block-start: 0;
  margin-block-end: 0;
}
html,
body {
  padding: 0;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
