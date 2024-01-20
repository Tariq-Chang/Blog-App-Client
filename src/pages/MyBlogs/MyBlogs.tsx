import { useSelector } from 'react-redux';
import Cards from '../../layout/Cards/Cards'

function MyBlogs() {
  const myBlogs = useSelector((state: any) => state.blogs.myBlogs);

  return (
    <div>
        {myBlogs ? <Cards blogs={myBlogs}/> : <h1>User has not written any Blog</h1>}
    </div>
  )
}

export default MyBlogs