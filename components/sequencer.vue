<template>
  <div id="sequencer">
    <canvas width="2000" height="2000"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // props
  props: {
    fps: {
      type: Number
    }
  },

  // computed
  computed: {
    skull() {
      return this.$store.state.skull.frames
    },
    sequence() {
      return this.$store.state.sequence
    },
    from() {
      return this.$store.state.from
    },
    to() {
      return this.$store.state.to
    }
  },

  // watch
  watch: {
    to(val) {
      // TODO: queue?
      if(val !== -1) this.play()
    }
  },

  // lifecycle
  created() {
    this.render = this.render.bind(this)
    this._raf = 0
    this._now = 0
    this._then = 0
    this._frame = 0
  },

  mounted() {
    let cnv = document.getElementById('sequencer').getElementsByTagName('canvas')[0]
    this._ctx = cnv.getContext('2d')
  },

  // methods
  methods: {
    play() {
      this._frame = this.from
      this._then = Date.now()
      this._raf = window.requestAnimationFrame(this.render)
    },

    clear() {
      this._ctx.clearRect(0, 0, 2000, 2000)
    },

    render() {
      this._raf = window.requestAnimationFrame(this.render)

      this._now = Date.now()
      let elapsed = this._now - this._then

      if(elapsed > this.fps) {
        this._then = this._now - (elapsed % this.fps)

        this._ctx.drawImage(this[this.sequence][this._frame], 200, 200, 1600, 1600)

        if(this._frame === this.to) {
          cancelAnimationFrame(this._raf)
          if(this.to === (this[this.sequence].length - 1)) this.clear()
        } else {
          this._frame += 1
        }
      }
    }
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
