const state = {
    user: null,
    jwt: null,
};

const mutations = {
    Login(state, username, jwt){
        state.user = username
        state.jwt = jwt
    },
    LogOut(state){
        state.user = null
        state.jwt = null
    },
};

const getters = {
    isAuthenticated: state => !!state.jwt,
    userName: state => state.user,
};

const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations
};
