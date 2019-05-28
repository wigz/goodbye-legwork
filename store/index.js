export const state = () => ({
  ready: false
})

export const mutations = {
  loaded(state) {
    state.ready = true;
  }
}
