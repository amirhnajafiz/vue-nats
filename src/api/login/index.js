import axios from "axios";

const URL = "localhost:8080/join";

function login(username, password) {
    const data = {
        "username": username,
        "password": password
    };

    console.log(data);

    const res = {
        "status": false,
        "jwt": null
    }

    axios
      .post(URL, data)
      .then(response => {
          console.log(response.data)
          res.status = true
          res.jwt = response.data["jwt-token"]
      })
      .catch(error => {
          console.error(error)
          console.log("Problem in logging in")
      })
    
      return res
}

export default login