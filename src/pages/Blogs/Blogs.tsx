import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function Blogs() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
    console.log("blogs", blogs);
  return (
    <div>
        {blogs && <Cards blogs={blogs}/>}
    </div>
  )
}

export default Blogs