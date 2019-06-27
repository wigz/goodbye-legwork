<template>
  <div id="loader">
    <div id="legwork-is-dead">
      <img id="dead-sprite" src="dead.jpg"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      loaded: 0,
      manifest: {
        skull: {
          path: '/sequences/skull/',
          frames: 45
        },
        split: {
          path: '/sequences/split/',
          frames: 54
        },
        cover: {
          path: '/sequences/cover/',
          frames: 50
        }
      }
    }
  },

  // lifecycle
  mounted: function() {
    this._sprite = document.getElementById('dead-sprite')

    if(this._sprite.complete === true) {
      this.go();
    } else {
      this._sprite.addEventListener('load', this.go);
    }
  },

  // methods
  methods: {
    go() {
      this._sprite.classList.add('go')

      setTimeout(() => {
        for(let i = 1; i <= this.manifest.skull.frames; i++) {
          this.cache(`${this.manifest.skull.path}${('0' + i).substr(-2)}.jpg`, i)
        }

        for(let i = 1; i <= this.manifest.split.frames; i++) {
          this.cache(`${this.manifest.split.path}${('0' + i).substr(-2)}.jpg`, i)
        }

        for(let i = 1; i <= this.manifest.cover.frames; i++) {
          this.cache(`${this.manifest.cover.path}${('0' + i).substr(-2)}.jpg`, i)
        }
      }, 1600)
    },

    cache(path, index) {
      let img = document.createElement('img'),
          arr = path.split("/"),
          seq = arr[arr.length - 2]

      img.src = path;

      if(img.complete) {
        this.addCanvasToStore(seq, this.generateCanvas(img), index)
      } else {
        img.addEventListener('load', (e) => {
          this.addCanvasToStore(seq, this.generateCanvas(e.currentTarget), index)
        })
      }
    },

    generateCanvas(img) {
      let arr = img.src.split("/"),
          seq = arr[arr.length - 2],
          cnv = document.createElement('canvas'),
          ctx = cnv.getContext('2d')

      cnv.width = 1600
      cnv.height = 1600
      ctx.drawImage(img, 0, 0, 1600, 1600)

      return cnv
    },

    addCanvasToStore(seq, cnv, index) {
      this.$store.commit(`${seq}/add`, {index, cnv})

      this.loaded += 1;
      if(this.loaded === this.manifest.skull.frames + this.manifest.split.frames + this.manifest.cover.frames) {
        this.$store.commit('loaded')
        setTimeout(function() {window.dispatchEvent(new Event('resize'));}, 666);
      }
    }
  }
}
</script>

<style>
#loader {
  background-color: var(--white);
  height: 100%;
  position: relative;
  width: 100%;
}

#loader #legwork-is-dead {
  height: 59px;
  left: 50%;
  margin: -29px 0 0 -142px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  width: 283px;
}

#loader #legwork-is-dead #dead-sprite {
  height: 1180px;
  width: 283px;
}

#loader #legwork-is-dead #dead-sprite.go {
  animation: dead 1.6s steps(19) forwards;
}

@keyframes dead {
  to {
    transform: translate3d(0px, -1121px, 0);
  }
}
</style>
