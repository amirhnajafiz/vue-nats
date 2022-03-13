import axios from "axios";
import store from "../../store"

const URL = process.env.TELEGRAPH_CLIENT + "/api/join";

function login(username, password) {
    const data = {
        "username": username,
        "password": password
    };
    const axiosConfig = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        }
    }

    axios.post(URL, data, axiosConfig)
      .then(response => {
          store.commit('Login', {'username': username, 'jwt': response.data})
      })
      .catch(error => {
          console.error(error)
          console.log("Problem in logging in")
      })
}

export default login