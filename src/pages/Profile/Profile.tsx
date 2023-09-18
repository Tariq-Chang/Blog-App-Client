import { useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Profile() {
  const user: User = useSelector((state: any) => state.user.activeUser);
  const {username, email, profile} = user;
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="w-100">
      <div className="flex align-items-center ml-8 h-16 text-2xl w-fit cursor-pointer hover:text-gray-700">
        <AiOutlineArrowLeft
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
          <img
            className="rounded-full h-48 w-48 mx-auto lg:mx-0 my-4"
            src={profile?.avatar}
            alt={username}
          />
          <input type="file" name="profile" id="profile" />
        </div>

        <form className="space-y-4 flex-grow mx-5" >
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
              placeholder="Username"
              type="text"
              id="username"
              value={username}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
              placeholder="Email address"
              type="email"
              id="email"
              value={email}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
              placeholder="Bio"
              rows={8}
              id="bio"
              value={profile?.bio}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-black px-5 py-3 font-medium text-white"
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
