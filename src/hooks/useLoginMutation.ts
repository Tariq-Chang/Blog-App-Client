import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/userApi/userApi";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/features/userSlice";
export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    return useMutation((credentials:User) => login(credentials))
}