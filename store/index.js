export const actions = {
  async nuxtServerInit({ dispatch }, request) {
    await dispatch('images/fetch');
    await dispatch('catagories/fetch');
  },
}
