<template>
  <div id="cards" :class="{unlocked: unlocked}">
    <span id="what-the-fuck">Pick it up and drop it.</span>
    <div id="cards-inner">
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // data
  data() {
    return {
      initial: true,
      cornered: false,
      unlocked: false
    }
  },

  // lifecycle
  mounted: function() {
    this._corners = document.getElementsByClassName('corner')
    this._what_the_fuck = document.getElementById('what-the-fuck')
    this._interaction = {
      initial_x: 0,
      initial_y: 0
    }
    this._active_corner = null
    this._seq = [
      'skull',
      'split',
      'cover'
    ]
    this._seen = [
      false,
      false,
      false
    ]
    this._last_index = 0

    window.addEventListener('resize', this.onResize)
  },

  // methods
  methods: {
    onResize() {
      this._translates = this.calcTranslates()
      for(let i = 0; i < 3; i++) this.translateCorner(this._corners[i], this._translates[i].resting.x, this._translates[i].resting.y)
    },

    calcTranslates() {
      let rect = this._corners[0].getBoundingClientRect(),
          base_x = (Math.round(window.innerWidth / 2) - Math.round(rect.width / 2)),
          base_y = (Math.round(window.innerHeight / 2) - Math.round(rect.height / 2))

      return [
        {
          'current': {
            'x': (base_x - rect.width) - 40,
            'y': base_y - 20
          },
          'resting': {
            'x': (base_x - rect.width) - 40,
            'y': base_y - 20
          }
        },
        {
          'current': {
            'x': -base_x + 20,
            'y': base_y - 20
          },
          'resting': {
            'x': -base_x + 20,
            'y': base_y - 20
          }
        },
        {
          'current': {
            'x': (base_x + rect.width),
            'y': -base_y + 20
          },
          'resting': {
            'x': (base_x + rect.width),
            'y': -base_y + 20
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
      if(index !== 3) {
        this.$store.commit('sequence', this._seq[index])
        this.$store.commit('to', 'rest')
      }

      this.$store.commit('message', index)
    },

    onCornerDown(e) {
      for(let corner of this._corners) {
        corner.classList.remove('dropped')
      }

      this._interaction.initial_x = e.type === 'mousedown' ? e.pageX : e.targetTouches[0].pageX
      this._interaction.initial_y = e.type === 'mousedown' ? e.pageY : e.targetTouches[0].pageY

      let t = e.currentTarget
      t.classList.add('down')
      this._active_corner = t

      if(this.cornered === false) {
        this.cornered = true;
        window.removeEventListener('resize', this.onResize)
        this._what_the_fuck.classList.replace('do-i-do', 'yeeeaaah')
        this.disperseCorners()
      } else {
        this.$store.commit('sequence', this._seq[this._last_index])
        this.$store.commit('to', 'end')
        this.$store.commit('message_shown', false)
        this.disperseCorners()
      }

      document.body.addEventListener('mousemove', this.onCornerMove, true)
      document.body.addEventListener('mouseup', this.onCornerUp, true)
      document.body.addEventListener('touchmove', this.onCornerMove, true)
      document.body.addEventListener('touchend', this.onCornerUp, true)
    },

    onCornerMove(e) {
      let index = this.getIndex(this._active_corner),
          delta_x = e.type === 'mousemove' ? e.pageX - this._interaction.initial_x : e.targetTouches[0].pageX - this._interaction.initial_x,
          delta_y = e.type === 'mousemove' ? e.pageY - this._interaction.initial_y : e.targetTouches[0].pageY - this._interaction.initial_y

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
      document.body.removeEventListener('touchmove', this.onCornerMove, true)
      document.body.removeEventListener('touchend', this.onCornerUp, true)

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

#cards.unlocked #cards-inner .corner#card-04 {
  opacity: 1;
  visibility: visible;
}

#cards.unlocked #cards-inner .corner#card-04.down {
  opacity: 0.666;
}

#cards.unlocked #cards-inner .corner#card-04.dropped {
  opacity: 0;
}

#cards #what-the-fuck {
  color: var(--frumpy-noodle);
  font-size: 1.667vh;
  font-weight: bold;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 75%;
  transform: translate(-50%, -50%);
  transition: opacity 333ms linear, visibility 0ms linear 333ms;
}

#cards #what-the-fuck.do-i-do {
  opacity: 0.666;
}

#cards #what-the-fuck.yeeeaaah {
  opacity: 0;
  visibility: hidden;
}

#cards #cards-inner {
  height: 100%;
  position: relative;
  width: 100%;
}

#cards #cards-inner .corner {
  cursor: pointer;
  height: 0;
  padding-bottom: 30%;
  position: absolute;
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000), opacity 333ms linear;
  width: 20%;
}

#cards #cards-inner .corner img {
  height: 100%;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
}

#cards #cards-inner .corner.down {
  opacity: 0.666;
  transition: opacity 333ms linear;
}

#cards #cards-inner .corner.dropped {
  opacity: 0;
  pointer-events: none;
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000), opacity 333ms linear;
}

#cards #cards-inner .corner#card-01 {
  left: 20px;
  top: 20px;
}

#cards #cards-inner .corner#card-02 {
  right: 20px;
  top: 20px;
}

#cards #cards-inner .corner#card-03 {
  bottom: 20px;
  left: 20px;
}

#cards #cards-inner .corner#card-04 {
  bottom: 20px;
  opacity: 0;
  right: 20px;
  visibility: hidden;
}

#index.message-3 #cards #cards-inner .corner {
  transition: none !important;
}

@media (orientation: landscape) {
  #cards #what-the-fuck {
    font-size: 1.667vw;
  }

  #cards #cards-inner .corner {
    padding-bottom: 17.25%;
    width: 11.5%;
  }
}
</style>
