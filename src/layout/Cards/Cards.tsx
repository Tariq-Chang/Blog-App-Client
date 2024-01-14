import Card from '../../components/Card/Card'
import "./Cards.css"
import { Blog } from '../../interfaces/Blog';

interface CardsProps{
  blogs: Blog[]
}

function Cards({ blogs }:CardsProps) {
  console.log("Blogs",blogs);
  return (
    <div className="grid__container gap-5">
      {
        blogs ? (blogs?.map(({ title, content, author, thumbnail }: Blog) => {
          return <Card title={title} content={content} author={author} thumbnail={thumbnail} />
        })) : <h1>Blog Not Found</h1>
      }
    </div>
  )
}

export default Cards