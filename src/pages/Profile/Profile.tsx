import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useUpdateProfileMutation } from "../../hooks/useProfileMutation";
import { setCurrentUser, setCurrentUserProfilePhoto } from "../../redux/features/userSlice";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Cookies from 'js-cookie'

function Profile() {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: User = useSelector((state: any) => state.user.activeUser);
  const [username, setUsername] = useState<string | undefined>(user?.username);
  const [bio, setBio] = useState<string | undefined>(user?.profile?.bio);

  const updateProfilePhotoMutation = useUpdateProfileMutation();
  const { isLoading } = updateProfilePhotoMutation;
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) setFile(files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error("No file selected");
        return;
      }
      const formData = new FormData();
      formData.append("profile", file);

      const response = await updateProfilePhotoMutation.mutateAsync(formData);
      dispatch(setCurrentUserProfilePhoto(response?.data.img_url));
      setFile(null);
      console.log("Upload successful");
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };


  const handleUserInfoUpdate = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = Cookies.get('jwtToken');
      const response = await axios.put('http://localhost:5000/api/v1/blogs/updateUserInfo', {username, bio}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log("updated user", response);
      dispatch(setCurrentUser(response.data.updatedUser))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-100">
      <div className="w-[60%] mx-auto h-16 text-2xl cursor-pointer hover:text-gray-700">
        <BsArrowLeftSquareFill
          onClick={() => navigate(-1)}
          style={{ height: "100%" }}
        />
      </div>
      <hr />
      <div className="w-[60%] mx-auto my-5 px-3">
        <h1 className="text-2xl">Profile Setting</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[60%] mx-auto border py-5 px-3 rounded-lg">
        <div className="sm:mr-4">
          <div>
            <a
              href={user?.profile?.avatar}
              target="_blank"
              className={`relative top-0.5 grid place-items-center w-48 h-48 mx-auto rounded-full`}
            >
              {isLoading && (
                <BeatLoader
                  color="#000"
                  size="20"
                  className="absolute grid place-items-center rotate-90 mt-6"
                />
              )}
              <img
                className={`rounded-full h-48 w-48 mx-auto object-cover hover:opacity-70 lg:mx-0 my-4 ${
                  isLoading && "opacity-30"
                }`}
                src={
                  user?.profile?.avatar
                    ? user?.profile?.avatar
                    : "https://www.w3schools.com/w3images/avatar2.png"
                }
                alt={user?.username}
              />
            </a>
          </div>
          <input
            type="file"
            name="profile"
            id="profile"
            onChange={handleFileChange}
          />
          {file && (
            <div>
              <button
                className="w-full sm:w-auto rounded-lg bg-black px-5 py-2 mt-2 font-medium text-white"
                onClick={handleUpload}
              >
                Update
              </button>
            </div>
          )}
        </div>

        <form className="space-y-4 flex-grow mx-5" onSubmit={handleUserInfoUpdate}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}

            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
              placeholder="Bio"
              rows={8}
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className={`w-full cursor-pointer sm:w-auto rounded-lg px-5 py-3 font-medium text-white ${user.username === username && user?.profile?.bio === bio ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
              disabled={user.username === username && user?.profile?.bio === bio}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
