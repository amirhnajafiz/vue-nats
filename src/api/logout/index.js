import axios from "axios";

let URL = "";

function logout(username, jwt) {
    URL = URL + '?' + 'username=' + username + '&' + 'jwt=' + jwt;

    axios.get(URL)
        .then(response => {
            console.log(response.status)
        })
        .catch(err => {
            console.error(err);
        })
}

export default logout