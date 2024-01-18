import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function MyBlogs() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
    console.log("blogs", blogs);
  return (
    <div>
        {blogs ? <Cards blogs={blogs}/> : <h1>User has not written any Blog</h1>}
    </div>
  )
}

export default MyBlogs