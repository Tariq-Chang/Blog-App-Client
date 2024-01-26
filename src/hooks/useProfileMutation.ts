import { useMutation } from "@tanstack/react-query"
import { updateProfilePhoto } from "../api/profileApi/profileApi"

export const useUpdateProfileMutation = () => {
    return useMutation((formData:FormData) => updateProfilePhoto(formData))
}