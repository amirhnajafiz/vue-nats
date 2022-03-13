import axios from "axios";

let URL = "http://localhost:3000/api/suppress";

function allChats(username, jwt) {
    let data = undefined;
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
            data = response;
        })
        .catch(err => {
            console.error(err);
            data = []
        })
    
    return data
}

export default allChats