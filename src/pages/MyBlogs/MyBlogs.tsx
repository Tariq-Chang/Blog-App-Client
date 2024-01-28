import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function MyBlogs() {
  const myBlogs = useSelector((state: any) => state.blogs.myBlogs);

  return (
    <div>
        {(myBlogs && myBlogs.length > 0) ? <Cards blogs={myBlogs}/> : <h1 className="text-2xl">User has not written any Blog</h1>}
    </div>
  )
}

export default MyBlogs