import axios from "axios";

const URL = "localhost:8080/api/publish";

function publish(username, message, jwt) {
    let data = {
        'sender': username,
        'message': message
    };
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'jwt-token': jwt
        }
    };
    let status = false;

    axios.post(URL, data, axiosConfig)
        .then((response) => {
            console.log(response)
            status = true
        })
        .catch((error) => {
            console.error(error)
        })

    return status
}

export default publish