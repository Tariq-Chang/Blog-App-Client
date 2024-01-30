import Card from '../../components/Card/Card'
import "./Cards.css"
import { Blog } from '../../interfaces/Blog';

interface CardsProps{
  blogs: Blog[]
}

function Cards({ blogs }:CardsProps) {
  
  return (
    <div className="grid__container gap-5">
      {
        (blogs?.map((blog: Blog) => {
          return <Card _id={blog._id} title={blog.title} author={blog.author} thumbnail={blog.thumbnail} blog={blog}/>
        }))
      }
    </div>
  )
}

export default Cards