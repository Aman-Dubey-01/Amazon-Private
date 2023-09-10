import axios from "axios";

const instance = axios.create({
    baseURL:
    'http://127.0.0.1:5001/clone-e3e98/us-central1/api'
    // 'https://us-central1-clone-e3e98.cloudfunctions.net/api'
     
});

export default instance;

