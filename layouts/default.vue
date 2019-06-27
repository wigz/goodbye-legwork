<template>
  <div id="app">
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ['Hey guys, Big Gulps™ eh?', 'Welp, see ya later!'],
      active_title: 0
    }
  },

  // lifecycle
  mounted() {
    console.log('%c 🦄 Hello curious voyager! https://github.com/wigz/goodbye-legwork', 'color: #F0F')
    setInterval(this.seeYa.bind(this), 5000)
  },

  // methods
  methods: {
    seeYa() {
      this.active_title = this.active_title === 0 ? 1 : 0
      document.title = this.titles[this.active_title]
    }
  }
}
</script>

<style>
:root {
  --black: #000000;
  --white: #ffffff;
  --grandpas-basement: #f8f7f3;
  --frumpy-noodle: #292929;
}

html, body {
  background-color: var(--white);
  height: 100%;
  overflow: hidden;
  width: 100%;
}

body {
  font-family: neuzeit-grotesk, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt, #__layout, #app {
  width: 100%;
  height: 100%;
}
</style>
