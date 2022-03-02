import axios from "axios";

let URL = "";

function allChats(username, jwt) {
    URL = URL + '?' + 'username=' + username + '&' + 'jwt=' + jwt

    let data = undefined;

    axios.get(URL)
        .then(response => {
            console.log("OK")
            data = response;
        })
        .catch(err => {
            console.error(err);
        })
    
    return data
}

export default allChats