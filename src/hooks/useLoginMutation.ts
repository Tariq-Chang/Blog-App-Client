import { useMutation} from "@tanstack/react-query";
import { login } from "../api/userApi/userApi";
import { User } from "../interfaces/User";

export const useLoginMutation = () => {
    return useMutation((credentials:User) => login(credentials))
}