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
          "We saw creativity as our guiding light. When times were the best,",
          "we didn’t haggle over budgets, worry about finding clients or struggle",
          "to hire the best people. We led with creativity and the rest followed.",
          "We passed on work that didn’t give us this opportunity. Maybe it",
          "contributed to our downfall, but it was totally worth it.",
        ],
        [
          "We didn’t recycle ideas. We tried to give each project a unique",
          "perspective and approach. We loved when people told us that the",
          "work we did felt hand crafted. And this is where we thrived, on a",
          "constant stream of new, creative challenges. We were a team driven",
          "by learning new things and telling the status quo to get fucked."
        ],
        [
          "We always pushed concepts, even if it meant down to the wire",
          "deliveries. We were unabashedly ‘us’ and tried to inject humor into",
          "everything. For more than a decade, we showed up everyday with",
          "the right attitude, put our heads down and work hard. \"A little candle",
          "burns out just like a flaming torch, we chose our own way to burn.\""
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
      return this.message === -1 || this.message === 3 ? ['', '', '', '', ''] : this.wordz[this.message]
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
