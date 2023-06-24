// trimwheel.js
const trimwheel = {
    state: {
      currentTranslationY: 0
    },
    mutations: {
      setCurrentTranslationY(state, value) {
        state.currentTranslationY = value;
      }
    },
    actions: {
      updateCurrentTranslationY({ commit }, value) {
        commit("setCurrentTranslationY", value);
      }
    },
    getters: {
      getCurrentTranslationY: (state) => state.currentTranslationY
    },
  };
  
  export default trimwheel;