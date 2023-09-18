import { useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { Blog } from "../../interfaces/Blog";

function Card({title, content, author, thumbnail}:Blog) {
  
  return (
    <div className="w-100">
      <article className=" relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={thumbnail}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-16 sm:pt-28 lg:pt-40">
          <div className="p-4 sm:p-6">
            <time className="block text-xs text-white/90">10th Oct 2022</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">
                {title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {content}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
