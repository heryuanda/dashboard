export const state = {
  page: ''
}

export const mutations = {
  setPage (state, value) {
    state.page = value
  }
}

export const actions = {
  setCurrentPage: ({commit}, {data} = {}) => {
    commit('setPage', data)
  }
}

export const getters = {
  page: (state) => {
    return state.page
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
