import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import "./Cards.css"
import { Blog } from '../../interfaces/Blog';
function Cards() {
  const blogs = useSelector((state: any) => state.blogs.blogs);
    console.log("blogs", blogs);
  return (
    <div className="grid__container gap-5">
        {
            blogs?.map(({title, content, author,thumbnail}:Blog) => {
                return <Card title={title} content={content} author={author} thumbnail={thumbnail}/>
            })
        }
    </div>
  )
}

export default Cards