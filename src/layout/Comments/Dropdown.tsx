import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Comment } from "../../interfaces/Comment";
import axios from '../../api/axios'
import { toast } from "react-toastify";

interface Props{
    comment?: Comment,
    blogId?: string,
}
function Dropdown({comment, blogId}:Props) {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const removeCommentMutation = useMutation({
    mutationFn: async() => {
      const response = await axios.delete(`/blogs/${blogId}/comment/${comment?._id}/delete`)
      return response;
    },
    onError: () => {
        toast.error("Unauthorized", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      onSuccess: () => {
        toast.success("Comment Deleted", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        queryClient.invalidateQueries({queryKey: ['comments']})
      },
  })

  const handleRemoveComment = () => {
    removeCommentMutation.mutate()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <div className="w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Edit
              </div>
              <div
                onClick={handleRemoveComment}
                className="w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
