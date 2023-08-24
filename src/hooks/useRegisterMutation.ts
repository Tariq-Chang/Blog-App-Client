import { useMutation } from "@tanstack/react-query"
import { register } from "../api/userApi/userApi"
import { User } from "../interfaces/User";

export const useRegisterMutation = () => {
    return useMutation((credentials:User) => register(credentials), {
        onSuccess: (data) => {
            console.log("register", data);
        }
    })
}