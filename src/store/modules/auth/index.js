// authentication state
const state = {
    user: null, // username
    jwt: null,  // jwt token
};

// authentication mutations
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

// authentication getters
const getters = {
    isAuthenticated: state => !!state.jwt,
    userName: state => state.user,
    getJwt: state => state.jwt,
};

// no actions needed
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations
};
