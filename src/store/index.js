import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import chats from './modules/chats';

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    chats
  },
  plugins: [createPersistedState()]
});