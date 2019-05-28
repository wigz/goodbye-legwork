export const state = () => ({
  frames: []
})

export const mutations = {
  add(state, cnv) {
    state.frames.push(cnv)
  }
}
