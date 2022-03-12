import axios from "axios";

const URL = "";

function login(username, password) {
    const data = {
        "username": username,
        "password": password
    };

    console.log(data);

    axios
      .post(URL, data)
      .then(response => {
          console.log(response.data)
      })
      .catch(error => {
          console.error(error)
          console.log("Problem in logging in")
      })
}

export default login