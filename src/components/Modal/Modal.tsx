import { useMutation } from "@tanstack/react-query";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Modal({isShow, setIsShow, blogId}:{isShow: boolean, setIsShow:any, blogId: string}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteBlogMutation = useMutation({
    mutationFn: async (blogId: string) => {
      const response = axios.delete(`/blogs/delete/${blogId}`);
      return response;
    },
    onError: () => {
      toast.error("Error Deleting Blog", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    onSuccess: () => {
      toast.success("Blog Deleted", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  });
  const handleDelete = () => {
    deleteBlogMutation.mutate(blogId);
    navigate('/dashboard');
  }
  return (
    <div className="fixed backdrop-blur-md inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      {isShow && (
        <div className="z-10 rounded-lg bg-white mx-2 p-8 shadow-2xl ">
          <h2 className="text-2xl text-red-500 font-bold">
            Are you sure you want to delete the blog?
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            This will delete your blog permenantly.
          </p>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-red-600 text-white px-4 py-2 text-sm font-medium"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              type="button"
              className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
              onClick={() => setIsShow(false)}
            >
              No, go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal
