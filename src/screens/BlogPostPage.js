import React from 'react'
import './blogpost.css'
import { useParams, Link } from 'react-router-dom'

export default function BlogPostPage(){
  const {id} = useParams()
  return (
    React.createElement('section',{className:'blog-post container'},
      React.createElement(Link,{to:'/blog', className:'back'}, '← Назад'),
      React.createElement('article',{className:'card'},
        React.createElement('h1',null,'Пост заголовок '+id),
        React.createElement('p',null,'Полный текст поста. Здесь будет длинный контент.')
      )
    )
  )
}
