import React from 'react'
import './product.css'
import { useParams, Link } from 'react-router-dom'

export default function ProductPage(){
  const {id} = useParams()
  return (
    React.createElement('section',{className:'product container'},
      React.createElement(Link,{to:'/catalog', className:'back'}, '← Назад'),
      React.createElement('div',{className:'product-grid card'},
        React.createElement('div',{className:'img-col'}, 'Фото'),
        React.createElement('div',{className:'info-col'},
          React.createElement('h2',null,'Формикарий '+id),
          React.createElement('p',null,'Детальное описание продукта.'),
          React.createElement('div',{className:'actions'},
            React.createElement('button',{className:'btn primary'}, 'Купить')
          )
        )
      )
    )
  )
}
