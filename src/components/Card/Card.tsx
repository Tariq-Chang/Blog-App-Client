import { useSelector } from "react-redux"
import { User } from "../../interfaces/User";

function Card() {
    const blogs = useSelector((state:any) => state.blogs.blogs);
    console.log(blogs);
  return (
    <div>Card</div>
  )
}

export default Card