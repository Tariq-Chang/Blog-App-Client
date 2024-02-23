import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function MyBlogs() {
  const myBlogs = useSelector((state: any) => state.blogs.myBlogs);

  return (
    <div>
      <h1 className="text-3xl mb-6 tracking-wide text-blue-600">My Blogs</h1>
        {(myBlogs && myBlogs.length > 0) ? <Cards blogs={myBlogs}/> : <h1 className="text-2xl">User has not written any Blog</h1>}
    </div>
  )
}

export default MyBlogs