export const state = () => ({
  frames: []
})

export const mutations = {
  add(state, {index, cnv}) {
    state.frames[index] = cnv
  }
}
