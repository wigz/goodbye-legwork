<template>
  <div id="index" :class="message">
    <div id="the-four-corners">
      <div id="head-wrap">
        <Sequencer v-if="loaded" :fps="1000 / 15"/>
      </div>
      <div id="text-wrap">
        <Wordz/>
      </div>
      <div id="card-wrap">
        <Cards/>
      </div>
      <div id="load-wrap" :class="{loaded: loaded}">
        <Loader/>
      </div>
    </div>
    <div id="in-memory">
      <div id="hero">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 86">
          <path d="M0.6,71.8H9c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6H0.6C0.3,14.2,0,14,0,13.7V2.1c0-0.3,0.3-0.6,0.6-0.6h33.8c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.9c-0.3,0-0.6,0.3-0.6,0.6v56.5c0,0.3,0.3,0.6,0.6,0.6h21.9c0.3,0,0.6-0.3,0.6-0.6V60.7c0-0.3,0.3-0.6,0.6-0.6h12.7c0.3,0,0.6,0.3,0.6,0.6v23.2c0,0.3-0.3,0.6-0.6,0.6H0.6c-0.3,0-0.6-0.3-0.6-0.6V72.3C0,72,0.3,71.8,0.6,71.8z"/>
          <path d="M71.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h61.3c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6h-12.6c-0.3,0-0.6-0.3-0.6-0.6v-9.9c0-0.3-0.3-0.6-0.6-0.6H95c-0.3,0-0.6,0.3-0.6,0.6v21c0,0.3,0.3,0.6,0.6,0.6h24.1c0.3,0,0.6,0.3,0.6,0.6v11c0,0.3-0.3,0.6-0.6,0.6H95c-0.3,0-0.6,0.3-0.6,0.6v22.3c0,0.3,0.3,0.6,0.6,0.6h23.8c0.3,0,0.6-0.3,0.6-0.6v-9.9c0-0.3,0.3-0.6,0.6-0.6h12.6c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6H71.1c-0.3,0-0.6-0.3-0.6-0.6V72.3C70.5,72,70.8,71.8,71.1,71.8z"/>
          <path d="M233.4,14.2h-7.9c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.7c-0.4,0-0.7,0.4-0.6,0.7l12.9,41.4c0.2,0.5,0.9,0.5,1.1,0.1l20-46.5c0.1-0.2,0.3-0.4,0.5-0.4h6.9c0.2,0,0.4,0.1,0.5,0.4l19.9,46.5c0.2,0.5,0.9,0.5,1.1-0.1l12-41.3c0.1-0.4-0.2-0.7-0.6-0.7H314c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-7.9c-0.3,0-0.5,0.2-0.6,0.4L317.7,85c-0.1,0.2-0.3,0.4-0.6,0.4H310c-0.2,0-0.4-0.1-0.5-0.3l-21.7-49.5c-0.2-0.5-0.9-0.5-1.1,0L264.9,85c-0.1,0.2-0.3,0.3-0.5,0.3h-7.2c-0.3,0-0.5-0.2-0.6-0.4l-22.6-70.3C233.9,14.4,233.6,14.2,233.4,14.2z"/>
          <path d="M348.2,43c0-24.3,17.8-43,43.2-43C416.7,0,434,18.8,434,43c0,24.3-17.8,43-43.2,43C365.4,86,348.2,67.2,348.2,43z M419.1,43c0-17.3-11.8-29.8-28-29.8C374.9,13.2,363,25.6,363,43c0,17.3,11.8,29.8,28.1,29.8C407.3,72.8,419.1,60.4,419.1,43z"/>
          <path d="M441.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h31.8c19.2,0,32.9,8.2,32.9,25.1c0,10.5-6.3,18.6-15.2,22.3c-0.3,0.1-0.4,0.5-0.3,0.8l12.4,21.7c0.1,0.2,0.3,0.3,0.5,0.3h8.6c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-18.4c-0.2,0-0.4-0.1-0.5-0.3l-16.4-30.9c-0.1-0.2-0.3-0.3-0.6-0.3c-1.6,0.1-3.2,0.2-4.7,0.2c-2.4,0-4.6,0-6.3-0.1c-0.3,0-0.6,0.2-0.6,0.6v17.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C440.5,72,440.8,71.8,441.1,71.8z M491,27.1c0-8.7-7.2-12.9-18.8-12.9H465c-0.3,0-0.6,0.3-0.6,0.6v25.5c0,0.3,0.2,0.6,0.5,0.6c1.5,0.1,3.5,0.2,7.6,0.2C483.4,41.1,491,35.8,491,27.1z"/>
          <path d="M521.2,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h33.2c0.3,0,0.6,0.3,0.6,0.6v11.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6,0.3-0.6,0.6v26.1c0,0.5,0.6,0.8,1,0.4L571.7,15c0.4-0.4,0.1-1-0.4-1h-7.6c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h35.7c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-8.2c-0.2,0-0.3,0.1-0.4,0.2l-22.9,22.3c-0.2,0.2-0.2,0.5-0.1,0.7l21,34c0.1,0.2,0.3,0.3,0.5,0.3h10.2c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-19.2c-0.2,0-0.4-0.1-0.5-0.3L557,47.3c-0.2-0.3-0.6-0.4-0.9-0.1l-11.4,11.1c-0.1,0.1-0.2,0.3-0.2,0.4v12.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C520.6,72,520.9,71.8,521.2,71.8z"/>
          <path d="M184,42.3v11.5c0,0.3,0.3,0.6,0.6,0.6h19.8c0.3,0,0.6,0.3,0.6,0.6v12.6c0,0.2-0.1,0.4-0.3,0.5c-5.7,3.3-11.4,5.1-20,5.1c-5.5,0-10.8-1.8-15.3-5c-1.3-1-2.6-2.2-3.8-3.4c-5.2-5.3-8.4-13-8.4-21.8c0-17.7,12.3-29.6,28.3-29.8c7.7,0,14.8,2.9,19.4,7.8c0.1,0.1,0.2,0.3,0.2,0.4v7c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V16c0-0.6-0.2-1.1-0.6-1.6c-6.6-7.7-15.6-12.6-26.6-14c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.2,0-0.3,0c-1.4-0.2-2.9-0.3-4.4-0.3c-0.2,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.2,0c-25.4,0-43.2,18.7-43.2,43c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,26.6,19.5,42.7,40.1,42.7c8.9,0,16.1-2.8,21.8-7c0.4-0.3,0.9,0,0.9,0.5v5.4c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V42.3c0-0.3-0.3-0.6-0.6-0.6h-33.7C184.3,41.7,184,41.9,184,42.3z"/>
        </svg>
        <div id="back-to-the-corners" @click="onBackToCornersClick">BACK</div>
        <div id="hero-content">
          <p>These were the ideals that we strived to uphold at Legwork Studio. But, in the end, it was the talented people and the unmatched work they did that mattered the most. Legwork lives on in the things we created, our memories, shared experiences and, so we don’t forget, here for good measure. It has truly been fucking awesome&ndash;goodbye.</p>
          <div id="hero-img-wrap">
            <img src="legstudio.png"/>
          </div>
        </div>
      </div>
      <div id="reel">
        <no-ssr>
          <vimeo-player data-vimeo-responsive="1" ref="player" video-id="280759140"/>
        </no-ssr>
      </div>
      <div id="last-starfighters">
        <span class="big-wordz">The Last Starfighters</span>
        <div class="human-being">
          <span class="name">Joey Bullock</span>
          <span class="occupasche">Partner / Operations</span>
        </div>
        <div class="human-being">
          <span class="name">Chris Grey</span>
          <span class="occupasche">Executive Producer</span>
        </div>
        <div class="human-being">
          <span class="name">Bret Harris</span>
          <span class="occupasche">Business Development</span>
        </div>
        <div class="human-being">
          <span class="name">Stuart Inamura</span>
          <span class="occupasche">Designer / Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Jeremy Jackson</span>
          <span class="occupasche">Technical Director</span>
        </div>
        <div class="human-being">
          <span class="name">Hannah Purmort</span>
          <span class="occupasche">Senior Art Director</span>
        </div>
        <div class="human-being">
          <span class="name">Aaron Ray</span>
          <span class="occupasche">Partner / Animation</span>
        </div>
        <div class="human-being">
          <span class="name">Richie Robbins</span>
          <span class="occupasche">Senior Producer</span>
        </div>
        <div class="human-being">
          <span class="name">Lisa Rooney</span>
          <span class="occupasche">Producer</span>
        </div>
        <div class="human-being">
          <span class="name">Jack Rugile</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Adam Scarano</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Mike Scarano</span>
          <span class="occupasche">Associate Creative Director</span>
        </div>
        <div class="human-being">
          <span class="name">Harry Schaefer</span>
          <span class="occupasche">Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Mary Vertulfo</span>
          <span class="occupasche">Designer / Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Matt Wiggins</span>
          <span class="occupasche">Partner / Interactive</span>
        </div>
      </div>
      <div id="lost-starfighters">
        <span class="big-wordz">The Lost Starfighters</span>
        <div class="human-being">
          <span class="name">Dean Boyer </span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Ben Chwirka</span>
          <span class="occupasche">Designer / Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Zack Citro</span>
          <span class="occupasche">Senior Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Drew Dahlman</span>
          <span class="occupasche">Technical Director</span>
        </div>
        <div class="human-being">
          <span class="name">Katrin Davis</span>
          <span class="occupasche">Design Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Megan Demarco</span>
          <span class="occupasche">Design Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Keith Driessen</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Lucas Drummond</span>
          <span class="occupasche">Developer Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Matt FaJohn</span>
          <span class="occupasche">Partner / New Business</span>
        </div>
        <div class="human-being">
          <span class="name">Matt Flesher</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Dan Hannigan</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Kyle Hegge</span>
          <span class="occupasche">Animation Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Matt Johnston</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Sarah Jones</span>
          <span class="occupasche">Designer / Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Kristin Kidd</span>
          <span class="occupasche">Producer</span>
        </div>
        <div class="human-being">
          <span class="name">Sean Klassen</span>
          <span class="occupasche">Partner / Creative Director</span>
        </div>
        <div class="human-being">
          <span class="name">Mike Lanning</span>
          <span class="occupasche">Animation Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Derik Linch</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Oliver McCabe</span>
          <span class="occupasche">Design Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Andy McIntosh</span>
          <span class="occupasche">Partner / Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Josh O’Brien</span>
          <span class="occupasche">Animation Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Sean Ryan</span>
          <span class="occupasche">Interactive Designer</span>
        </div>
        <div class="human-being">
          <span class="name">Jurg Schappi</span>
          <span class="occupasche">UX Intern</span>
        </div>
        <div class="human-being">
          <span class="name">Jos Smith</span>
          <span class="occupasche">Developer</span>
        </div>
        <div class="human-being">
          <span class="name">Dave Soderberg</span>
          <span class="occupasche">Creative Director</span>
        </div>
        <div class="human-being">
          <span class="name">Nick Tolve</span>
          <span class="occupasche">Animator</span>
        </div>
        <div class="human-being">
          <span class="name">Daniel Wilber</span>
          <span class="occupasche">Developer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import Sequencer from '~/components/sequencer.vue'
import Wordz from '~/components/wordz.vue'
import Cards from '~/components/cards.vue'
import Loader from '~/components/loader.vue'

export default {
  // computed
  computed: {
    loaded() {
      return this.$store.state.ready
    },
    message() {
      return `message-${this.$store.state.message}`
    }
  },

  // components
  components: {
    Sequencer,
    Wordz,
    Cards,
    Loader,
    vueVimeoPlayer
  },

  // methods
  methods: {
    onBackToCornersClick(e) {
      let card = document.getElementById('card-01')
      card.dispatchEvent(new Event('mousedown'))
      card.dispatchEvent(new Event('mouseup'))
    }
  }
}
</script>

<style>
#index {
  height: 100%;
  width: 100%;
}

#index #the-four-corners {
  height: 100%;
  position: relative;
  width: 100%;
}

#index #the-four-corners:after {
  background-color: rgba(0, 0, 0, 0.92);
  bottom: 0px;
  content: "";
  display: block;
  left: 0px;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: opacity 666ms linear, visibility 0ms linear 666ms;
  visibility: hidden;
}

#index.message-3 #the-four-corners:after {
  opacity: 1;
  transition: opacity 666ms linear, visibility 0ms linear 0ms;
  visibility: visible;
}

#index #the-four-corners #head-wrap,
#index #the-four-corners #text-wrap,
#index #the-four-corners #card-wrap,
#index #the-four-corners #load-wrap {
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
}

#index #the-four-corners #load-wrap {
  transition: opacity 1s linear, visibility 0ms linear 1s;
}

#index #the-four-corners #load-wrap.loaded {
  opacity: 0;
  visibility: hidden;
}

#index #in-memory {
  background-color: var(--grandpas-basement);
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  transform: translate3d(0%, 0%, 0);
  transition: transform 666ms cubic-bezier(0.666, 0.000, 0.333, 1.000);
  -webkit-overflow-scrolling: touch;
  width: 100%;
}

#index.message-3 #in-memory {
  transform: translate3d(0%, -100%, 0);
}

#index #in-memory #hero {
  padding: 15% 10% 10%;
  position: relative;
  width: 100%;
}

#index #in-memory #hero:before {
  background-image: url(/didnt.png);
  background-position: 0px 0px;
  background-size: 43px 406px;
  bottom: 100%;
  content: "";
  display: block;
  height: 29px;
  left: 52px;
  margin: 0 0 -15% 10%;
  position: absolute;
  width: 43px;
}

#index.message-3 #in-memory #hero:before {
  animation: didnt 1s 5s steps(13) forwards;
}

@keyframes didnt {
  to {
    background-position: 0px -377px;
  }
}

#index #in-memory #hero #logo {
  height: 22px;
  margin-bottom: 10%;
  width: 150px;
}

#index #in-memory #hero #back-to-the-corners {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  line-height: 1em;
  margin-top: 15%;
  position: absolute;
  right: 10%;
  top: 0px;
}

#index #in-memory #hero #back-to-the-corners:before {
  border-bottom: 10px solid var(--black);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  content: "";
  left: -27px;
  position: absolute;
  top: 3px;
}

#index #in-memory #hero #hero-content p {
  font-size: 16px;
  line-height: 1.6em;
  margin: 0;
}

#index #in-memory #hero #hero-content #hero-img-wrap {
  display: none;
}

#index #in-memory #reel {
  padding: 0 10%;
  width: 100%;
}

#index #in-memory #last-starfighters,
#index #in-memory #lost-starfighters {
  display: flex;
  flex-wrap: wrap;
  padding: 10% 10% 5%;
  width: 100%;
}

#index #in-memory #lost-starfighters {
  background-color: var(--frumpy-noodle);
}

#index #in-memory #last-starfighters .big-wordz,
#index #in-memory #lost-starfighters .big-wordz {
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10%;
  width: 100%;
}

#index #in-memory #lost-starfighters .big-wordz {
  color: var(--white);
}

#index #in-memory #last-starfighters .human-being,
#index #in-memory #lost-starfighters .human-being {
  margin-bottom: 6.25%;
  width: 50%;
}

#index #in-memory #last-starfighters .human-being .name,
#index #in-memory #lost-starfighters .human-being .name {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
}

#index #in-memory #lost-starfighters .human-being .name {
  color: var(--white);
}

#index #in-memory #last-starfighters .human-being .occupasche,
#index #in-memory #lost-starfighters .human-being .occupasche {
  display: block;
  font-size: 12px;
  opacity: 0.666;
}

#index #in-memory #lost-starfighters .human-being .occupasche {
  color: var(--white);
  opacity: 0.333;
}

@media only screen and (min-width: 768px) {
  #index #in-memory #hero {
    padding: 8.333%;
  }

  #index #in-memory #hero:before {
    background-size: 57px 532px;
    height: 38px;
    left: 68px;
    margin: 0 0 -8.333% 8.333%;
    width: 57px;
  }

  @keyframes didnt {
    to {
      background-position: 0px -494px;
    }
  }

  #index #in-memory #hero #logo {
    height: 29px;
    margin-bottom: 8.333%;
    width: 200px;
  }

  #index #in-memory #hero #back-to-the-corners {
    margin-top: 8.333%;
    right: 8.333%;
  }

  #index #in-memory #hero #hero-content p {
    font-size: 18px;
  }

  #index #in-memory #reel {
    padding: 0 8.333%;
  }

  #index #in-memory #last-starfighters,
  #index #in-memory #lost-starfighters {
    padding: 8.333% 8.333% 4.166%;
  }

  #index #in-memory #last-starfighters .big-wordz,
  #index #in-memory #lost-starfighters .big-wordz {
    font-size: 40px;
    margin-bottom: 8.333%;
  }

  #index #in-memory #last-starfighters .human-being .name,
  #index #in-memory #lost-starfighters .human-being .name {
    font-size: 24px;
    margin-bottom: 8px;
  }

  #index #in-memory #last-starfighters .human-being .occupasche,
  #index #in-memory #lost-starfighters .human-being .occupasche {
    font-size: 16px;
    opacity: 0.666;
  }
}

@media only screen and (min-width: 1024px) {
  #index #in-memory #hero:before {
    background-size: 85px 798px;
    height: 57px;
    left: 103px;
    margin: 0 0 -8.333% 8.333%;
    width: 85px;
  }

  @keyframes didnt {
    to {
      background-position: 0px -741px;
    }
  }

  #index #in-memory #hero #logo {
    height: 43px;
    width: 300px;
  }

  #index #in-memory #hero #hero-content {
    display: flex;
    justify-content: space-between;
  }

  #index #in-memory #hero #hero-content p {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.6em;
    width: 50%;
  }

  #index #in-memory #hero #hero-content #hero-img-wrap {
    display: block;
    width: 40%;
  }

  #index #in-memory #hero #hero-content #hero-img-wrap img {
    display: block;
    height: auto;
    width: 100%;
  }

  #index #in-memory #reel {
    padding: 8.333% 16.666%;
  }

  #index #in-memory #last-starfighters .big-wordz,
  #index #in-memory #lost-starfighters .big-wordz {
    font-size: 60px;
    margin-bottom: 8.333%;
  }

  #index #in-memory #last-starfighters .human-being,
  #index #in-memory #lost-starfighters .human-being {
    margin-bottom: 5%;
    width: 33%;
  }
}

@media only screen and (min-width: 1440px) {
  #index #in-memory #hero #hero-content p {
    font-size: 32px;
  }

  #index #in-memory #last-starfighters .big-wordz,
  #index #in-memory #lost-starfighters .big-wordz {
    font-size: 72px;
    margin-bottom: 8.333%;
  }

  #index #in-memory #last-starfighters .human-being .name,
  #index #in-memory #lost-starfighters .human-being .name {
    font-size: 40px;
    margin-bottom: 12px;
  }

  #index #in-memory #last-starfighters .human-being .occupasche,
  #index #in-memory #lost-starfighters .human-being .occupasche {
    font-size: 21px;
    opacity: 0.666;
  }
}
</style>
