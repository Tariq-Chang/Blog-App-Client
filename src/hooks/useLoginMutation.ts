import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/userApi/userApi";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    return useMutation((credentials:User) => login(credentials), {
        onSuccess: (data) => {
            const token = data.token.split(' ')[1];
            console.log(token);
            Cookies.set('jwtToken', token, {expires:60});
            navigate('/dashboard');
        }
    })
}