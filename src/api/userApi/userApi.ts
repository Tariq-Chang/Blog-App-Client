import { User } from '../../interfaces/User'
import axios from '../axios'

export const register = async(user: User) => {
    try {
        const response = await axios.post('/auth/register', user);
        console.log("register",response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const login = async(user: User) => {
    try{
        const response = await axios.post('/auth/login', user);
        console.log("login",response);
        return response.data;
    }catch(error){
        console.log(error);
    }
}