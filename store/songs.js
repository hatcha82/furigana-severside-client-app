export const state = () => ({
  list: []
})

export const mutations = {
  add(state, songs) {
    state.list.push(...songs)
  }
}
