export const state = () => ({
  ready: false,
  sequence: '',
  from: 0,
  to: -1
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
  }
}
