import { useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "../../api/axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  blogId?: string;
}
function CreateComment({blogId}: Props) {
  const [commentData, setCommentData] = useState<string>("");
  const queryClient = useQueryClient()
  const addCommentMutation = useMutation({
    mutationFn: async (comment: string) => {
      const response = await axios.post(`/blogs/${blogId}/comment/add`, {
        comment,
      });
      return response;
    },
    onError: () => {
      toast.error("Error adding comment", {
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
      toast.success("Comment added", {
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
      setCommentData('')
    },
  });

  const handleSubmit = async (e:any) => {
        e.preventDefault();
        addCommentMutation.mutate(commentData);
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            className="px-0 w-full h-48 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
            value={commentData}
            onChange={(e) => setCommentData(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
    </>
  );
}

export default CreateComment;
