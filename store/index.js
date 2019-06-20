export const state = () => ({
  ready: false,
  sequence: '',
  from: 0,
  to: -1,
  message: -1,
  message_shown: false
})

export const mutations = {
  loaded(state) {
    state.ready = true
  },
  sequence(state, sequence) {
    state.sequence = sequence
  },
  from(state, from) {
    state.from = from
  },
  to(state, to) {
    state.to = to
  },
  message(state, index) {
    state.message = index
  },
  message_shown(state, shown) {
    state.message_shown = shown
  }
}
