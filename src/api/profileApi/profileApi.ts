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
