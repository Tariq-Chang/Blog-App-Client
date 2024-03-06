import Card from '../../components/Card/Card'
import "./Cards.css"
import { Blog } from '../../interfaces/Blog';
import { Link, useNavigate } from 'react-router-dom';

interface CardsProps{
  blogs: Blog[]
}

function Cards({ blogs }:CardsProps) {
  
  const navigate = useNavigate();
  const handleNavigate = (_id:string | undefined) => {
    navigate(`/blog/${_id}`)
  }
  return (
    <div className="grid__container gap-5">
      {
        (blogs?.map((blog: Blog) => {
          return (
            <div onClick={() => handleNavigate(blog?._id)} className="cursor-pointer">
              <Card key={blog._id} _id={blog._id} title={blog.title} author={blog.author} thumbnail={blog.thumbnail} blog={blog}/>
            </div>
          )
        }))
      }
    </div>
  )
}

export default Cards