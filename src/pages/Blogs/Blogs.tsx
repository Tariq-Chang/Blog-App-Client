import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function Blogs() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
    console.log("blogs", blogs);
  return (
    <div>
        {blogs?.length > 0 ? <Cards blogs={blogs}/> : <h1 className="text-2xl">Blogs not found!</h1>}
    </div>
  )
}

export default Blogs