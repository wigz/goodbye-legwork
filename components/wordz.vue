<template>
  <div id="wordz" :class="{shown: shown}">
    <div id="inner-wordz">
      <div class="line" id="line-01">
        <span>With a terrible cry the Balrog fell forward, and its shadow plunged</span>
      </div>
      <div class="line" id="line-01">
        <span>down and vanished. But even as it fell it swung its whip, and the</span>
      </div>
      <div class="line" id="line-01">
        <span>thongs lashed and curled about the wizard's knees, dragging him</span>
      </div>
      <div class="line" id="line-01">
        <span>to the brink. He staggered and fell, grasped vainly at the stone,</span>
      </div>
      <div class="line" id="line-01">
        <span>and slid into the abyss. 'Fly, you fools!' he cried, and was gone.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // computed
  computed: {
    shown() {
      return this.$store.state.message_shown
    },
    message() {
      return this.$store.state.message
    }
  }
}
</script>

<style>
#wordz {
  height: 100%;
  position: relative;
  width: 100%;
}

#wordz:before {
  background: var(--white);
  bottom: 0px;
  content: "";
  display: block;
  left: 0px;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: opacity 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000)
}

#wordz.shown:before {
  opacity: 0.85;
}

#wordz #inner-wordz {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

#wordz #inner-wordz .line {
  display: inline-block;
  margin-bottom: 24px;
  overflow: hidden;
}

#wordz #inner-wordz .line span {
  display: block;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2em;
  transform: translate3d(0%, 100%, 0);
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000);
  white-space: nowrap;
}

#wordz.shown #inner-wordz .line span {
  transform: translate3d(0%, 0%, 0);
}
</style>
