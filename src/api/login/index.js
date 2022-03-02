import axios from "axios";

const URL = "";

function login(username, password) {
    const data = {
        "username": username,
        "password": password
    };

    axios
      .post(URL, data)
      .then(response => (
          console.log(response.data)
      ))
      .catch(error => {
          console.error(error)
          console.log("Problem in logging int")
      })
}

export default login