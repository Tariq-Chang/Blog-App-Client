
import axios from 'axios';
import requestInterceptor from './interceptors/requestInterceptor';

const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-Type":'application/json',
        "Accept-Encoding":"multiple/form-data"
    }
})

requestInterceptor(instance);

export default instance;