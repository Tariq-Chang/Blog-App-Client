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
        (blogs?.map(({ title, content, author, thumbnail }: Blog) => {
          return <Card title={title} content={content} author={author} thumbnail={thumbnail} />
        }))
      }
    </div>
  )
}

export default Cards