<template>
  <div id="index">
    <div id="head-wrap">
      <Sequencer v-if="loaded" :fps="1000 / 18"/>
    </div>
    <div id="text-wrap">

    </div>
    <div id="card-wrap">
      <Cards/>
    </div>
    <div id="load-wrap">
      <Loader/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Sequencer from '~/components/sequencer.vue'
import Cards from '~/components/cards.vue'
import Loader from '~/components/loader.vue'

export default {
  // computed
  computed: {
    loaded() {
      return this.$store.state.ready
    }
  },

  // components
  components: {
    Sequencer,
    Cards,
    Loader
  },

  // lifecycle
  mounted() {
  }
}
</script>

<style>
#index {
  height: 100%;
  position: relative;
  width: 100%;
}

#index #head-wrap,
#index #text-wrap,
#index #card-wrap,
#index #load-wrap {
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
}

#index #load-wrap {
  pointer-events: none;
}
</style>
