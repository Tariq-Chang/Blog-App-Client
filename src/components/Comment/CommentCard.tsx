import { Comment } from "../../interfaces/Comment";
import Dropdown from "../../layout/Comments/Dropdown";

interface Props {
  comment: Comment;
}

function CommentCard({ comment }: Props) {
  const {user, comment:commentValue} = comment;

  const formatedCreatedAt = comment?.createdAt?.split('T')[0]

  return (
    <article className="p-6 text-base bg-white border rounded-lg my-2 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            id="avatarButton"
            className="w-10 h-10 object-contain rounded-full cursor-pointer border-2 border-gray-800"
            src={user?.profile?.avatar}
            alt="User dropdown"
          />
          <div className="px-2 flex flex-col">
            <small className="mb-0 font-bold" style={{ fontSize: "14px" }}>
              {user?.username}
            </small>
            <p className="text-sm text-gray-600 dark:text-gray-400">
            <small>
              {formatedCreatedAt
                ? new Date(formatedCreatedAt).toDateString()
                : "uknown"}
            </small>
          </p>
          </div>
          
        </div>
        <Dropdown />
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{commentValue}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}

export default CommentCard;
