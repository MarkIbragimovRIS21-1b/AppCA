import React from 'react'
import './catalog.css'
import { Link } from 'react-router-dom'

const items = new Array(6).fill(0).map((_,i)=>({id:i+1,title:'Формикарий '+(i+1), price: 29+(i*5)}))

export default function CatalogPage(){
  return (
    React.createElement('section',{className:'catalog container'},
      React.createElement('h2',null,'Каталог'),
      React.createElement('div',{className:'grid'},
        items.map(it=> React.createElement('article',{className:'card item', key:it.id},
          React.createElement('div',{className:'thumb'}, 'Фото'),
          React.createElement('h3',null,it.title),
          React.createElement('p',null, it.price+' USD'),
          React.createElement(Link,{to:'/product/'+it.id, className:'btn'}, 'Подробнее')
        ))
      )
    )
  )
}
