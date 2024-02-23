import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function Blogs() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
  return (
    <div>
      <h1 className="text-3xl mb-6 tracking-wide text-blue-600">All Blogs</h1>
        {blogs?.length > 0 ? <Cards blogs={blogs}/> : <h1 className="text-2xl">Blogs not found!</h1>}
    </div>
  )
}

export default Blogs