<template>
  <div id="index">
    <div id="sequencer-wrap">
      <Sequencer v-if="loaded"/>
    </div>
    <div id="loader-wrap">
      <loader/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Loader from '~/components/loader.vue'
import Sequencer from '~/components/sequencer.vue'

export default {
  // computed
  computed: {
    loaded() {
      return this.$store.state.ready
    }
  },

  // components
  components: {
    Loader,
    Sequencer
  },

  // lifecycle
  mounted: function() {
  }
}
</script>

<style>
#index {
  height: 100%;
  position: relative;
  width: 100%;
}

#index #sequencer-wrap {
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
}
</style>
