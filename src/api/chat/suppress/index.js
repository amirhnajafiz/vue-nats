import axios from "axios";
import store from "../../../store"

let URL = process.env.TELEGRAPH_CLIENT + "/api/suppress";

function allChats(username, jwt) {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'jwt-token': jwt
        }
    };

    axios.get(URL, axiosConfig)
        .then(response => {
            console.log(response)
            store.commit('Setup', {
                'flag': true,
                'data': response.data
            })
        })
        .catch(err => {
            console.error(err);
        })
}

export default allChats