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
        skull: [
          '/sequences/skull/01.jpg'
        ],
        split: [

        ],
        cover: [

        ]
      }
    }
  },

  // lifecycle
  mounted: function() {
    this.cache(this.manifest.skull[0])
  },

  // methods
  methods: {
    cache(path) {
      let img = document.createElement('img');

      img.src = path;

      if(img.complete) {
        this.generateCanvas(img)
      } else {
        img.addEventListener('load', (e) => {
          this.generateCanvas(e.currentTarget)
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

      this.addCanvasToStore(seq, cnv)
    },

    addCanvasToStore(seq, cnv) {
      this.$store.commit(`${seq}/add`, cnv)

      this.loaded += 1;
      if(this.loaded === this.manifest.skull.length + this.manifest.split.length + this.manifest.cover.length) {
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
