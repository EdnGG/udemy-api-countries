import { createStore } from "vuex";

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await res.json();
        console.log(data);
        commit("setPaises", data);
      } catch (e) {
        console.log(`Error: ${e.message}`);
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter((pais) =>
        // return pais.region === region
        pais.region.includes(region)
      );
      commit("setPaisesFiltrados", filtro);
    },
    filtroNombre({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter((pais) => {
        const textoApi = pais.name.toLowerCase();
        if (textoApi.includes(textoCliente)) {
          return pais;
        }
      });
      commit("setPaisesFiltrados", filtro);
    },
  },
  getters: {
    // Getters siempre van a retornar algo
    // Tambien reciben el state como parametro
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) =>
        a.population < b.population ? 1 : -1
      );
    },
  },
  modules: {},
});
