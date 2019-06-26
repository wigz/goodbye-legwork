<template>
  <div id="loader">
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
    for(let i = 1; i <= this.manifest.skull.frames; i++) {
      this.cache(`${this.manifest.skull.path}${('0' + i).substr(-2)}.jpg`, i)
    }

    for(let i = 1; i <= this.manifest.split.frames; i++) {
      this.cache(`${this.manifest.split.path}${('0' + i).substr(-2)}.jpg`, i)
    }

    for(let i = 1; i <= this.manifest.cover.frames; i++) {
      this.cache(`${this.manifest.cover.path}${('0' + i).substr(-2)}.jpg`, i)
    }
  },

  // methods
  methods: {
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
      }
    }
  }
}
</script>

<style>
#loader {
  height: 100%;
  width: 100%;
}
</style>
