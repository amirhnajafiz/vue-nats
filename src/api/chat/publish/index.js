import axios from "axios";

const URL = process.env.TELEGRAPH_CLIENT + "/api/publish";

function publish(username, message, jwt) {
    const data = {
        'sender': username,
        'message': message
    };
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'jwt-token': jwt
        }
    };

    axios.post(URL, data, axiosConfig)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })
}

export default publish