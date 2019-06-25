<template>
  <div id="cards" :class="{unlocked: unlocked}">
    <div class="corner" id="card-01" @mousedown.stop.prevent="onCornerDown" @touchstart.stop.prevent="onCornerDown">
      <img src="/cards/01.png"/>
    </div>
    <div class="corner" id="card-02" @mousedown.stop.prevent="onCornerDown" @touchstart.stop.prevent="onCornerDown">
      <img src="/cards/02.png"/>
    </div>
    <div class="corner" id="card-03" @mousedown.stop.prevent="onCornerDown" @touchstart.stop.prevent="onCornerDown">
      <img src="/cards/03.png"/>
    </div>
    <div class="corner" id="card-04" @mousedown.stop.prevent="onCornerDown" @touchstart.stop.prevent="onCornerDown">
      <img src="/cards/04.png"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // data
  data() {
    return {
      cornered: false,
      unlocked: false
    }
  },

  // lifecycle
  mounted: function() {
    this._corners = document.getElementsByClassName('corner')
    this._interaction = {
      initial_x: 0,
      initial_y: 0
    }
    this._active_corner = null
    this._seq = [
      'skull',
      'skull',
      'cover'
    ]
    this._seen = [
      false,
      false,
      false
    ]
    this._last_index = 0

    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  // methods
  methods: {
    onResize() {
      this._translates = this.calcTranslates()
      for(let i = 0; i < 3; i++) this.translateCorner(this._corners[i], this._translates[i].resting.x, this._translates[i].resting.y)
    },

    calcTranslates() {
      let base_x = (Math.round(window.innerWidth / 2) - 114),
          base_y = (Math.round(window.innerHeight / 2) - 161)

      return [
        {
          'current': {
            'x': (base_x - 240),
            'y': base_y
          },
          'resting': {
            'x': (base_x - 240),
            'y': base_y
          }
        },
        {
          'current': {
            'x': -base_x,
            'y': base_y
          },
          'resting': {
            'x': -base_x,
            'y': base_y
          }
        },
        {
          'current': {
            'x': (base_x + 240),
            'y': -base_y
          },
          'resting': {
            'x': (base_x + 240),
            'y': -base_y
          }
        },
        {
          'current': {
            'x': 0,
            'y': 0
          },
          'resting': {
            'x': 0,
            'y': 0
          }
        }
      ]
    },

    getIndex(corner) {
      return [...corner.parentElement.children].indexOf(corner);
    },

    disperseCorners() {
      for(let corner of this._corners) {
        if(corner.classList.contains('down') === false) {
          let index = this.getIndex(corner)

          this._translates[index].current.x = 0
          this._translates[index].current.y = 0
          this._translates[index].resting.x = 0
          this._translates[index].resting.y = 0

          this.translateCorner(corner, 0, 0)
        }
      }
    },

    translateCorner(corner, x, y, s = 1) {
      corner.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`
    },

    turnTheKey(index) {
      this._seen[index] = true
      if(this._seen[0] && this._seen[1] && this._seen[2]) this.unlocked = true
    },

    turnThePage(index) {
      if(index === 3) {
        this.$store.commit('sequence', '')
        this.$store.commit('to', '')
      } else {
        this.$store.commit('sequence', this._seq[index])
        this.$store.commit('to', 'rest')
      }

      this.$store.commit('message', index)
    },

    onCornerDown(e) {
      for(let corner of this._corners) {
        corner.classList.remove('dropped')
      }

      // TODO: touch
      this._interaction.initial_x = e.pageX
      this._interaction.initial_y = e.pageY

      let t = e.currentTarget
      t.classList.add('down')
      this._active_corner = t

      if(this.cornered === false) {
        this.cornered = true;
        window.removeEventListener('resize', this.onResize)
        this.disperseCorners()
      } else {
        this.$store.commit('sequence', this._seq[this._last_index])
        this.$store.commit('to', 'end')
        this.$store.commit('message_shown', false)
        this.disperseCorners()
      }

      document.body.addEventListener('mousemove', this.onCornerMove, true)
      document.body.addEventListener('mouseup', this.onCornerUp, true)
    },

    onCornerMove(e) {
      let index = this.getIndex(this._active_corner),
          delta_x = e.pageX - this._interaction.initial_x,
          delta_y = e.pageY - this._interaction.initial_y

      this._translates[index].current.x = this._translates[index].resting.x + delta_x
      this._translates[index].current.y = this._translates[index].resting.y + delta_y

      this.translateCorner(this._active_corner, this._translates[index].current.x, this._translates[index].current.y)
    },

    onCornerUp(e) {
      let index = this.getIndex(this._active_corner)
      this._last_index = index;

      this._active_corner.classList.remove('down')
      this._active_corner.classList.add('dropped')
      this._translates[index].resting.x = this._translates[index].current.x
      this._translates[index].resting.y = this._translates[index].current.y
      this.translateCorner(this._active_corner, this._translates[index].resting.x, this._translates[index].resting.y, 0.666)
      this._active_corner = null

      // message
      this.turnThePage(index)

      // unlock?
      this.turnTheKey(index)

      document.body.removeEventListener('mousemove', this.onCornerMove, true)
      document.body.removeEventListener('mouseup', this.onCornerUp, true)

      setTimeout(this.disperseCorners, 666)
    }
  }
}
</script>

<style>
#cards {
  height: 100%;
  width: 100%;
}

#cards.unlocked .corner#card-04 {
  opacity: 1;
  visibility: visible;
}

#cards.unlocked .corner#card-04.down {
  opacity: 0.666;
}

#cards.unlocked .corner#card-04.dropped {
  opacity: 0;
}

#cards .corner {
  border-radius: 7px;
  cursor: pointer;
  height: 322px;
  padding: 20px;
  position: absolute;
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000), opacity 333ms linear;
  width: 228px;
}

#cards .corner img {
  height: 100%;
  width: 100%;
}

#cards .corner.down {
  opacity: 0.666;
  transition: opacity 333ms linear;
}

#cards .corner.dropped {
  opacity: 0;
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000), opacity 333ms linear;
}

#cards .corner#card-01 {
  left: 0px;
  top: 0px;
}

#cards .corner#card-02 {
  right: 0px;
  top: 0px;
}

#cards .corner#card-03 {
  bottom: 0px;
  left: 0px;
}

#cards .corner#card-04 {
  bottom: 0px;
  opacity: 0;
  right: 0px;
  visibility: hidden;
}
</style>
