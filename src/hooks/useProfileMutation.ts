import { useMutation } from "@tanstack/react-query"
import { updateProfilePhoto, updateUserInfo } from "../api/profileApi/profileApi"
import { User } from "../interfaces/User"

export const useUpdateProfileMutation = () => {
    return useMutation((formData:FormData) => updateProfilePhoto(formData))
}

export const useUpdateUserInfoMutation = () => {
    return useMutation((userInfo: User) => updateUserInfo(userInfo));
}