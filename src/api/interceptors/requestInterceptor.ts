
import { AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

export default function requestInterceptor(instance:AxiosInstance):AxiosInstance{
    instance.interceptors.request.use((req:InternalAxiosRequestConfig):InternalAxiosRequestConfig => {
        req.headers.Authorization = Cookies.get('token');
        return req;       
    })
    return instance
}