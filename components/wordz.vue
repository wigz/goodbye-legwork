<template>
  <div id="wordz" :class="{shown: shown}">
    <div id="inner-wordz">
      <div class="line" id="line-01">
        <span>{{ lines[0] }}</span>
      </div>
      <div class="line" id="line-02">
        <span>{{ lines[1] }}</span>
      </div>
      <div class="line" id="line-03">
        <span>{{ lines[2] }}</span>
      </div>
      <div class="line" id="line-04">
        <span>{{ lines[3] }}</span>
      </div>
      <div class="line" id="line-05">
        <span>{{ lines[4] }}</span>
      </div>
      <div class="line" id="line-06">
        <span>{{ lines[5] }}</span>
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
      wordz: [
        [
          "We saw creativity as our guiding light. When times were",
          "the best, we led with being creative and the rest followed.",
          "Budgets aligned, work flowed through the studio and we",
          "hired some really great people. It was always our goal to",
          "find work that supported this vision and to trust in the",
          "talent of people at every level to get the job done."
        ],
        [
          "We didn’t recycle ideas. We tried to give each project a",
          "unique perspective and approach. We loved when people",
          "told us that the work we did felt hand crafted. And this is",
          "where we thrived, on a constant stream of new, creative",
          "challenges. We were a team driven by staying positive,",
          "supporting each other and learning new things."
        ],
        [
          "We always pushed concepts, even if it meant down to the",
          "wire deliveries. We were unabashedly ‘us’ and tried to",
          "inject humor into everything. For more than a decade, we",
          "showed up everyday with the right attitude, put our heads",
          "down and got to work. \"A little candle burns out just like",
          "a flaming torch, we chose our own way to burn.\""
        ]
      ]
    }
  },

  // computed
  computed: {
    shown() {
      return this.$store.state.message_shown
    },
    message() {
      return this.$store.state.message
    },
    lines() {
      return this.message === -1 || this.message === 3 ? ['', '', '', '', '', ''] : this.wordz[this.message]
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
  opacity: 0.92;
}

#wordz #inner-wordz {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

#wordz #inner-wordz .line {
  display: block;
  margin-bottom: 1.25vh;
  overflow: hidden;
}

#wordz #inner-wordz .line span {
  color: var(--frumpy-noodle);
  display: block;
  font-size: 13px;
  line-height: 1.2em;
  transform: translate3d(0%, 100%, 0);
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000);
  white-space: nowrap;
}

#wordz.shown #inner-wordz .line span {
  transform: translate3d(0%, 0%, 0);
}

@media only screen and (min-width: 768px) {
  #wordz #inner-wordz .line span {
    font-size: 2vh;
    font-weight: bold;
  }
}

@media (min-width: 768px) and (orientation: landscape) {
  #wordz #inner-wordz .line {
    margin-bottom: 1.25vw;
  }

  #wordz #inner-wordz .line span {
    font-size: 2vw;
  }
}
</style>
