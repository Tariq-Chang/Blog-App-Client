import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function MyBlogs() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
    console.log("blogs", blogs);
  return (
    <div>
        <Cards blogs={blogs}/>
    </div>
  )
}

export default MyBlogs