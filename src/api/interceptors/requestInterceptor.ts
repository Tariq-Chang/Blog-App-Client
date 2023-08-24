
import { AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

export default function requestInterceptor(instance:AxiosInstance):AxiosInstance{
    instance.interceptors.request.use((req:InternalAxiosRequestConfig):InternalAxiosRequestConfig => {
        req.headers.Authorization = `Bearer ${Cookies.get('jwtToken')}`;
        return req;       
    })
    return instance
}