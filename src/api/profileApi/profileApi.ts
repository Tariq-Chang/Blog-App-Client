import { User } from "../../interfaces/User";
import axios from "../axios";
export const updateProfilePhoto = async (formData: FormData) => {
  try{
    const response = await axios.post("/profile/upload", formData, {
      // important to give this
      headers: {
        "Content-Type":"multipart/form-data"
      }
    });
    return response;
  }catch(error){
    console.error("Uploading failed", error)
  }
};

export const updateUserInfo = async(userInfo: User) => {
  try{
    const response = await axios.put('/blogs/updateUserInfo', userInfo);
    return response;
  }catch(error){
    console.error("Failed to update the user");
  }
}