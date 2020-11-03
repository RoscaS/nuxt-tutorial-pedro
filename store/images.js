
export const state = () => ({
  data: [],
});

export const mutations = {
  ADD: (state, payload) => state.data.push(payload),
}

export const actions = {
  async fetch({ commit }) {
    const { data } = await this.$axios.get('images');
    data.forEach(i => commit('ADD', i));
  },
}

export const getters = {
  biggerThanHundred: state => size => state.data.filter(i => i.id > size),
}


