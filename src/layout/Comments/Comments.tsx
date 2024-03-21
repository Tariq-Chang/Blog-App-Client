import { useQuery } from "@tanstack/react-query";
import axios from '../../api/axios'
import CommentCard from "../../components/Comment/CommentCard";
import { Comment } from "../../interfaces/Comment";
import CreateComment from "./CreateComment";
import { ToastContainer } from "react-toastify";

function Comments({blogId}: {blogId: string | undefined}) {
    const {data} = useQuery({queryKey: ['comments'], queryFn: async() => {
        try {
         const response = await axios.get(`/blogs/${blogId}/comments`);
         return response.data;
        } catch (error) {
         console.log("error", error);
        }
     }})

    const comments = data?.comments;
  return (
    <section
      className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased"
      id="commentSection"
    >
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
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
        <CreateComment blogId={blogId} />
        <div>
          {comments?.map((commentData: Comment) => (
            <CommentCard
              key={commentData._id}
              comment={commentData}
              blogId={blogId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
