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
    split() {
      return this.$store.state.split.frames
    },
    cover() {
      return this.$store.state.cover.frames
    },
    sequence() {
      return this.$store.state.sequence
    },
    to() {
      return this.$store.state.to
    }
  },

  // watch
  watch: {
    to(val) {
      if(val !== '') this.play()
    }
  },

  // lifecycle
  created() {
    this.render = this.render.bind(this)
    this._raf = 0
    this._now = 0
    this._then = 0
    this._frame = 0
    this._positions = {
      'skull': {
        'rest': 28,
        'end': 45
      },
      'split': {
        'rest': 32,
        'end': 54
      },
      'cover': {
        'rest': 28,
        'end': 50
      }
    }
  },

  mounted() {
    let cnv = document.getElementById('sequencer').getElementsByTagName('canvas')[0]
    this._ctx = cnv.getContext('2d')
  },

  // methods
  methods: {
    play() {
      this._frame = this.to === 'rest' ? 1 : this._positions[this.sequence]['rest']
      this._to_frame = this._positions[this.sequence][this.to]
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

        if(this._frame === this._to_frame) {
          cancelAnimationFrame(this._raf)
          if(this._to_frame === (this[this.sequence].length - 1)) this.clear()
          else this.$store.commit('message_shown', true)
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
