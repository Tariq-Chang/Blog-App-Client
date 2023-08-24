import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/userApi/userApi";
import { User } from "../interfaces/User";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((credentials:User) => login(credentials), {
        onSuccess: (data) => {
            console.log("Inside mutation",data);
        }
    })
}