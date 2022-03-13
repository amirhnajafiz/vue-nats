// chat state
const state = {
    chatFlag: false, // flag defines if the data is valid
    chatData: [], // chat data is what we get from database
};

// chat mutations
const mutations = {
    Setup(state, {flag, data}){
        state.chatFlag = flag
        state.chatData = data
    }
};

// chat getters
const getters = {
    isValid: state => state.chatFlag,
    getChats: state => state.chatData,
};

// no actions needed
const actions = {};

export default {
    state,
    getters,
    actions,
    mutations
};
