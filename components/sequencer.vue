<template>
  <div id="sequencer">
    <canvas width="2000" height="2000"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // computed
  computed: {
    skull() {
      return this.$store.state.skull.frames
    }
  },

  // lifecycle
  mounted() {
    let cnv = document.getElementById('sequencer').getElementsByTagName('canvas')[0],
        ctx = cnv.getContext('2d');

    //ctx.drawImage(this.skull[0], 200, 200, 1600, 1600)
  }
}
</script>

<style>
#sequencer {
  height: 100%;
  width: 100%;
}

#sequencer canvas {
  height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>
